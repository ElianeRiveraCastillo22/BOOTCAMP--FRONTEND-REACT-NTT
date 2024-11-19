const carruselTrack = document.querySelector(".carousel-track")
const categoryCardGap = 16
const carouselSize = carruselTrack?.clientWidth

function calculateNumberOfCarouselPoints(sizeOfCategoryCards: number, numberOfCardsByCategory: number) {

    if(carouselSize){
        const cardsThatFitTheScreen = carouselSize / (sizeOfCategoryCards)
        const numberOfCarouselPoints = Math.ceil(numberOfCardsByCategory/cardsThatFitTheScreen)
        return numberOfCarouselPoints
    }else{
        throw new Error("No se pudo calcular el de puntos de carrusel")
    }

}

function calculateLastSectionShiftSize(sizeOfCategoryCards:number, numberOfCardsByCategory: number) {

    if(carouselSize){
        const antepenultimateSectionCardsWidth = (calculateNumberOfCarouselPoints(sizeOfCategoryCards, numberOfCardsByCategory)-2)*carouselSize;
        const trackSize = numberOfCardsByCategory*sizeOfCategoryCards
        const trackused = (calculateNumberOfCarouselPoints(sizeOfCategoryCards, numberOfCardsByCategory)-1)*(carouselSize)
        const lastSectionCardsWidth = trackSize - trackused
        return (antepenultimateSectionCardsWidth+ lastSectionCardsWidth)-categoryCardGap
    }else{
        throw new Error("No se pudo calcular el tamaño del desplazamiento de la última sección")
    }

}

export {
    calculateNumberOfCarouselPoints,
    calculateLastSectionShiftSize
}


