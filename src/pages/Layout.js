import { Outlet } from "react-router"
import { Header } from "../companents/Header"

export const Layout = ({children}) =>{
    return <div className="relative">
        <div className="sticky top-0  z-40">
            <Header/>
        </div>
        <div className="pr-2  ">
            {children||<Outlet/>}
        </div>
    </div>
}