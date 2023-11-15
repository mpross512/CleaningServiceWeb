import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="relative flex justify-around items-center">
            <div className="flex">
                <Link to={''}>
                    <a className="flex gap-x-8 items-center" href="/">
                        <img width="150" src="https://buzybeecleaners.co/wp-content/uploads/2023/03/buzzy-removebg-preview.png"></img>
                        Beyond Clean
                    </a>
                </Link>
            </div>
            <div className="flex space-x-4 content-center">
                <Link to={'about'}>About Us</Link>
                <Link to={'services'}>Our Services</Link>
                <Link to={'contact'}>Contact</Link>
            </div>
            <div className="flex">
                <Link to={'quote'}>Get a Quote</Link>
            </div>
        </nav>
    )
}

export default Navbar