import { Outlet } from "react-router"
import { Header } from "../companents/Header"

export const Layout = (children) =>{
    return <>
        <Header/>
        {children||<Outlet/>}
    </>
}