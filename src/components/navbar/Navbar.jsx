import { Link, useLocation } from "react-router-dom"


function Navbar() {
    const location = useLocation();
    const pathName = location.pathname;

    return (
        <nav className="relative flex justify-around items-center bg-gray-900 text-gray-300 p-4">
            <div className="flex">
                <Link to={''}>
                    <p className={`flex gap-x-8 items-center rounded-lg hover:bg-gray-800 hover:text-white px-3 py-2 ${pathName == '/' ? 'text-white bg-gray-950' : ''}`}>
                        {/* <img class="p-0" width="150" src="https://buzybeecleaners.co/wp-content/uploads/2023/03/buzzy-removebg-preview.png"></img> */}
                        Beyond Clean
                    </p>
                </Link>
            </div>
            <div className="flex space-x-4 content-center">
                <Link to={'about'} className={`rounded-lg hover:bg-gray-800 hover:text-white px-3 py-2 ${pathName == '/about' ? 'text-white bg-gray-950' : ''}`}>About Us</Link>
                <Link to={'services'} className={`rounded-lg hover:bg-gray-800 hover:text-white px-3 py-2 ${pathName == '/services' ? 'text-white bg-gray-950' : ''}`}>Our Services</Link>
                <Link to={'contact'} className={`rounded-lg hover:bg-gray-800 hover:text-white px-3 py-2 ${pathName == '/contact' ? 'text-white bg-gray-950' : ''}`}>Contact</Link>
            </div>
            <div className="flex">
                <Link to={'quote'} className={`rounded-lg hover:bg-gray-800 hover:text-white px-3 py-2 ${pathName == '/quote' ? 'text-white bg-gray-950' : ''}`}>Get a Quote</Link>
            </div>
        </nav>
    )
}

export default Navbar