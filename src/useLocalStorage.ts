import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string,
    initialVavlue: T | (() => T)) {
    const [value, setValue] = useState<T>(() => {
        const jsonValue = localStorage.getItem(key);
        if (jsonValue === null) {
            return typeof initialVavlue === 'function' ? (initialVavlue as () => T)() : initialVavlue;
        } else {
            return JSON.parse(jsonValue) as T;
        }
    });
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue] as [T, typeof setValue];
}