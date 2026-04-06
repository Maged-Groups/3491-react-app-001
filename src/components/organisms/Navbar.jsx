import Button from "../molecules/Button"
import Logo from "../atoms/Logo"
import Dropdown from "../molecules/Dropdown"

export default function Navbar() {
    return (
        <nav>
            <div>
                <Logo />
            </div>

            <div>
                menu
                {/* <Dropdown />
                <Dropdown />
                <Dropdown />
                <Dropdown /> */}
            </div>

            <div>
                <Button text='Sign up'/>
            </div>
        </nav>
    )
}