import { Container } from "./Container"
import { NavBar } from "./NavBar"

export const Header = () => {
    return <header className="pt-16 pb-16">
        <Container>
            <NavBar/>
        </Container>
    </header>
}