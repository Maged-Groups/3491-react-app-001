import Button from "../components/molecules/Button"

function Footer() {
    return (
        <footer>
            <div>
                <h5>USERFUL LINKS</h5>
                <ul>
                    <li>Lorem.</li>
                    <li>Repellat?</li>
                    <li>Fuga!</li>
                </ul>
            </div>

            <div>
                <h3>All rights reserved 2026 | Powered by <a href="https://mwjb.net">MWJB</a></h3>
                 <Button text='Get a Demo' />
            </div>

            <div>
                <h5>Contact us:</h5>
                <a href="">Facebook</a>
                <a href="">X</a>
                <a href="">Youtube</a>
                <a href="">Instagram</a>
            </div>
        </footer>
    )
}

export default Footer