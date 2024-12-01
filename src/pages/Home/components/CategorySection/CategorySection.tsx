import { useRef, useState } from "react";
import { CategoryCard } from "./components/CategoryCard/CategoryCard";
import { useCarousel } from "./components/HorizontalCarouselControl/hook/useCarousel";
import "./CategorySection.css";
import { HorizontalCarouselControl } from "./components/HorizontalCarouselControl/HorizontalCarouselControl";
import { CategorySkeleton } from "./components/CategorySkeleton/CategorySkeleton";

type Data<T> = T | null;

interface Props {
    dataCategory: Data<string[]>;
    loadingCategoryList: boolean;
}

export function CategorySection({ dataCategory, loadingCategoryList }: Props) {
    const [cardCategory, setCardCategory] = useState<HTMLElement | null>(null);

    const carouselTrack = useRef<HTMLDivElement>(null);
    const firstCategoryRef = useRef<HTMLDivElement>(null);

    const { pointNumber, lastSectionShiftSize } = useCarousel(
        cardCategory,
        carouselTrack
    );

    return (
        <section className="categories">
            <div className="categories__list">
                <div className="carousel-track" ref={carouselTrack}>
                    {dataCategory?.map((category, categoryIndex) => {
                        return loadingCategoryList ? (
                            <CategorySkeleton key={categoryIndex} />
                        ) : (
                            <CategoryCard
                                key={categoryIndex}
                                category={category}
                                setCardCategory={setCardCategory}
                                firstCategoryRef={
                                    categoryIndex === 0
                                        ? firstCategoryRef
                                        : undefined
                                }
                            />
                        );
                    })}
                </div>
                <div className="categorie__control">
                    {Array.from({ length: pointNumber }).map((_, index) => (
                        <HorizontalCarouselControl
                            key={index}
                            position={index}
                            lastSectionShiftSize={lastSectionShiftSize}
                            carouselTrack={carouselTrack}
                            pointNumber={pointNumber}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
