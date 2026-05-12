import { Outlet } from "react-router"
import Footer from "./Footer"
import Header from "./Header"

const MainLayout = () => {
  return (
    <div className="min-h-screen">
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default MainLayout