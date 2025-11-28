import { Container } from "./Container"
import { NavBar } from "./NavBar"

export const Header = () => {
    return <header className="pt-8 pb-8 bg-gradient-to-r from-blue-400 to-purple-500">
        <Container className="flex">
            <NavBar/>
            <button className="ml-auto text-white">Войти</button>
        </Container>
    </header>
}