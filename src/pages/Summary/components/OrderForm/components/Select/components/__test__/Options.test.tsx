import { render, screen, fireEvent } from "@testing-library/react";
import { Options } from "../Options";
import { valuesForm } from "../../../../OrderForm";

describe("<Options/>", () => {
    const mockDistrict = "Ate";
    const mockSetDataForm = jest.fn();

    const mockRefLabel: React.RefObject<HTMLParagraphElement> = {
        current: document.createElement("p"),
    };

    const mockUseDropDown: React.RefObject<HTMLUListElement> = {
        current: document.createElement("ul"),
    };

    beforeEach(() => {
        jest.clearAllMocks();

        if (mockRefLabel.current && mockUseDropDown.current) {
            mockRefLabel.current.textContent = "";
            mockUseDropDown.current.className = "";
        }

        render(
            <Options
                districts={mockDistrict}
                refLabel={mockRefLabel}
                useDropDown={mockUseDropDown}
                setDataForm={mockSetDataForm}
            />
        );
    });

    it("should render the district name", () => {
        const listItem = screen.getByText(mockDistrict);
        expect(listItem).toBeInTheDocument();
    });

    it("should select the district and update the dataForm state using setDataForm", () => {
        const listItem = screen.getByText(mockDistrict);
        fireEvent.click(listItem);

        // setDataForm == mock.calls[0][0]
        mockSetDataForm.mock.calls[0][0]((prev: valuesForm) => ({
            ...prev,
            district: mockDistrict,
        }));

        expect(mockRefLabel.current?.textContent).toBe(mockDistrict);
        expect(
            mockUseDropDown.current?.classList.contains(
                "cart-page__dropdown--close"
            )
        ).toBe(true);
        expect(mockSetDataForm).toHaveBeenCalledWith(expect.any(Function));
        expect(mockSetDataForm).toHaveBeenCalledTimes(1);
    });
});
