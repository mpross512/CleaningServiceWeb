import { useState } from 'react';
import './Quote.css'

function Quote() {
    const [bedrooms, setBedrooms] = useState(1);
    const [squareFeet, setSquareFeet] = useState(1200);

    return (
        <>
            <h1>Get a Quote</h1>
            <form className="block m-auto w-fit sm:w-auto border shadow-sm p-4 rounded-xl mt-4">
                <label className="flex">
                    Name
                    <input placeholder="Name"></input>
                </label>
                <label className="flex">
                    Phone Number
                    <input type="phone" placeholder='Phone Number'></input>
                </label>

                <label className="flex">
                    Company
                    <input placeholder='Company Name'></input>
                </label>

                <label>
                    Physical Address
                    <input placeholder='Address Line 1' className='mb-3'></input>
                </label>
                <label>
                    <input placeholder='Address Line 2'></input>
                </label>

                <div className='flex'>
                    <label className='pr-2'>
                        City
                        <input type='text' placeholder='City' className='w-36'></input>
                    </label>
                    <label className='pr-2'>
                        State
                        <input type='text' placeholder='State' className='w-28'></input>
                    </label>
                    <label className='pr-2'>
                        ZIP Code
                        <input type='number' placeholder='ZIP Code' className=' w-28'></input>
                    </label>
                </div>

                {/* <label>
                    Bedrooms
                    <div className='inline-block'>
                        <span className='border rounded-md p-2 mr-2 cursor-pointer noselect' onClick={() => {setBedrooms(bedrooms - 1)}}>-</span>
                        <input type='number' min={1} max={5} step={1} value={bedrooms} id='bedrooms'></input>
                        <span className='border rounded-md p-2 ml-2 cursor-pointer noselect' onClick={() => setBedrooms(bedrooms+1)}>+</span>
                    </div>
                </label>

                <label>
                    Bathrooms
                    <input type='number' min={1} max={5} step={0.5} className=''></input>
                </label> */}

                <div>
                    <label htmlFor='sqFeet'>
                        Square Footage
                    </label>
                    <div className='inline-block'>
                        <span className='border rounded-md p-2 mr-2 cursor-pointer noselect' onClick={() => {setSquareFeet(squareFeet - 100)}}>-</span>
                        <input id='sqFeet' type='number' min={1000} max={3500} step={100} defaultValue={squareFeet}></input>
                        <span className='border rounded-md p-2 ml-2 cursor-pointer noselect' onClick={() => setSquareFeet(squareFeet+100)}>+</span>
                    </div>
                </div>

                <button type="submit" className=' bg-sky-500 text-white p-2 my-2 rounded-md hover:bg-sky-400'>Submit</button>
            </form>
        </>
    )
}

export default Quote;