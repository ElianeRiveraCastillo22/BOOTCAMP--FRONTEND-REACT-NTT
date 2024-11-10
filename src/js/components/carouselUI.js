import {
    calculateNumberOfCarouselPoints,
    calculateLastSectionShiftSize
} from "../modules/carousel.js"

const carousel = document.querySelector(".carousel-track")
const carruselTrack = document.querySelector(".carousel-track")
const control = document.querySelector(".categorie__control")

const carouselSize = carousel.clientWidth

function createCarouselPoints() {
    for (let index = 0; index < calculateNumberOfCarouselPoints() ; index++) {
        const small = document.createElement("small")
        small.classList.add("control__item")
        control.append(small)
    }
    const firtDot = document.querySelectorAll(".categorie__control small")[0]
    firtDot.classList.add("selectedPoint")
}

function addStylesToTheDot(dotsControl, dot) {
    if(!dot.classList.contains("selectedPoint")){
        const selectedPoint= Object.values(dotsControl).filter((dots)=>{return dots.classList.contains("selectedPoint")})[0]
        dot.classList.add("selectedPoint")
        selectedPoint.classList.remove("selectedPoint")
    }
}

function moveCarousel(dotsControl, dotIndex) {
    if(dotsControl.length-1 == dotIndex) carruselTrack.style.transform = `translateX(-${calculateLastSectionShiftSize()}px)`
    else carruselTrack.style.transform = `translateX(-${dotIndex *carouselSize}px)`
}

function initializeCarousel() {
    createCarouselPoints()

    const dotsControl = document.querySelectorAll(".categorie__control small")

    function addControlToPoints(dot, dotIndex) {
        dot.addEventListener("click",()=>{addStylesToTheDot(dotsControl, dot)} )
        dot.addEventListener("click",()=>{moveCarousel(dotsControl, dotIndex)} )
    }

    dotsControl.forEach(addControlToPoints)
}

export{
    initializeCarousel
}

