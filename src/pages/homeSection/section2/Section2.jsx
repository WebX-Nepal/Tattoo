import React from 'react'
import "./section2.css"
import ourstory from "../../../assets/ourstory.png"


const Section2 = () => {
    return (
        <>
            <div className="sec2-container flex bg-sec2 relative my-14">

            </div>
            <div className="sec2-left absolute top-0 left-0 brightness-90 w-[35%] h-full object-contain my-14">
                <img src={ourstory} alt="" srcset="" />
            </div>
            <div className="sec2-content absolute w-[35%] top-[10em] right-44">
                <h1 className='text-[3.5em] my-4 tracking-wide font-serif'>About An <span className='text-red-700'>Tattoo</span></h1>
                <p className='tracking-widest font-serif'>An Tattoo Inc. is based in Calgary, Alberta. We are art driven, and dedicated in delivering the best quality of work. We specialize in doing black and grey realism tattoos and traditional Japanese tattoos. Each artist can be reached in the contact section, and additional info and Instagram can be found through the artist portfolios.</p>
                <div className="buttons-sec2 flex gap-10 justify-center my-10">
                    <button className='px-[2em] py-[.6em]  bg-red-900  font-mono hover:scale-[1.03]'>Artists</button>
                    <button className='p-[2em] bg-red-900 px-[2em] py-[.6em] font-mono hover:scale-[1.03] '>Request A Booking</button>

                </div>
            </div>

        </>
    )
}

export default Section2


