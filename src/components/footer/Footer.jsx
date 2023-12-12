import React from 'react'
import "./footer.css"
import footerbg from "../../assets/footerbg.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faSquareFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
    return (
        <>
            <div className="footer-container ">
                <div className="absolute left-0 bottom-0 h-[100%] w-[100vw] footerbg">
                    <img src={footerbg} alt="imgerror" srcset="" style={{ filter: 'brightness(30%)' }} />
                </div>
                <div className="footer  h-[80vh] w-[100vw] absolute left-0 bottom-0 bg-transparent text-white">
                    <footer className="bg-transparent  h-full text-white py-12">
                        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center items-start px-24">
                            {/* About Us Section */}
                            <div className="mb-8 text-start">
                                <h2 className="text-lg font-semibold mb-4 tracking-widest">About Us</h2>
                                <p className="text-sm tracking-widest">
                                    InkCraft Studio is a premier tattoo studio dedicated to providing exceptional body art experiences. Our team of skilled artists combines creativity with precision to turn your ideas into unique and meaningful tattoos.
                                </p>
                            </div>

                            {/* Quick Links Section */}
                            <div className="mb-8 text-start">
                                <h2 className="text-lg font-semibold mb-4 tracking-widest">Quick Links</h2>
                                <ul className="list-none p-0 tracking-widest">
                                    <li className="mb-2"><a href="#" className="hover:text-red-900">Home</a></li>
                                    <li className="mb-2"><a href="#" className="hover:text-red-900">Portfolio</a></li>
                                    <li className="mb-2"><a href="#" className="hover:text-red-900">Services</a></li>
                                    <li className="mb-2"><a href="#" className="hover:text-red-900">Contact</a></li>
                                </ul>
                            </div>

                            {/* Contact Section */}
                            <div className="mb-8 text-start">
                                <h2 className="text-lg font-semibold mb-4 tracking-widest">Contact Us</h2>
                                <p className="text-sm tracking-widest">
                                    123 Tattoo Avenue<br />
                                    Ink City, Studio 54321<br />
                                    Email: info@inkcraftstudio.com<br />
                                    Phone: (555) 987-6543
                                </p>
                            </div>

                            {/* Social Media Section */}
                            <div>
                                <h2 className="text-lg font-semibold mb-4 text-start tracking-widest">Follow Us</h2>
                                <div className="flex space-x-4 tracking-widest">
                                    <a href="#" className="text-white hover:text-red-900">
                                        <FontAwesomeIcon icon={faSquareFacebook} />
                                    </a>
                                    <a href="#" className="text-white hover:text-red-900">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                    <a href="#" className="text-white hover:text-red-900">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Appointment Section */}
                        <div className="mt-12 text-center">
                            <h2 className="text-2xl font-semibold mb-4 tracking-widest">Book Your Appointment Today</h2>
                            <p className="text-sm mb-4 tracking-widest">
                                Ready to get your next tattoo? Schedule a consultation with one of our artists and let us bring your ideas to life.
                            </p>
                            <button className="bg-red-900 text-white py-2 px-6 hover:scale-[1.03] hover:bg-gray-100 hover:text-black transition duration-300 font-sans">
                                Book Now
                            </button>
                        </div>

                        {/* Copyright Section */}
                        <div className="mt-12  pt-4 text-center">
                            <p className="text-sm tracking-widest">&copy; 2023 InkCraft Studio. All rights reserved.</p>
                        </div>
                    </footer>
                </div>

            </div>
        </>
    )
}

export default Footer
