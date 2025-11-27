import { Link } from "react-router-dom"

export const NavBar = () => {
    return <nav>
        <ul className="flex gap-2">
            <li>
                <Link to={'/'}>Главная</Link>
            </li>
            <li>
                <Link to={'/registration'}>Регистрация</Link>
            </li>
        </ul>
    </nav>
}