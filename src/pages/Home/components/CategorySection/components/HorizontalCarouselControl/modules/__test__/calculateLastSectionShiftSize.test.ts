import { calculateLastSectionShiftSize } from "../carousel";
import { calculateNumberOfCarouselPoints } from "../carousel";

describe("calculateLastSectionShiftSize", () => {

    const config = {
        sizeOfCategoryCards: 102,
        numberOfCardsByCategory: 10,
        visibleCarouselSize: 350,
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should correctly calculate the last section shift size", () => {

        jest.spyOn({ calculateNumberOfCarouselPoints }, "calculateNumberOfCarouselPoints").mockReturnValue(3); 

        const result = calculateLastSectionShiftSize(config);

        expect(result).toBe(654);
    });

    it("should throw an error if visibleCarouselSize is 0", () => {
        const configWithZeroSize = { ...config, visibleCarouselSize: 0 };

        expect(() => calculateLastSectionShiftSize(configWithZeroSize)).toThrow(
            "The displacement size of the last section could not be calculated."
        );
    });

    it("should calculate the last section shift size correctly with different config", () => {
        const configWithDifferentValues = {
            sizeOfCategoryCards: 150,
            numberOfCardsByCategory: 12,
            visibleCarouselSize: 400,
        };

        jest.spyOn({ calculateNumberOfCarouselPoints }, "calculateNumberOfCarouselPoints").mockReturnValue(4);
        const result = calculateLastSectionShiftSize(configWithDifferentValues);
        expect(result).toBe(1384);
    });
});
