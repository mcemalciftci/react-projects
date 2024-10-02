import { Outlet } from "react-router"
import { Header } from "../companents/Header"

export const Layout = ({children}) =>{
    return <div className="pr-2 relative">
        <div className="sticky top-0 z-10">
            <Header/>
        </div>
        <div className="-z-50">
            {children||<Outlet/>}
        </div>
    </div>
}