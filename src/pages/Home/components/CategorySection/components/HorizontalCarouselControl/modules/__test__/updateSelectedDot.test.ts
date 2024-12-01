import { updateSelectedDot } from "../carousel";

const arrayToNodeList = (arr: HTMLDivElement[]): NodeListOf<ChildNode> => {
    const divContainer = document.createElement("div");
    arr.forEach((element) => divContainer.appendChild(element));
    return divContainer.childNodes as NodeListOf<ChildNode>;
};

describe("updateSelectedDot function", () => {
    let dotsControl: NodeListOf<ChildNode> | undefined;
    let currentDot: HTMLDivElement;
    let selectedDot: HTMLDivElement;

    beforeEach(() => {
        currentDot = document.createElement("div");
        selectedDot = document.createElement("div");
        selectedDot.classList.add("selectedPoint");
        dotsControl = arrayToNodeList([selectedDot, currentDot]);
    });

    it("should add selectedPoint class to currentDot and remove it from the selectedPoint", () => {
        updateSelectedDot(dotsControl, currentDot, "selectedPoint");
        expect(currentDot.classList.contains("selectedPoint")).toBe(true);
        expect(selectedDot.classList.contains("selectedPoint")).toBe(false);
    });

    it("should do nothing if dotsControl is undefined", () => {
        dotsControl = undefined;
        const initialClassList = currentDot.classList.toString();
        updateSelectedDot(dotsControl, currentDot, "selectedPoint");
        expect(currentDot.classList.toString()).toBe(initialClassList);
    });
});
