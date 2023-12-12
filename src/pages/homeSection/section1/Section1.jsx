import React from 'react'
import "./index.css"


const Section1 = () => {
    return (
        <>
            <div className="sec1-container my-14">
                {/* <div className="bg-sec1"></div> */}
                <div className="sec1-head flex justify-center absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
                    <h1 className='text-[5em] font-serif tracking-widest'>AN TATTOO<span className='text-[.3em]'> INC.</span></h1>
                </div>
                <div className="sec1-buttom text-center leading-[3em] my-[8em] absolute top-[60%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
                    <h1 className='text-[2.5em] font-serif tracking-widest'>A LIFE LONG LUXURY</h1>
                    <h1 className='text-[4em] font-serif tracking-wide'>GET IT RIGHT.</h1>
                </div>

            </div>

        </>
    )
}

export default Section1

// import { Parallax } from 'react-parallax';
// import tattooBg from "../../../assets/sec-1Bg.jpeg";

// const Section1 = () => (
//     <Parallax className='relative h-[100vh] brightness-90 z\' bgImage={tattooBg} bgImageAlt="the cat" speed={0.2} strength={700}>
//         <div className="sec-1-content flex absolute h-[100vh] w-[100%] justify-center top-[10em]">
//             <span className='img-txt text-[6em]'>AN TATTOO <span className='text-[.5em]'>INK</span></span>
//         </div>
//     </Parallax>
// );

// export default Section1;
