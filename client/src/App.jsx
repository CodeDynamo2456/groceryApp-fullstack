import Navbar from "./componets/Navbar"
import Home from "./pages/Home"
import { Route, Routes, useLocation } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import Footer from "./componets/Footer"
const App = () => {
  const isSellerPath = useLocation().pathname.includes("seller")
  return (
    <div>
        
        { isSellerPath ? null : <Navbar></Navbar>}
       <Toaster></Toaster>
        <div className={`${isSellerPath ? "" : "  px-6 md:px-16 lg:px-24 xl:px-32"}`}>
          <Routes>
            <Route path="/" element={<Home></Home>} />
          </Routes>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default App