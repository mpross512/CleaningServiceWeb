function Footer() {
    return (
        <footer className="flex justify-evenly bg-slate-900 text-white">
            <div className="flex flex-col">
                <h4 className="pb-4">Contact</h4>
                <a href="tel:15125737687" className="hover:underline">+1 (512) 573-7687</a>
                <a href="mailto:mike@beyondclean.llc" className="hover:underline">mike@beyondclean.llc</a>
            </div>
            <div>
                <h4 className="pb-4">Social Media</h4>
            </div>
        </footer>
    )
}

export default Footer