import { Outlet } from "react-router";
import NavBar from "../components/NavBar.jsx";



export const Layout = () => {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
        
    )
}