function Navbar() {
    return (
        <nav className="relative flex justify-around items-center">
            <div className="flex">
                <a className="flex gap-x-8 items-center">
                    <img width="150" src="https://buzybeecleaners.co/wp-content/uploads/2023/03/buzzy-removebg-preview.png"></img>
                    Beyond Clean
                </a>
            </div>
            <div className="flex space-x-4 content-center">
                <a>About Us</a>
                <a>Our Services</a>
                <a>Contact</a>
            </div>
            <div className="flex">
                <a>Get a Quote</a>
            </div>
        </nav>
    )
}

export default Navbar