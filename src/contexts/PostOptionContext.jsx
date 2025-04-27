/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const PostOptionContext = createContext()

export const PostOptionProvider = ({ children }) => {
    const [fontSize, setFontSize] = useState('1rem')
    const [fontWeight, setFontWeight] = useState('normal')
    return (
        <PostOptionContext.Provider value={{ fontSize, setFontSize, fontWeight, setFontWeight }}>
            {children}
        </PostOptionContext.Provider>
    )
}