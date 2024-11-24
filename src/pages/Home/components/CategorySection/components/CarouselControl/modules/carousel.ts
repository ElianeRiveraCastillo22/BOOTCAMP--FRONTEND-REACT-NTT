const categoryCardGap = 16

export interface CarouselConfig {
    sizeOfCategoryCards: number;
    numberOfCardsByCategory: number;
    visibleCarouselSize: number;
}

function calculateNumberOfCarouselPoints(config: CarouselConfig) {

    const {sizeOfCategoryCards, numberOfCardsByCategory, visibleCarouselSize} = config

    if(visibleCarouselSize){
        const cardsThatFitTheScreen = visibleCarouselSize / (sizeOfCategoryCards)
        const numberOfCarouselPoints = Math.ceil(numberOfCardsByCategory/cardsThatFitTheScreen)
        return numberOfCarouselPoints
    }else{
        throw new Error("No se pudo calcular el de puntos de carrusel")
    }

}

function calculateLastSectionShiftSize(config: CarouselConfig) {

    const {sizeOfCategoryCards, numberOfCardsByCategory, visibleCarouselSize} = config

    if(visibleCarouselSize){

        const  alignedIndex= 1
        const indexForAntepenultimatePoint = 1
        const antepenultimateSectionCardsWidth = (calculateNumberOfCarouselPoints(config)-alignedIndex-indexForAntepenultimatePoint)*visibleCarouselSize;
        const trackSize = numberOfCardsByCategory*sizeOfCategoryCards
        const trackused = (calculateNumberOfCarouselPoints(config)-alignedIndex)*(visibleCarouselSize)
        const lastSectionCardsWidth = trackSize - trackused
        return (antepenultimateSectionCardsWidth+ lastSectionCardsWidth)-categoryCardGap

    }else{
        throw new Error("No se pudo calcular el tamaño del desplazamiento de la última sección")
    }

}

function updateSelectedDot(
    dotsControl: NodeListOf<ChildNode> | undefined,
    currentDot: HTMLDivElement,
    style: string
): void {

    if (!dotsControl) return;

    const dotElements = Array.from(dotsControl).filter((node) => node instanceof HTMLDivElement) as HTMLDivElement[];

    const selectedPoint = dotElements.find((dot) => dot.classList.contains(style));

    if(!currentDot.classList.contains(style)){
        currentDot.classList.add(style)
        selectedPoint?.classList.remove(style)
    }

}

function moveCarousel(
    track: HTMLDivElement | null,
    lastSectionShiftSize: number,
    clickedPointIndex: number,
    totalPoints: number
): void {

    if (!track) return;

    const lastPointPosition = totalPoints - 1;

    if (clickedPointIndex === lastPointPosition) {
        track.style.transform = `translateX(-${lastSectionShiftSize}px)`;
    } else {
        track.style.transform = `translateX(-${clickedPointIndex * track.clientWidth}px)`;
    }

}

export {
    updateSelectedDot,
    moveCarousel,
    calculateLastSectionShiftSize,
    calculateNumberOfCarouselPoints
};


