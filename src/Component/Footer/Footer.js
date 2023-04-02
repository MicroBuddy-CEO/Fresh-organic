import React from 'react';
import "./Footer.css";
import logo from "../Assets/brand1.png";
import payment from "../Assets/payment.png";
import vector1 from "../Assets/Vector1.png";
import vector2 from "../Assets/Vector2.png";
import vector3 from "../Assets/Vector3.png";
import vector4 from "../Assets/Vector4.png";
import vector5 from "../Assets/Vector5.png";
import vector6 from "../Assets/Vector6.png";
import vector7 from "../Assets/Vector7.png";
import vector8 from "../Assets/Vector8.png";
import vector9 from "../Assets/Vector9.png";
import vector10 from "../Assets/Vector10.png";
import vector11 from "../Assets/Vector11.png";
import { FaFacebookF, FaTiktok } from 'react-icons/fa';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { MdArrowForwardIos } from 'react-icons/md';
import { Fade } from 'react-reveal';


const Footer = () => {
    return (
        <div className='mt-[29px] bg-[#9FB846] h-[507px] relative overflow-hidden'>

            <img src={vector1} className="absolute left-[25%] top-[18%]" alt="" />
            <img src={vector2} className="absolute left-[62%] top-[10%]" alt="" />
            <img src={vector3} className="absolute right-[-50px] top-[20%]" alt="" />
            <img src={vector4} className="absolute left-[-10px] top-[30%]" alt="" />
            <img src={vector5} className="absolute left-[30%] top-[44%]" alt="" />
            <img src={vector6} className="absolute left-[42%] top-[30%]" alt="" />
            <img src={vector7} className="absolute left-[55%] top-[42%]" alt="" />
            <img src={vector8} className="absolute left-[66.5%] top-[33%]" alt="" />
            <img src={vector9} className="absolute left-[29%] top-[65%]" alt="" />
            <img src={vector10} className="absolute left-[46%] top-[73%]" alt="" />
            <img src={vector11} className="absolute left-[65%] top-[70%]" alt="" />
            <img src={vector6} className="absolute right-[2%] top-[70%]" alt="" />
            <img src={vector3} className="absolute left-[20px] bottom-[20px]" alt="" />



            <div className='mx-[320px] flex justify-between items-center gap-[335px] pt-[23px]'>

                <div className='flex justify-between  justify-items-center items-center  w-[60%]'>
                    <div>
                        <img src={logo} className="w-[146px] h-[93px]" alt="" />
                    </div>
                    <div>
                        <h3 className='text-[18px] font-[500]'>Call Us <br /> <span className='font-[600]'>+099 000 000</span> </h3>
                    </div>
                    <div>
                        <h3 className='text-[18px] font-[500]'>Follow Us</h3>
                        <div className='flex gap-[10px]'>
                            <div className='bottom-social-icon'>
                                <FaFacebookF className='text-white' />
                            </div>
                            <div className='bottom-social-icon'>
                                <BsInstagram className='text-white' />
                            </div>
                            <div className='bottom-social-icon'>
                                <BsTwitter className='text-white' />
                            </div>
                            <div className='bottom-social-icon'>
                                <FaTiktok className='text-white' />
                            </div>

                        </div>
                    </div>
                </div>

                <div className=''>
                    <img src={payment} alt="" />
                </div>
            </div>

            <div className='mt-[24px] mx-[320px] hr-line  ' />


            <div className='mx-[320px] mt-[25px] flex justify-between'>

                <Fade left delay={1000}>
                    <div className='footer-info w-[250px] h-[250px]  z-[5]'>
                        <h2 className="text-[22px] font-[600] mb-[30px]">Location</h2>
                        <p>Shop Address and <br /> Location</p>
                        <p>support@microbuddy.com</p>
                    </div>
                </Fade>

                <Fade left delay={1500}>
                    <div className='footer-info w-[250px] h-[250px]  z-[4]'>
                        <h2 className="text-[22px] font-[600] mb-[30px]">Information</h2>
                        <p>About Us</p>
                        <p>Blog</p>
                        <p>Checkout</p>
                        <p>Contact Us</p>
                        <p>Service</p>
                    </div>
                </Fade>

                <Fade left delay={2000}>
                    <div className='footer-info w-[250px] h-[250px]  z-[3]'>
                        <h2 className="text-[22px] font-[600] mb-[30px]">My Account</h2>
                        <p>My Account</p>
                        <p>Contact</p>
                        <p>Shopping cart</p>
                        <p>Shop</p>
                    </div>
                </Fade>

                <Fade left delay={2500}>
                    <div className='footer-info w-[250px] h-[250px]  z-[2]'>
                        <h2 className="text-[22px] font-[600] mb-[30px]">Categories</h2>
                        <p>Fruit</p>
                        <p>Dairy</p>
                        <p>Vegitable</p>
                        <p>Health</p>
                    </div>
                </Fade>

                <Fade left delay={3500}>
                    <div className='footer-info w-[250px] h-[250px]  z-[1]'>
                        <h2 className="text-[22px] font-[600] mb-[30px]">Subscribe Us</h2>
                        <p>Signup and get a voucher</p>

                        <div className='footer-search-bar'>
                            <input type="text" placeholder='Email Address' />
                            <MdArrowForwardIos className='text-[#01E834] text-[36px] mr-[5px]' />
                        </div>
                    </div>
                </Fade>
            </div>

            <div className='mt-[68px] mx-[320px] hr-line  ' />

            <p className='copyright mx-[320px] text-right '>Copyright@microbuddy.com. All Rights Reserved</p>



        </div>
    );
};

export default Footer;