import { render, screen } from "@testing-library/react";
import { Summary } from "../Summary";
import { useShoppingCartContext } from "@/context";
import { productStub } from "@/mappers/__stubs__/product.stub";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { ModuleRoutes } from "@/pages/routes";

jest.mock("@/context", () => ({
    useShoppingCartContext: jest.fn(),
}));

const renderComponent = async (): Promise<void> => {
    render(
        <MemoryRouter initialEntries={[ModuleRoutes.Summary]}>
            <Routes>
                <Route path={ModuleRoutes.Summary} element={<Summary />} />
            </Routes>
        </MemoryRouter>
    );
};

describe("Summary", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should render EmptyCart component when the cart is empty", async () => {
        (useShoppingCartContext as jest.Mock).mockReturnValue({
            stateCart: [],
        });

        await renderComponent();
        expect(
            screen.getByText("You have not added any items to your cart 😓")
        ).toBeInTheDocument();
    });

    it("should render Cart and OrderForm components when the cart has items", async () => {
        (useShoppingCartContext as jest.Mock).mockReturnValue({
            stateCart: [
                {
                    product: productStub,
                    quantity: 2,
                },
            ],
        });

        await renderComponent();

        expect(
            screen.getByText("Essence Mascara Lash Princess")
        ).toBeInTheDocument();
        expect(screen.getByText("2")).toBeInTheDocument();
        expect(screen.getByText("Total Amount:")).toBeInTheDocument();

        expect(screen.getByText("Shipping Information")).toBeInTheDocument();
    });
});
