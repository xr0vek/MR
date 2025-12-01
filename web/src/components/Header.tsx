import { Link } from "react-router-dom"
import { Container } from "./Container"
import { NavBar } from "./NavBar"

export const Header = () => {
    return <header className="pt-8 pb-8 bg-gradient-to-r from-blue-400 to-purple-500 pr-16 pl-16">
        <Container className="flex content-around">
            <NavBar/>
            <Link className="ml-auto text-white" to='/login'>Войти</Link>
        </Container>
    </header>
}