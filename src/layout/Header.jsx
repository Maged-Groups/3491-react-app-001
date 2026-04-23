import Logo from '../components/atoms/Logo';
import { appTitle, appVersion } from '../lib/consts'

export default function Header() {
    return (
        <header className='p-8 h-screen flex items-center justify-center flex-col bg-main'>
            <Logo />
            <h1>{appTitle} {appVersion}</h1>
        </header>
    );
}