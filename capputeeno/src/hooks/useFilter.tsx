import { FilterContext } from "@/context/filter.context";
import { useContext } from "react";

export function useFilter(){
    const context = useContext(FilterContext)
    return context
}