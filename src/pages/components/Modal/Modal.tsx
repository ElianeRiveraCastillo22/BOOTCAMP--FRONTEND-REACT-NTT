import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";
import { useModalContext } from "@/context/Modal/UseModalContext";

interface Props {
    children: React.ReactNode;
}
const eventListener = "keydown";

export const Modal = ({ children }: Props) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const { isOpenModal, setIsOpenModal } = useModalContext();

    const closeModal = () => {
        setIsOpenModal(false);
    };

    const modalRoot = document.getElementById("modal");

    const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setIsOpenModal(false);
            }
        };
        if (isOpenModal) {
            document.addEventListener(eventListener, handleEsc);
        }
        return () => {
            document.removeEventListener(eventListener, handleEsc);
        };
    }, [setIsOpenModal, isOpenModal]);

    if (!isOpenModal || !modalRoot) {
        return null;
    }

    return createPortal(
        <div className="overlay" onClick={closeModal}>
            <div className="modal" onClick={handleContentClick} ref={modalRef}>
                <button className="modal__close-button" onClick={closeModal}>
                    x
                </button>
                {children}
            </div>
        </div>,
        modalRoot
    );
};
