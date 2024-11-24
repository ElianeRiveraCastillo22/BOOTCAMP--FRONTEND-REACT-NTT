import { useRef, useState } from "react";
import { CarouselControl } from "./components/CarouselControl/CarouselControl"
import { CategoryCard } from "./components/CategoryCard/CategoryCard"
import { useCarousel } from "./components/CarouselControl/hook/useCarousel";
import "./CategorySection.css"

type Data<T> = T | null;

interface Props{
    dataCategory: Data<string[]>
}

export function CategorySection({dataCategory}:Props) {

    const [cardCategory, setCardCategory] = useState<HTMLElement | null>(null);

    const carouselTrack = useRef<HTMLDivElement>(null);
    const firstCategoryRef = useRef<HTMLDivElement>(null);

    const {pointNumber, lastSectionShiftSize} = useCarousel(cardCategory, carouselTrack)

    return (
        <section className="categories">
            <div className="categories__list">
                <div className="carousel-track" ref={carouselTrack}>
                    {
                        dataCategory?.map((category, categoryIndex)=>{
                            return (
                                <CategoryCard
                                    key={categoryIndex}
                                    category={category}
                                    setCardCategory={setCardCategory}
                                    firstCategoryRef={categoryIndex === 0 ? firstCategoryRef : undefined}/>
                                )
                        })
                    }
                </div>
                <div className="categorie__control" >
                    {
                        Array.from({ length: pointNumber }).map((_, index) => (
                            <CarouselControl
                                key={index}
                                position = {index}
                                lastSectionShiftSize={lastSectionShiftSize}
                                carouselTrack= {carouselTrack}
                                pointNumber={pointNumber}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
