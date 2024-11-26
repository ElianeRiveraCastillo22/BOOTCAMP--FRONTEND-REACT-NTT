// el nombre del componente es bastante generico pero se usa 'unicamente en category section que es m'as espec'ifico 
import { ReactNode, useEffect, useRef } from "react";
import { moveCarousel, updateSelectedDot } from "./modules/carousel";
import "./CarouselControl.css";

interface Props {
    lastSectionShiftSize: number;
    carouselTrack: React.RefObject<HTMLDivElement>;
    pointNumber: number;
    position: number;
}

export const CarouselControl = ({ lastSectionShiftSize, carouselTrack, pointNumber, position }: Props): ReactNode => {
    const refPoint = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (position === 0 && refPoint.current) {
            refPoint.current.classList.add("selectedPoint");
        }
    }, [position]);

    const handleClick = () => {
        if (refPoint.current) {
            const listDots = document.querySelectorAll(".control__item")
            updateSelectedDot(listDots, refPoint.current, "selectedPoint");

            moveCarousel(
                carouselTrack.current,
                lastSectionShiftSize,
                Number(refPoint.current.dataset.position),
                pointNumber
            );
        }
    };

    return (
        <div
            className="control__item"
            data-position={position}
            onClick={handleClick}
            ref={refPoint}
        ></div>
    );
};