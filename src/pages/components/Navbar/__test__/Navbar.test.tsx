import { useFilterContext, useShoppingCartContext } from "@/context";
import { ModuleRoutes } from "@/pages/routes";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import { MemoryRouter } from "react-router-dom";
import { Navbar } from "../Navbar";

jest.mock("@/context", () => ({
    useShoppingCartContext: jest.fn(),
    useFilterContext: jest.fn(),
}));

const renderComponent = () => {
    render(
        <MemoryRouter>
            <Navbar />
        </MemoryRouter>
    );
};
jest.mock("@/pages/routes", () => ({
    ModuleRoutes: { Init: "/" },
}));

describe("Navbar", () => {
    beforeEach(() => {
        jest.clearAllMocks();

        (useShoppingCartContext as jest.Mock).mockReturnValue({
            stateCart: [],
        });

        (useFilterContext as jest.Mock).mockReturnValue({
            setSearchByTitle: jest.fn(),
        });
    });

    it("should render the navbar with logo, search, and cart", () => {
        renderComponent();

        const logo = screen.getByAltText("Store logo");
        expect(logo).toBeInTheDocument();
        expect(logo.closest("a")).toHaveAttribute("href", "/");

        const cartCounter = screen.getByLabelText("Number of products in cart");
        expect(cartCounter).toHaveTextContent("0");
    });

    it("should render both search inputs with the correct visibility", () => {
        renderComponent();

        const searchInputs =
            screen.getAllByPlaceholderText("Search product...");
        expect(searchInputs).toHaveLength(2);
        expect(searchInputs[0]).toHaveAttribute("aria-hidden", "true");
        expect(searchInputs[1]).toHaveAttribute("aria-hidden", "false");
    });

    it("should navigate to '/' when clicking on the logo", () => {
        renderComponent();

        const logoLink = screen.getByAltText("Store logo").closest("a");
        if (logoLink) {
            act(() => {
                fireEvent.click(logoLink);
            });
            expect(window.location.pathname).toBe(ModuleRoutes.Init);
        }
    });

    it("should update the cart counter based on the cart state", () => {
        (useShoppingCartContext as jest.Mock).mockReturnValue({
            stateCart: [{}, {}, {}],
        });

        renderComponent();

        const cartCounter = screen.getByLabelText("Number of products in cart");
        expect(cartCounter).toHaveTextContent("3");
    });

    it("should call setSearchByTitle when typing in the search input to update the searchByTitle context", () => {
        const setSearchByTitleMock = jest.fn();

        (useFilterContext as jest.Mock).mockReturnValue({
            setSearchByTitle: setSearchByTitleMock,
        });

        renderComponent();

        const searchInputs =
            screen.getAllByPlaceholderText("Search product...");

        fireEvent.change(searchInputs[0], { target: { value: "Essence" } });
        fireEvent.change(searchInputs[1], { target: { value: "Essence" } });

        expect(setSearchByTitleMock).toHaveBeenCalledWith("Essence");
    });
});
