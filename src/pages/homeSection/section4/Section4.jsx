import React from 'react'
import "./styles.css"
import contactimg from "../../../assets/contact.png"


const Section4 = () => {
    return (
        <>
            <div className="sec4-container my-28">
                <div className="sec4-gallery h-[80vh] w-[70vw] bg-red-700">

                    <div className="gallery-container grid grid-cols-4 grid-row-3 gap-6">
                        <div className="item h-[20vh] w-[20vh] bg-red-50  item-1"></div>
                        <div className="item  w-[20vh] bg-red-50 item-2"></div>
                        <div className="item h-[20vh] w-[20vh] bg-red-50  item-3"></div>
                        <div className="item h-[20vh] w-[20vh] bg-red-50  item-4"></div>
                        <div className="item h-[20vh] w-[20vh] bg-red-50  item-5"></div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Section4
