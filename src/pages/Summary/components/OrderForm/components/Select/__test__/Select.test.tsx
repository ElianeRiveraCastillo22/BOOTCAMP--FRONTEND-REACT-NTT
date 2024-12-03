import { useFetch } from "@/Hooks/UseFetch";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Select } from "../Select";
import { act } from "react";

jest.mock("@/Hooks/UseFetch", () => ({
    useFetch: jest.fn(),
}));

describe("<Select/>", () => {
    const mockSetDataForm = jest.fn();
    const mockDistricts = ["Ate", "Callao"];
    const mockDistrict = "Ate";

    const renderSelectComponent = (mockData = { data: mockDistricts }) => {
        (useFetch as jest.Mock).mockReturnValue(mockData);
        render(<Select setDataForm={mockSetDataForm} />);
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should render districts when the data is returned", async () => {
        renderSelectComponent();

        await waitFor(() => {
            mockDistricts.forEach((district) => {
                expect(screen.getByText(district)).toBeInTheDocument();
            });
        });
    });

    it("should update form data when a district is selected", async () => {
        renderSelectComponent();

        const districtOption = screen.getByText(mockDistrict);
        act(() => {
            fireEvent.click(districtOption);
        });

        expect(mockSetDataForm).toHaveBeenCalledWith(expect.any(Function));

        const setStateCallback = mockSetDataForm.mock.calls[0][0];
        const prevState = { district: "" };
        const newState = setStateCallback(prevState);

        expect(newState).toEqual({ district: mockDistrict });
    });

    it("renders dropdown as closed by default", () => {
        renderSelectComponent();

        const dropdown = screen.getByRole("list");
        expect(dropdown).toHaveClass("cart-page__dropdown--close");
    });

    it("renders dropdown as open when clicked", () => {
        renderSelectComponent();

        const label = screen.getByText("Select district");
        act(() => {
            fireEvent.click(label);
        });
        const dropdown = screen.getByRole("list");
        expect(dropdown).toHaveClass("cart-page__dropdown");
    });
});
