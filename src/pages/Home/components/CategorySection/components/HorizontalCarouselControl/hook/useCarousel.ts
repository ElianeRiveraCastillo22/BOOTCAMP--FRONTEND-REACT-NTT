import { useState, useEffect } from "react";
import { calculateLastSectionShiftSize, calculateNumberOfCarouselPoints } from "../modules/carousel";

export function useCarousel(cardCategory: HTMLElement | null, carouselTrack: React.RefObject<HTMLDivElement>) {
    const [pointNumber, setPointNumber] = useState(0);
    const [lastSectionShiftSize, setLastSectionShiftSize] = useState(0);

    useEffect(() => {
        if (cardCategory && carouselTrack.current) {
            const categoryCardGap = 16
            const sizeOfCategoryCards = cardCategory.clientWidth + categoryCardGap;
            const numberOfCardsByCategory = carouselTrack.current?.childNodes.length ;
            const visibleCarouselSize = carouselTrack.current?.clientWidth;
            const config = {
                sizeOfCategoryCards,
                numberOfCardsByCategory,
                visibleCarouselSize
            };

            const points = calculateNumberOfCarouselPoints(config);
            const shiftSize = calculateLastSectionShiftSize(config);

            setPointNumber(points);
            setLastSectionShiftSize(shiftSize);
        }
    }, [cardCategory, carouselTrack]);

    return { pointNumber, lastSectionShiftSize };
}
