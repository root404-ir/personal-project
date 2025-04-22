import { BrowserRouter } from "react-router"
import { DarkModeProvider } from "./contexts/DarkModeContext"
import './styles/main.css'
import MainRoutes from "./routes/MainRoutes"
const App = () => {
  return (
    <>
      <BrowserRouter>
        <DarkModeProvider>
          <MainRoutes />
        </DarkModeProvider>
      </BrowserRouter>
    </>
  )
}

export default App