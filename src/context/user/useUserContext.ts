import { useContext } from "react";
import { userContext } from "./UserProvider";

export const useUserContext = () => {
  const context = useContext(userContext);

  if (!context) {
    throw new Error("userContext is out of provider")
  }

  return context;
}