import { Link } from "react-router-dom"

export const NavBar = () => {
    return <nav>
        <ul className="flex gap-6 mb-1 text-white">
            <li>
                <Link to={'/'}>Главная</Link>
            </li>
        </ul>
    </nav>
}