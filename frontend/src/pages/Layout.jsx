import Footer from "../components/Footer";
import { Outlet } from "react-router"
import Navbar from "../components/Navbar";
export default function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}