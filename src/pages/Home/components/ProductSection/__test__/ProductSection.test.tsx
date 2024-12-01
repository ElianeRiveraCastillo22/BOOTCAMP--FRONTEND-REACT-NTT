import { useFilterContext } from "@/context";
import { productStub } from "@/mappers/__stubs__/product.stub";
import { MappedProduct } from "@/models/product.model";
import { render, screen } from "@testing-library/react";
import { ProductSection } from "../ProductSection";
import { showProducts } from "../modules/showProducts";

jest.mock("@/context", () => ({
    useFilterContext: jest.fn(),
}));

jest.mock("../modules/showProducts", () => ({
    showProducts: jest.fn(),
}));

const mockDataProducts: MappedProduct[] = [productStub];

describe("ProductSection", () => {
    beforeEach(() => {
        (useFilterContext as jest.Mock).mockReturnValue({
            searchByTitle: "",
            searchByCategory: "",
        });
    });

    it("should render product skeletons when data is loading", () => {
        render(
            <ProductSection
                dataProducts={mockDataProducts}
                loadingDataProducts={true}
            />
        );

        const skeletons = screen.getAllByTestId("product-skeleton");
        expect(skeletons.length).toBe(8);
    });

    it("should render products when they are available", () => {
        (showProducts as jest.Mock).mockReturnValue(
            mockDataProducts.map((product) => (
                <div key={product.id} data-testid="product-card">
                    {product.title}
                </div>
            ))
        );

        render(
            <ProductSection
                dataProducts={mockDataProducts}
                loadingDataProducts={false}
            />
        );

        const productCards = screen.getAllByTestId("product-card");
        expect(productCards.length).toBe(mockDataProducts.length);
        expect(
            screen.getByText("Essence Mascara Lash Princess")
        ).toBeInTheDocument();
    });
});
