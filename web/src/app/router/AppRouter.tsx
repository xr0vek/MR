import { Route, Routes } from "react-router-dom"
import { MainPage } from "../../pages/MainPage"
import { Layout } from "../../pages/Layuout"
import { RegistrationPage } from "../../pages/RegistrationPage"

export const AppRouter = () => {
    return (
        <Routes>
        <Route path={"/"} element={<Layout/>}>
            <Route path="/" element={<MainPage/>} index/>        
            <Route path="/registration" element={<RegistrationPage/>}/>
        </Route>
    </Routes>
    )
}