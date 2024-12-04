import { render, screen } from "@testing-library/react";
import { ButtonForm } from "../ButtonForm";

describe("ButtonForm Component", () => {
    it("should render the button with the correct text", () => {
        render(<ButtonForm nameButton="Log in" type="submit" />);
        const button = screen.getByRole("button", { name: "Log in" });
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent("Log in");
    });

    it("should have the correct type attribute", () => {
        render(<ButtonForm nameButton="Log in" type="submit" />);
        const button = screen.getByRole("button", { name: "Log in" });
        expect(button).toHaveAttribute("type", "submit");
    });

    it("should apply the correct classes to the button", () => {
        render(<ButtonForm nameButton="Log in" type="button" />);
        const button = screen.getByRole("button", { name: "Log in" });
        expect(button).toHaveClass("form-button");
        expect(button).toHaveClass("form-button--submit");
    });
});
