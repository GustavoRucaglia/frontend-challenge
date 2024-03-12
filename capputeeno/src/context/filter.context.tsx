"use client"

import { FilterType } from "@/types/filter-type";
import { Priority } from "@/types/priority";
import { useState } from "react";
import { createContext } from "react";

export const FilterContext = createContext(
    {
        search: '',
        pages: 0,
        type: FilterType.ALL,
        priority: Priority.NEWS,
        setPriority: (value: Priority) => {},
        setSearch: (value: string) => {},
        setPages: (value: number) => {},
        setType: (value: FilterType) => {}

    }
)

interface ProviderProps{
    children: React.ReactNode
}

export function FilterContextProvider({children}: ProviderProps){
    const [search, setSearch] = useState('');
    const [pages, setPages] = useState(0);
    const [type, setType] = useState(FilterType.ALL);
    const [priority, setPriority] = useState(Priority.POPULARITY);

    return(
        <FilterContext.Provider value={{
         search,
         setSearch,
        pages,
        setPages,
         type,
        setType,
        priority,
        setPriority}}>
            {children}
        </FilterContext.Provider>
    )
}