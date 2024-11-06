"use client";

import { createContext, useState, useEffect } from "react";


export const ThemeContext = createContext();

const getFromLocalStorage = () => {

    if (typeof window !== "undefined") {
        const value = localStorage.getItem("theme");
        return value || "light";
    }
    return "light";
    
};

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => getFromLocalStorage());

    const toggle = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("theme", theme);
        }
    }, [theme]); // Correct syntax: comma before the dependency array

    return (
        <ThemeContext.Provider value={{ theme, toggle }}>
            {children}
        </ThemeContext.Provider>
    );
};