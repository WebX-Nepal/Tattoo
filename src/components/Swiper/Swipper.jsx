import React, { useRef, useState } from 'react';
// Import Swiper React components
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide, } from 'swiper/react';

import {
    Navigation,
    Scrollbar,
    FreeMode,
    EffectFade,
    EffectCube,
    Parallax,
    Zoom,
    EffectCoverflow,
} from "swiper/modules";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';
import Navbar from '../navbar/Navbar';

// import required modules
import { Mousewheel, Pagination, Keyboard, } from 'swiper/modules';
import Section1 from '../../pages/homeSection/section1/Section1';
import Section2 from '../../pages/homeSection/section2/Section2';
import Section3 from '../../pages/homeSection/section3/section3';
import Section4 from '../../pages/homeSection/section4/Section4';
import Footer from '../footer/Footer';
import bgimg from "../../assets/bg-2.png"
import Section5 from '../../pages/homeSection/section5/Section5';




export default function App() {
    return (
        <>
            <Swiper
                navigation={false}
                direction={'vertical'}
                slidesPerView={1}
                spaceBetween={50}
                mousewheel={true}
                keyboard={true}
                parallax={true}
                speed={1500}


                pagination={{
                    clickable: true,
                }}
                modules={[Mousewheel, Pagination, Parallax, Keyboard,]}
                className="mySwiper w-full relative"
            >
                <SwiperSlide className='first'>
                    <div className="first-slide ">
                        <Section1 />
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="second-slide">
                        <Section2 />
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="third-slide">
                        <Section3 />
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="fourth-slide">
                        <Section4 />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="fifth-slide">
                        <Section5 />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="fourth-slide">
                        <Footer />
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    );
}