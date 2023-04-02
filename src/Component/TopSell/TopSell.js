import React from 'react';
import "./TopSell.css";
import SliderTwo from '../SliderTwo/SliderTwo';

const TopSell = () => {
    return (
        <div className='mx-[320px] mt-[60px]'>

            <div data-aos="fade-down" data-aos-duration="2000" data-aos-easing="ease-in-out" className='section-title'>
                <div className='section-line'></div>
                <h1>Top Sell Products</h1>
                <div className='section-line'></div>
            </div>

            <div data-aos="fade-left" data-aos-duration="1500" className='mt-[60px]'>
                <SliderTwo />
            </div>

            <hr className='mt-[67px]' />

        </div>
    );
};

export default TopSell;