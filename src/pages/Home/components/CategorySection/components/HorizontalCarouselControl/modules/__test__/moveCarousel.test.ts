import { moveCarousel } from "../carousel";

let track: HTMLDivElement | null;
const lastSectionShiftSize = 654;
const clickedPointIndex = 2;
const totalPoints = 3;

track = document.createElement("div");
track.classList.add("carousel-track");

Object.defineProperty(track, "clientWidth", {
    value: 350,
    writable: true,
});

describe("moveCarousel function", () => {

    beforeEach(() => {
        // el before each es para inciiar algo antes de cada test, si lo que se inicia siempre es lo mismo puede ir fuera
    });

    it("should set transform style for the last point", () => {

        moveCarousel(track, lastSectionShiftSize, clickedPointIndex, totalPoints);
        expect(track!.style.transform).toBe(`translateX(-${lastSectionShiftSize}px)`);
    });

    it("should set transform style based on clickedPointIndex for non-last point", () => {

        const clickedPointIndex = 1;
        moveCarousel(track, lastSectionShiftSize, clickedPointIndex, totalPoints);
        const expectedTransform = `translateX(-${clickedPointIndex * track!.clientWidth}px)`;
        expect(track!.style.transform).toBe(expectedTransform);

    });

    it("should do nothing if track is null", () => {

        track = null;
        moveCarousel(track, lastSectionShiftSize, clickedPointIndex, totalPoints);
        expect(track).toBeNull();

    });
});
