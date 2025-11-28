import { Outlet } from "react-router-dom"
import { Header } from "../components/Header"

export const Layout = () => {
    console.log('layout')

    return (
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}