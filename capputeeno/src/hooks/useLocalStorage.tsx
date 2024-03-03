import { useEffect, useState } from "react";

export function useLocalStorage<T>(item: string, initialValue: T){
    const [value, setValue] = useState<T>(initialValue)

    useEffect(() => {
        const storedValue = localStorage.getItem(item);
        if (storedValue) setValue(JSON.parse(storedValue));
    }, [item]); // A dependência agora é o 'item' em vez de 'window'

    const updateLocalStorage = (newValue: T) => {
        setValue(newValue);
        localStorage.setItem(item, JSON.stringify(newValue));
    }

    return {
        value,
        updateLocalStorage
    }
}
