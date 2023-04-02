import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../Assets/tomatos.png";
import img2 from "../Assets/capcicum.png";
import img3 from "../Assets/strawberies.png";
import img4 from "../Assets/tomato 2.png";
import "./Slider.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper";
import { MdDoubleArrow } from "react-icons/md";



const Slider = () => {

    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={0}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,

            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className='hoverIncrease'>
                    <img src={img1} alt="" />
                    <div className='content'>
                        <h1>Products One</h1>
                        <h2>100.25$</h2>
                        <div className='price-underline'></div>
                        <div className=' select-btn'>
                            <p>SELECT OPTION</p>
                            <MdDoubleArrow className='ml-1' />
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='hoverIncrease'>
                    <img src={img2} alt="" />
                    <div className='content'>
                        <h1>Products One</h1>
                        <h2>100.25$</h2>
                        <div className='price-underline'></div>
                        <div className=' select-btn'>
                            <p>SELECT OPTION</p>
                            <MdDoubleArrow className='ml-1' />
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='hoverIncrease'>
                    <img src={img3} alt="" />
                    <div className='content'>
                        <h1>Products One</h1>
                        <h2>100.25$</h2>
                        <div className='price-underline'></div>
                        <div className=' select-btn'>
                            <p>SELECT OPTION</p>
                            <MdDoubleArrow className='ml-1' />
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='hoverIncrease'>
                    <img src={img4} alt="" />
                    <div className='content'>
                        <h1>Products One</h1>
                        <h2>100.25$</h2>
                        <div className='price-underline'></div>
                        <div className=' select-btn'>
                            <p>SELECT OPTION</p>
                            <MdDoubleArrow className='ml-1' />
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='hoverIncrease'>
                    <img src={img1} alt="" />
                    <div className='content'>
                        <h1>Products One</h1>
                        <h2>100.25$</h2>
                        <div className='price-underline'></div>
                        <div className=' select-btn'>
                            <p>SELECT OPTION</p>
                            <MdDoubleArrow className='ml-1' />
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='hoverIncrease'>
                    <img src={img2} alt="" />
                    <div className='content'>
                        <h1>Products One</h1>
                        <h2>100.25$</h2>
                        <div className='price-underline'></div>
                        <div className=' select-btn'>
                            <p>SELECT OPTION</p>
                            <MdDoubleArrow className='ml-1' />
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='hoverIncrease'>
                    <img src={img3} alt="" />
                    <div className='content'>
                        <h1>Products One</h1>
                        <h2>100.25$</h2>
                        <div className='price-underline'></div>
                        <div className=' select-btn'>
                            <p>SELECT OPTION</p>
                            <MdDoubleArrow className='ml-1' />
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='hoverIncrease'>
                    <img src={img4} alt="" />
                    <div className='content'>
                        <h1>Products One</h1>
                        <h2>100.25$</h2>
                        <div className='price-underline'></div>
                        <div className=' select-btn'>
                            <p>SELECT OPTION</p>
                            <MdDoubleArrow className='ml-1' />
                        </div>
                    </div>
                </div>
            </SwiperSlide>

        </Swiper>
    );
}

export default Slider;