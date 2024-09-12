import { useEffect } from "react";
import { useState } from "react";

export default function useLocalStorage(key, defalutValue) {

    const [value, setValue] = useState(() => {
        let currentValue;

        try {
            currentValue = JSON.parse(localStorage.getItem(key) || String(defalutValue))
        } catch (error) {
            console.log(error)
            currentValue = defalutValue
        }
        return currentValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));

    }, [key, value])

    return [value, setValue];
}