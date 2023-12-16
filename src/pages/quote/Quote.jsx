function Quote() {
    return (
        <>
            <h1>Get a Quote</h1>
            <form>
                <label>
                    Name
                    <input placeholder="Name"></input>
                </label>
                <label>
                    Phone Number
                    <input type="phone"></input>
                </label>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Quote;