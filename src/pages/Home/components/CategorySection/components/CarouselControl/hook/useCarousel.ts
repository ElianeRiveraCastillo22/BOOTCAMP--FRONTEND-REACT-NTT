import { useEffect, useState } from 'react';
import { calculateLastSectionShiftSize, calculateNumberOfCarouselPoints } from '../modules/carousel';


export const useCarousel = (cardCategory: HTMLElement | null, carouselTrack: React.RefObject<HTMLDivElement>) => {

    const [pointNumber, setPointNumber] = useState<number>(0);
    const [lastSectionShiftSize, setLastSectionShiftSize] =useState<number>(0)
    useEffect(() => {
        if (cardCategory) {

            const categoryCardGap = 16
            const sizeOfCategoryCards = cardCategory.clientWidth + categoryCardGap;
            const numberOfCardsByCategory = carouselTrack.current?.childNodes.length ?? 0;
            const visibleCarouselSize = carouselTrack.current?.clientWidth ?? 0;
            const carouselConfig = {
                sizeOfCategoryCards,
                numberOfCardsByCategory,
                visibleCarouselSize
            };
            const calculatedPoints = calculateNumberOfCarouselPoints(carouselConfig);
            const lastSectionShiftSize = calculateLastSectionShiftSize(carouselConfig)
            setPointNumber(calculatedPoints);
            setLastSectionShiftSize(lastSectionShiftSize)

        }
    }, [cardCategory]);

    return {
        pointNumber,
        lastSectionShiftSize
    };
};