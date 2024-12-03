import { createContext, ReactNode, useState } from "react";

const ModalContext = createContext<{
    isOpenModal: boolean;
    setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}>({
    isOpenModal: false,
    setIsOpenModal: () => null,
});

const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

    return (
        <ModalContext.Provider value={{ isOpenModal, setIsOpenModal }}>
            {children}
        </ModalContext.Provider>
    );
};

export { ModalContext, ModalProvider };
