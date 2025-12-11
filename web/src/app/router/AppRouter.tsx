import { Route, Routes } from "react-router-dom"
import { MainPage } from "../../pages/MainPage"
import { Layout } from "../../pages/Layuout"
import { RegistrationPage } from "../../pages/RegistrationPage"
import { LoginPage } from "../../pages/LoginPage"
import { AccountPage } from "../../pages/AccountPage"

export const AppRouter = () => {
    return (
        <Routes>
        <Route path={"/"} element={<Layout/>}>
            <Route path="/" element={<MainPage/>} index/>        
            <Route path="/register" element={<RegistrationPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/account" element={<AccountPage/>}/>
        </Route>
    </Routes>
    )
}