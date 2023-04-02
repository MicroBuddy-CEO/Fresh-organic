import React from 'react';
import "./Blog.css";
import img1 from "../Assets/blog1.png";
import img2 from "../Assets/blog2.png";
import icon1 from "../Assets/milk.png";
import icon2 from "../Assets/mutton.png";
import icon3 from "../Assets/carrot.png";
import icon4 from "../Assets/shalgom.png";
import icon5 from "../Assets/greenflower.png";
import icon6 from "../Assets/mushro.png";
import icon7 from "../Assets/fish.png";
import { Fade } from 'react-reveal';

const Blog = () => {

    return (
        <div className='mx-[320px] mt-[80px] relative'>

            <img src={icon1} className="absolute left-[47%] top-[-70px]" alt="" />
            <img src={icon2} className="absolute left-[88%]" alt="" />
            <img src={icon3} className="absolute left-[-10px] top-[42%]" alt="" />
            <img src={icon4} className="absolute left-[46%] top-[41%]" alt="" />
            <img src={icon5} className="absolute left-[94%] top-[34%]" alt="" />
            <img src={icon6} className="absolute left-[-20px] bottom-[20px]" alt="" />
            <img src={icon7} className="absolute left-[47%] bottom-[40px]" alt="" />

            <div className='flex'>

                <Fade left delay={100} >
                    <div className='w-1/2 '>
                        <div className='blog-cont-img w-[572px] h-[354px]'>
                            <div className='blogImg'>
                                <img src={img1} className="" alt="" />
                            </div>
                        </div>
                    </div>
                </Fade>

                <Fade left delay={1500}>
                <div className='w-1/2 p-[80px] '>
                    <h1 className='text-[35px] font-[700]'>Lorem Ipsum is simply dummy text of the dards</h1>
                    <p className='text-[13px]  text-[#7E7C7C] mt-[16px]'>
                        be
                        distracted by the readable content of a page when looking at its layout.
                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                        of letters, as opposed to using 'Content here, content here', making
                        it look like readable English. Many desktop publishing packages
                        and web page editors now use Lorem Ipsum as their default model text,
                        and a search for 'lorem ipsum'
                    </p>
                </div>
                </Fade>
            </div>


            <div className='flex mt-[40px]'>

                <Fade right delay={2500}>
                <div className='w-1/2 p-[80px]'>
                    <h1 className='text-[35px] font-[700]'>Why Customer Love Us</h1>
                    <p className='text-[13px]  text-[#7E7C7C] mt-[16px]'>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when looking at its layout.
                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                        of letters, as opposed to using 'Content here, content here',
                    </p>
                    <div className='mt-[18px]'>
                        <h3 className='text-[18px] font-[600]'>Customer Name</h3>

                        <div className='flex gap-[18px] mt-[8px]'>
                            <div className='w-[6px] h-[6px] rounded-full bg-[#D9D9D9]'></div>
                            <div className='w-[6px] h-[6px] rounded-full bg-[#D9D9D9]'></div>
                            <div className='w-[18px] h-[6px] rounded-full bg-[#2AC01D]'></div>
                        </div>
                    </div>
                </div>
                </Fade>

                <Fade top delay={2000}>
                <div className='ml-[60px] blog-cont-img w-[572px] h-[354px]'>
                    <div className='blogImg'>
                        <img src={img2} className="" alt="" />
                    </div>
                </div>
                </Fade>
            </div>

            <hr className='mt-[70px]' />
        </div>
    );
};

export default Blog;  