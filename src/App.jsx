import { DarkModeProvider } from "./contexts/DarkModeContext"
import Home from "./pages/Home"
import './styles/main.css'
const App = () => {
  return (
    <>
      <DarkModeProvider>
        <Home />
      </DarkModeProvider>
    </>
  )
}

export default App