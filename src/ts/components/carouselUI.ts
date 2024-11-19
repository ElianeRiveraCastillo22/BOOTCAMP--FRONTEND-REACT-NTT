import {
    calculateNumberOfCarouselPoints,
    calculateLastSectionShiftSize
} from "../modules/carousel.js"

const carruselTrack = document.querySelector<HTMLDivElement>(".carousel-track")
const control = document.querySelector(".categorie__control")

const carouselSize = carruselTrack?.clientWidth

function createCarouselPoints(sizeOfCategoryCards: number, numberOfCardsByCategory:number) {

    if(calculateNumberOfCarouselPoints(sizeOfCategoryCards, numberOfCardsByCategory) !== 1){

        for (let index = 0; index < calculateNumberOfCarouselPoints(sizeOfCategoryCards, numberOfCardsByCategory) ; index++) {
            const div = document.createElement("div")
            div.classList.add("control__item")
            control?.append(div)
        }
        const firtDot = document.querySelectorAll(".control__item")[0]
        firtDot.classList.add("selectedPoint")
    }

}

function addStylesToTheDot(dotsControl: NodeListOf<HTMLDivElement>, dot: HTMLDivElement) {

    if(!dot.classList.contains("selectedPoint")){
        const selectedPoint= Object.values(dotsControl).filter((dots)=>{return dots.classList.contains("selectedPoint")})[0]
        dot.classList.add("selectedPoint")
        selectedPoint.classList.remove("selectedPoint")
    }

}

function moveCarousel(dotsControl: NodeListOf<HTMLDivElement>, dotIndex: number, sizeOfCategoryCards:number, numberOfCardsByCategory:number) {

    if(carruselTrack && carouselSize){
        if(dotsControl.length-1 == dotIndex) carruselTrack.style.transform = `translateX(-${calculateLastSectionShiftSize(sizeOfCategoryCards, numberOfCardsByCategory)}px)`
            else carruselTrack.style.transform = `translateX(-${dotIndex *carouselSize}px)`
    }else{
        throw new Error(`No se pudo encontrar ${carruselTrack} y ${carouselSize}`)
    }

}

function initializeCarousel(numberOfCardsByCategory:number,sizeOfCategoryCards: number): void {

    createCarouselPoints(sizeOfCategoryCards, numberOfCardsByCategory)
    const dotsControl: NodeListOf<HTMLDivElement> = document.querySelectorAll(".control__item")

    function addControlToPoints(dot: HTMLDivElement, dotIndex: number) {
        dot.addEventListener("click",()=>{addStylesToTheDot(dotsControl, dot)} )
        dot.addEventListener("click",()=>{moveCarousel(dotsControl, dotIndex, sizeOfCategoryCards, numberOfCardsByCategory)} )
    }

    dotsControl.forEach(addControlToPoints)

}

export{
    initializeCarousel
}

