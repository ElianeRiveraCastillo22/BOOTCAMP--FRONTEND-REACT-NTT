import { MappedProduct } from "@/models/product.model";
import { render, screen } from "@testing-library/react";
import { showProducts } from "../showProducts";
import { productStub } from "@/mappers/__stubs__/product.stub";

const products: MappedProduct[] = [productStub];

describe("<showProducts/>", () => {
    it("should render FilterError when there are no products", () => {
        render(showProducts([]));

        const errorMessage = screen.getByText(
            "Oops, we did not find products matching your search."
        );
        expect(errorMessage).toBeInTheDocument();
    });

    it("should render ProductCard components for each product", () => {
        render(showProducts(products));

        const productCards = screen.getAllByTestId("product-card");
        expect(productCards).toHaveLength(products.length);

        const firstProduct = products[0];
        const firstProductCard = productCards[0];
        expect(firstProductCard).toHaveTextContent(firstProduct.title);
    });
});
