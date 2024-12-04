import { render, screen } from "@testing-library/react";
import { PopUpConfirm } from "../PopUpConfirm";

describe("PopUpConfirm Component", () => {
    it("should render the dialog with the provided message", () => {
        const message =
            "The information was sent to the e-mail address entered.";
        render(<PopUpConfirm message={message} />);
        const messageElement = screen.getByText(message);
        expect(messageElement).toBeInTheDocument();
    });

    it("should render a confirmation image with the correct path", () => {
        render(
            <PopUpConfirm message="The information was sent to the e-mail address entered." />
        );
        const image = screen.getByRole("img");
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute("src", "src/assets/icons/check.svg");
    });

    it("should render the dialog element with correct class", () => {
        render(
            <PopUpConfirm message="The information was sent to the e-mail address entered." />
        );
        const dialog = screen.getByRole("dialog");
        expect(dialog).toBeInTheDocument();
        expect(dialog).toHaveClass("popUpConfirm");
    });
});
