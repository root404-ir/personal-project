import { BrowserRouter } from "react-router"
import { DarkModeProvider } from "./contexts/DarkModeContext"
import './styles/main.css'
import MainRoutes from "./routes/MainRoutes"
import PreLoader from "./components/PreLoader"
import { useEffect, useState } from "react"
import { MenuProvider } from "./contexts/MenuOpenContext"
const App = () => {
  const [pageLoad, setPageLoad] = useState(false)

  useEffect(() => {
    const handlePageLoad = () => setPageLoad(true)
    if (document.readyState === 'complete') {
      setTimeout(() => {
        setPageLoad(true)
      }, 2000)
    } else {
      window.addEventListener('load', handlePageLoad)
      return () => window.removeEventListener('load', handlePageLoad)
    }
  }, [])
  return (
    <>
      <BrowserRouter>
        <DarkModeProvider>
          <MenuProvider>
            {pageLoad ? <MainRoutes /> : <PreLoader />}
          </MenuProvider>
        </DarkModeProvider>
      </BrowserRouter>
    </>
  )
}

export default App