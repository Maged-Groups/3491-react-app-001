import { Link } from 'react-router'

import Button from "../molecules/Button"
import Logo from "../atoms/Logo"
import Dropdown from "../molecules/Dropdown"

export default function Navbar() {
    return (
        <nav className="flex justify-between p-3">
            <div>
                <Logo />
            </div>

            <div className="flex gap-3">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/products">Products</Link>
                <Link to="/contacts">Contacts</Link>
            </div>

            <div className="flex gap-3">
                <Button text='Sign up' iconName='ABC' />
                <Button text='Sign in' iconName='LuLogIn' />
            </div>
        </nav>
    )
}