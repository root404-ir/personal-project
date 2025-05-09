import { BrowserRouter } from "react-router"
import './styles/main.css'
import MainRoutes from "./routes/MainRoutes"
import { PreLoader } from "./components/PreLoader"
import { useEffect, useState } from "react"
import { MenuProvider } from "./contexts/MenuOpenContext"
import { PostOptionProvider } from "./contexts/PostOptionContext"
const App = () => {
  const [pageLoad, setPageLoad] = useState(false)

  useEffect(() => {
    const handlePageLoad = () => setPageLoad(true)
    if (document.readyState === 'complete') {
      setPageLoad(true)
    } else {
      window.addEventListener('load', handlePageLoad)
      return () => window.removeEventListener('load', handlePageLoad)
    }
  }, [])
  return (
    <>
      <BrowserRouter>
          <MenuProvider>
            <PostOptionProvider>
              {pageLoad ? <MainRoutes /> : <PreLoader />}
            </PostOptionProvider>
          </MenuProvider>
      </BrowserRouter>
    </>
  )
}

export default App