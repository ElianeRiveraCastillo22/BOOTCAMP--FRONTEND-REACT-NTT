import { useContext } from "react";
import { ModalContext } from "./ModalContext";

export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("Modal is out of provider")
  }

  return context;
}