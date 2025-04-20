/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext()

export const DarkModeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('dark') === 'true'
    })

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark')
        } else {
            document.body.classList.remove('dark')
        }
        localStorage.setItem('dark', darkMode)
    }, [darkMode])

    const handleDarkMode = () => {
        setDarkMode(!darkMode)
    }
    return (
        <DarkModeContext.Provider value={{ darkMode, handleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    )
}
