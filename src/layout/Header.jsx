import Logo from '../components/atoms/Logo';
import { appTitle, appVersion } from '../lib/consts'

export default function Header() {
    return (
        <header>
            <Logo />
            <h1>{appTitle} {appVersion}</h1>
        </header>
    );
}