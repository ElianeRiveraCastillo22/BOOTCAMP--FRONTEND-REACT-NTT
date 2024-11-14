const carruselTrack = document.querySelector(".carousel-track")
const categoryCardGap = 16
const carouselSize = carruselTrack.clientWidth

function calculateNumberOfCarouselPoints(sizeOfCategoryCards, numberOfCardsByCategory) {

    const cardsThatFitTheScreen = carruselTrack.clientWidth / (sizeOfCategoryCards)
    const numberOfCarouselPoints = Math.ceil(numberOfCardsByCategory/cardsThatFitTheScreen)
    return numberOfCarouselPoints

}
function calculateLastSectionShiftSize(sizeOfCategoryCards, numberOfCardsByCategory) {

    const antepenultimateSectionCardsWidth = (calculateNumberOfCarouselPoints(sizeOfCategoryCards, numberOfCardsByCategory)-2)*carouselSize;
    const trackSize = numberOfCardsByCategory*sizeOfCategoryCards
    const trackused = (calculateNumberOfCarouselPoints(sizeOfCategoryCards, numberOfCardsByCategory)-1)*(carouselSize)
    const lastSectionCardsWidth = trackSize - trackused
    return (antepenultimateSectionCardsWidth+ lastSectionCardsWidth)-categoryCardGap

}

export {
    calculateNumberOfCarouselPoints,
    calculateLastSectionShiftSize
}


