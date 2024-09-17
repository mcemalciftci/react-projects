import { Outlet } from "react-router"
import { Header } from "../companents/Header"

export const Layout = ({children}) =>{
    return <div className="pr-2">
        <Header/>
        {children||<Outlet/>}
    </div>
}