import { Link } from 'react-router'

import Button from "../molecules/Button"
import Logo from "../atoms/Logo"
import Dropdown from "../molecules/Dropdown"
import { FaCartShopping } from 'react-icons/fa6'

export default function Navbar({count}) {
    return (
        <nav className="flex justify-between p-4 sticky top-0 bg-white shadow">
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
                <div className='flex items-start gap-1 relative'>
                    <FaCartShopping size='30' className='text-sky-600' />
                    <span className='text-sm bg-sky-700 text-white w-6 h-6 rounded-full flex items-center justify-center absolute -top-5/12 left-5/12'>0</span>
                </div>
                <Button text='Sign up' iconName='ABC' />
                <Button text='Sign in' iconName='LuLogIn' />
            </div>
        </nav>
    )
}