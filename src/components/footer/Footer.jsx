import { icon } from "@fortawesome/fontawesome-svg-core/import.macro"
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Footer() {
    return (
        <footer className="flex justify-evenly bg-slate-900 text-white">
            <div className="flex flex-col">
                <h4 className="pb-4">Contact</h4>
                <div className="inline-flex items-center">
                    <FontAwesomeIcon icon={icon({name: 'phone'})} className="pr-2"></FontAwesomeIcon>
                    <a href="tel:15125737687" className="hover:underline">+1 (512) 573-7687</a>
                </div>
                <div className="inline-flex items-center">
                    <FontAwesomeIcon icon={icon({name: 'envelope'})} className="pr-2"></FontAwesomeIcon>
                    <a href="mailto:mike@beyondclean.llc" className="hover:underline">mike@beyondclean.llc</a>
                </div>
            </div>
            <div>
                <h4 className="pb-4">Social Media</h4>
                <FontAwesomeIcon icon={brands('facebook-square')} className="pr-4 text-2xl"></FontAwesomeIcon>
                <FontAwesomeIcon icon={brands('instagram')} className="text-2xl"></FontAwesomeIcon>
            </div>
        </footer>
    )
}

export default Footer