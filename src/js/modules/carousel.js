const carousel = document.querySelector(".carousel-track")
const carruselTrack = document.querySelector(".carousel-track")
const categoriesItem = document.querySelector(".categories__item")
const categoriesItems = document.querySelectorAll(".categories__item")

const categoryCardGap = 16
const carouselSize = carousel.clientWidth
const sizeOfCategoryCards = categoriesItem.clientWidth+categoryCardGap
const numberOfCardsByCategory = categoriesItems.length

function calculateNumberOfCarouselPoints() {
    const cardsThatFitTheScreen = carruselTrack.clientWidth / (categoriesItem.clientWidth+categoryCardGap)
    const numberOfCarouselPoints = Math.ceil(numberOfCardsByCategory/cardsThatFitTheScreen)
    return numberOfCarouselPoints
}
function calculateLastSectionShiftSize() {
    const antepenultimateSectionCardsWidth = (calculateNumberOfCarouselPoints()-2)*carouselSize;
    const trackSize = numberOfCardsByCategory*sizeOfCategoryCards
    const trackused = (calculateNumberOfCarouselPoints()-1)*(carouselSize)
    const lastSectionCardsWidth = trackSize - trackused
    return (antepenultimateSectionCardsWidth+ lastSectionCardsWidth)-categoryCardGap
}

export {
    calculateNumberOfCarouselPoints,
    calculateLastSectionShiftSize
}


