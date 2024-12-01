import { useFilterContext } from "@/context";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Home } from "../home";
import { useFetch } from "@/Hooks/UseFetch";
import { productStub } from "@/mappers/__stubs__/product.stub";

jest.mock("@/context", () => ({
    useFilterContext: jest.fn(),
}));

jest.mock("@/Hooks/UseFetch", () => ({
    useFetch: jest.fn(),
}));

const renderComponent = async (): Promise<void> => {
    render(
        <MemoryRouter initialEntries={["/home"]}>
            <Routes>
                <Route path="/home" element={<Home />} />
            </Routes>
        </MemoryRouter>
    );
};

describe("Home Component", () => {
    it("should render category and product sections correctly", async () => {
        const mockCategoryData = ["fragrances", "beauty", "groceries"];
        const mockProductData = [productStub];

        (useFilterContext as jest.Mock).mockReturnValue({
            searchByCategory: "fragrances",
        });

        (useFetch as jest.Mock).mockImplementationOnce(() => ({
            data: mockCategoryData,
            loading: false,
        }));

        (useFetch as jest.Mock).mockImplementationOnce(() => ({
            data: mockProductData,
            loading: false,
        }));

        renderComponent();

        await waitFor(() => {
            expect(screen.getByText("fragrances")).toBeInTheDocument();
            expect(screen.getByText("beauty")).toBeInTheDocument();
            expect(screen.getByText("groceries")).toBeInTheDocument();
        });

        await waitFor(() => {
            expect(
                screen.getByText("Essence Mascara Lash Princess")
            ).toBeInTheDocument();
        });
    });
});
