import React from 'react';
import "./Brands.css";
import img1 from "../Assets/brand1.png";
import img2 from "../Assets/brand2.png";
import img3 from "../Assets/brand3.png";
import img4 from "../Assets/brnad4.png";
import img5 from "../Assets/brand5.png";
import img6 from "../Assets/brnad6.png";

const Brands = () => {
    return (
        <div className='mx-[320px] mt-[60px]'>

            <div data-aos="fade-up" data-aos-duration="1500" className='flex justify-center items-center gap-[92px]'>
                <img src={img1}  className="brandImg" alt="" />
                <img src={img2}  className="brandImg" alt="" />
                <img src={img3}  className="brandImg" alt="" />
                <img src={img4}  className="brandImg" alt="" />
                <img src={img5}  className="brandImg" alt="" />
                <img src={img6}  className="brandImg" alt="" />
            </div>

        </div>
    );
};

export default Brands;