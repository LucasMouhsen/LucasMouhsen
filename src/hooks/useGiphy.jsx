import { useContext } from "react";
import { GiphyContext } from "../context/GiphyProvider";

export default function useGiphy (){
    return useContext( GiphyContext )
}