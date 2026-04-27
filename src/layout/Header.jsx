import { appTitle, appVersion } from '../lib/consts'

export default function Header() {
    return (
        <header className='p-8 h-10 flex items-center justify-center flex-col'>
            <h1>{appTitle} {appVersion}</h1>
        </header>
    );
}