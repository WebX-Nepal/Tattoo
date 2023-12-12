import React from 'react'
import "./styles.css"
import contactimg from "../../../assets/contact.png"


const Section5 = () => {
    return (
        <>
            <div className="sec5-container bg-sec5 flex items-center justify-center my-12">
                <div className="sec5-box h-[80vh] w-[70vw] bg-slate-50 border-8 border-solid border-[#2c2c2c] rounded-2xl text-black flex" >
                    <div className="sec5-left w-[70%]">
                        <h1 className='text-[3.4em] font-bold tracking-widest mt-20 mb-14 text-red-900'>CONTACT</h1>
                        <div className="sec5-contact flex gap-9 px-[2em] ">
                            <h4 className='w-[40%] font-semibold text-start text-[#444444] font-serif '> For any enquiries, or just to say hello, get in touch and contact us.</h4>
                            <div className="sec5-contactInfo w-[50%] flex gap-9 text-[.9em]">
                                <div className="contactInfo-left ">
                                    <h1 className='text-[.9em] text-[#666] mb-1 text-start'>New Projects</h1>
                                    <p className='text-start font-bold text-[.8em]'>Katarine Goldstein</p>
                                    <p className='text-start font-bold text-[.8em]'>tattoostudio@gmail.com</p>
                                    <h1 className='text-[.9em] text-[#666] mt-10 mb-1 text-start'>Address</h1>
                                    <p className='text-start font-bold text-[.8em]'>Samakhusi,Kathmandu</p>
                                </div>
                                <div className="contactInfo-right">
                                    <h1 className='text-[.9em] text-[#666] mb-1 text-start'>General inquiries</h1>
                                    <p className='text-start font-bold text-[.8em]'>info@ink.com</p>
                                    <p className='text-start font-bold text-[.8em]'>+45 28 87 93 06</p>
                                    <h1 className='text-[.9em] text-[#666] mt-10 mb-1 text-start'>Careers & Internships</h1>
                                    <p className='text-start font-bold text-[.8em]'>inkjobs@ink.com</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="sec5-right w-[30%]">
                        <img src={contactimg} alt="" srcset="" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Section5
