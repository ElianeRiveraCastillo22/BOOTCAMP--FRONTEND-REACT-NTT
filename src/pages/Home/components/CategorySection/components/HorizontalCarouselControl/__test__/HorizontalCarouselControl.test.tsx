import { render, fireEvent, act } from "@testing-library/react";
import { HorizontalCarouselControl } from "../HorizontalCarouselControl";
import { moveCarousel, updateSelectedDot } from "../modules/carousel";

jest.mock("../modules/carousel", () => ({
    moveCarousel: jest.fn(),
    updateSelectedDot: jest.fn(),
}));

describe("HorizontalCarouselControl", () => {
    let carouselTrack: React.RefObject<HTMLDivElement>;
    const lastSectionShiftSize = 654;
    const pointNumber = 3;
    const currentSelectedpoint = 2;

    beforeEach(() => {
        carouselTrack = { current: document.createElement("div") };
        if (carouselTrack.current) {
            carouselTrack.current.classList.add("carousel-track");
        }
        Object.defineProperty(carouselTrack.current, "clientWidth", {
            value: 350,
        });
    });

    it("should add the class 'selectedPoint' to the selected point (position is 2)", () => {
        const { getByTestId } = render(
            <HorizontalCarouselControl
                lastSectionShiftSize={lastSectionShiftSize}
                carouselTrack={carouselTrack}
                pointNumber={pointNumber}
                position={currentSelectedpoint}
            />
        );

        const controlItem = getByTestId(
            `control-item-${currentSelectedpoint}`
        ) as HTMLDivElement;
        expect(controlItem.classList.contains("selectedPoint")).toBe(true);
    });

    it("should call updateSelectedDot and moveCarousel when clicked", () => {
        const { getByTestId } = render(
            <HorizontalCarouselControl
                lastSectionShiftSize={lastSectionShiftSize}
                carouselTrack={carouselTrack}
                pointNumber={pointNumber}
                position={currentSelectedpoint}
            />
        );

        const controlItem = getByTestId(`control-item-${currentSelectedpoint}`);
        act(() => {
            fireEvent.click(controlItem);
        });

        expect(updateSelectedDot).toHaveBeenCalledTimes(1);
        expect(moveCarousel).toHaveBeenCalledTimes(1);
    });
});
