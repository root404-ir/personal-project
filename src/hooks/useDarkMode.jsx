import { useContext } from "react"
import { DarkModeContext } from "../contexts/DarkModeContext"

export const useDark = () => {
    return useContext(DarkModeContext)
}