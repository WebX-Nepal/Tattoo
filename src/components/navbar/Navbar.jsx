import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "./styles.css";

const navbar = () => {
    return (
        <>
            <div className="nav-container px-20 flex  text-[1.1em] justify-center gap-32 font-mono tracking-wider fixed z-10 w-full bg-black ">
                <div className="nav-left mt-7">

                    <ul className="flex gap-12 text-white">
                        <li className="hover:text-[#ab4747]">
                            <Link to="/" >Home</Link>
                        </li>
                        <li className="hover:text-[#ab4747]">
                            <Link to="about">About us</Link>
                        </li>
                        <li className="hover:text-[#ab4747]">
                            <Link>Artists</Link>
                        </li>
                        <li className="hover:text-[#ab4747]">
                            <Link>Gallery</Link>
                        </li>
                    </ul>
                </div>
                <div className="nav-logo ">
                    <img
                        src={logo}
                        alt=""
                        srcset=""
                        style={{
                            height: "15vh",
                        }}
                    />
                </div>
                <div className="nav-right">
                    <ul className="flex gap-12 mt-7">
                        <li className="hover:text-[#ab4747]">
                            <Link>Training</Link>
                        </li>
                        <li className="hover:text-[#ab4747]">
                            <Link>Testimonials</Link>
                        </li>
                        <li className="hover:text-[#ab4747]">
                            <Link>Location</Link>
                        </li>
                        <li className="hover:text-[#ab4747]">
                            <Link><button type="button">Contact us</button></Link>
                        </li>
                    </ul>
                </div>
            </div >
        </>
    );
};

export default navbar;
