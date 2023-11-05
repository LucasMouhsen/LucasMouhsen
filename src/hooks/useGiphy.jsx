import { useContext } from "react";
import { GiphyContext } from "../context/GiphyProvider";

export function useGiphy (){
    return useContext( GiphyContext )
}