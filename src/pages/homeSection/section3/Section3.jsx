import React from 'react'
import artist1 from "../../../assets/artist1.png"
import artist2 from "../../../assets/artist2.png"
import artist3 from "../../../assets/artist3.png"
import artist4 from "../../../assets/artist4.png"



const Section3 = () => {
    return (
        <>
            <div className="sec3-container flex w-[100%] justify-center relative top-10 m-auto brightness-75 bg-black my-11 h-[100vh]">
                <div className="card-sec3 card-sec3-1 w-[25%]">
                    <img src={artist1} alt="" srcset="" className='artists ' />
                </div>
                <div className="card-sec3 card-sec3-2 w-[25%]">
                    <img src={artist2} alt="" srcset="" className='artists h-full ' />
                </div>
                <div className="card-sec3 card-sec3-3 w-[25%]">
                    <img src={artist3} alt="" srcset="" className='artists h-full ' />
                </div>
                <div className="card-sec3 card-sec3-4 w-[25%]">
                    <img src={artist4} alt="" srcset="" className='artists h-full ' />
                </div>

            </div>
            <div className="artists-content absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h1 className='text-[4em] tracking-wider font-serif my-5'>MEET THE ARTISTS</h1>
                <button className='button border-[2px] border-solid border-white px-[3em] py-[.5em] tracking-widest bg-black hover:scale-[1.03]'>Discover</button>
            </div>
        </>
    )
}

export default Section3
