import { useState } from "react";
import { Link, useLocation } from "react-router-dom"



function Navbar() {
    const [menuVisible, setMenuVisible] = useState(false);

    const location = useLocation();
    const pathName = location.pathname;

    return (
        <nav className="relative block justify-between sm:justify-around items-center bg-gray-900 text-gray-300 p-4">
            
            {/* Mobile hamburger menu button */}
            <div className="inset-y-0 left-0 flex justify-between sm:hidden">
                <button type="button" className="inline-flex rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" 
                        aria-controls="mobile-menu" aria-expanded={menuVisible}
                        onClick={() => {setMenuVisible(!menuVisible)}}>
                    <span className="sr-only">Open main menu</span>
                    <svg className={`${menuVisible ? 'hidden' : 'block'} h-6 w-6`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <svg className={`${menuVisible ? 'block' : 'hidden'} h-6 w-6`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="flex">
                    <Link to={'quote'} className={`rounded-lg bg-sky-500 hover:bg-sky-400 text-white px-3 py-2 ${pathName == '/quote' ? 'text-white bg-sky-500' : ''}`}>Get a Quote</Link>
                </div>
            </div>


            <div className="hidden sm:flex justify-around">
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
                    <Link to={'quote'} className={`rounded-lg bg-sky-500 hover:bg-sky-400 text-white px-3 py-2 ${pathName == '/quote' ? 'text-white bg-sky-500' : ''}`}>Get a Quote</Link>
                </div>
            </div>



            {/* Mobile menu, show/hide based on menu state.*/}
            <div className={`${!menuVisible && 'hidden'} sm:hidden`} id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2" onClick={() => setMenuVisible(false)}>
                    <Link to={''}>
                        <p className={`flex gap-x-8 items-center rounded-lg hover:bg-gray-800 hover:text-white px-3 py-2 ${pathName == '/' ? 'text-white bg-gray-950' : ''}`}>
                            {/* <img class="p-0" width="150" src="https://buzybeecleaners.co/wp-content/uploads/2023/03/buzzy-removebg-preview.png"></img> */}
                            Beyond Clean
                        </p>
                    </Link>
                    <Link to={'about'} className={`block rounded-lg hover:bg-gray-800 hover:text-white px-3 py-2 ${pathName == '/about' ? 'text-white bg-gray-950' : ''}`}>About Us</Link>
                    <Link to={'services'} className={`block rounded-lg hover:bg-gray-800 hover:text-white px-3 py-2 ${pathName == '/services' ? 'text-white bg-gray-950' : ''}`}>Our Services</Link>
                    <Link to={'contact'} className={`block rounded-lg hover:bg-gray-800 hover:text-white px-3 py-2 ${pathName == '/contact' ? 'text-white bg-gray-950' : ''}`}>Contact</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar