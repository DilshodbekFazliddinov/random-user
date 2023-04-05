import { useContext } from "react";
import { CreateContext } from "./useCreateContext";

function useTheme() {
  const context = useContext(CreateContext);
  if (!context) {
    throw new Error("Must be context apni ichida bo'lishi kerak");
  }
  return context;
}

export { useTheme };
