import { useContext } from "react";
import { DarkContext } from "../context/DarkProvider";

export function useDark() {
  return useContext(DarkContext);
}