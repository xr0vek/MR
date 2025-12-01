import { Outlet } from "react-router-dom"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

export const Layout = () => {
    return (
        <>
            <Header/>
            <main className="bg-red-50 text-zinc-600">
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}