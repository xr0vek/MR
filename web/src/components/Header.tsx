import { Link } from "react-router-dom"
import { Container } from "./Container"
import { NavBar } from "./NavBar"
import { useAppSelector } from "../app/redux/hooks"
import { selectUser } from "../entities/userSlice"

export const Header = () => {
    const {user} = useAppSelector(selectUser)
    console.log(user)
    return <header className="pt-8 pb-8 bg-gradient-to-r from-blue-400 to-purple-500 pr-16 pl-16">
        <Container className="flex content-around">
            <NavBar/>
            {user ? <Link className="ml-auto text-white" to={'/account'}>{user.name}</Link> : <Link className="ml-auto text-white" to='/login'>Войти</Link>}
        </Container>
    </header>
}