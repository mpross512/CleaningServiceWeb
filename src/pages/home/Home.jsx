import { icon } from "@fortawesome/fontawesome-svg-core/import.macro"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"



function Home() {
    return (
        <div>
            <h1>Beyond Clean</h1>
            <h2>Commercial Cleaning Services in the Greater Austin Area</h2>
            <div className="flex justify-between pt-6">
                <div className="box">
                    <h2>Why Beyond Clean?</h2>
                    <ul className="pl-6">
                        <li className="py-2">Affordable</li>
                        <li className="py-2">Quick</li>
                        <li className="py-2">Quality</li>
                    </ul>
                </div>
                <div className=" bg-sky-100 rounded-xl shadow-md p-2 inline-block h-fit">
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


        </div>
    )
}

export default Home