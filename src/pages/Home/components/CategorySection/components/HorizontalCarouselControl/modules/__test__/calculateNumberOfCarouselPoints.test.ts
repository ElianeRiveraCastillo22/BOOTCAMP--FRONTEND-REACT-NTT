import { calculateNumberOfCarouselPoints } from "../carousel"; 

describe("calculateNumberOfCarouselPoints", () => {
    const config = {
        sizeOfCategoryCards: 102,
        numberOfCardsByCategory: 10,
        visibleCarouselSize: 350,
    };

    it("should correctly calculate the number of carousel points based on the config", () => {
        const result = calculateNumberOfCarouselPoints(config);
        expect(result).toBe(3);
    });

    it("should throw an error if visibleCarouselSize is 0", () => {
        const configWithZeroSize = { ...config, visibleCarouselSize: 0 };
        expect(() => calculateNumberOfCarouselPoints(configWithZeroSize)).toThrow(
            "The number of carousel points could not be calculated."
        );
    });

    it("should correctly handle different sizes", () => {
        const configWithDifferentSizes = { sizeOfCategoryCards: 200, numberOfCardsByCategory: 20, visibleCarouselSize: 600 };
        const result = calculateNumberOfCarouselPoints(configWithDifferentSizes);
        expect(result).toBe(7);
    });
});
