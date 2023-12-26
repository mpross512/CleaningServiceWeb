import { icon } from "@fortawesome/fontawesome-svg-core/import.macro"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"



function Home() {
    return (
        <div>
            <h1>Beyond Clean Cleaning Services</h1>

            <div className=" bg-sky-100 rounded-xl shadow-md p-2">
                <h3>Get in touch</h3>
                <div className="flex items-center">
                    <FontAwesomeIcon icon={icon({name: 'phone'})} className="mx-1"></FontAwesomeIcon>
                    <a href="tel:5125737687">(512) 573-7687</a>
                </div>
                <div className="flex items-center">
                    <FontAwesomeIcon icon={icon({name: 'envelope'})} className="mx-1"></FontAwesomeIcon>
                    <a href="mailto:mike@beyondclean.llc">mike@beyondclean.llc</a>
                </div>
            </div>


        </div>
    )
}

export default Home