import React from 'react';
import "./FeatureProducts.css";
import Slider from '../Slider/Slider';


const FeatureProducts = () => {
    return (
        <div className='mx-[300px] mt-[45px]'>

            <div data-aos="fade-down" data-aos-duration="2000" data-aos-easing="ease-in-out" className='section-title'>
                <div className='section-line'></div>
                <h1>Feature Products</h1>
                <div className='section-line'></div>
            </div>

            <div data-aos="fade-right" data-aos-duration="1500" className='mt-[60px]'>
                <Slider />
            </div>

        </div>
    );
};

export default FeatureProducts;