import React from 'react'
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
const About = () => {
    return (
        <>
            <div className='w-full bg-center  bg-no-repeat bg-cover' style={{ backgroundImage: `url("././asset/background_white.webp")` }} >

                <div className="container px-4 lg:px-10 mx-auto ">

                    <div className='flex flex-wrap'>
                        <div className='w-full lg:w-[40%] h-[21rem] md:h-[52rem] lg:h-auto bg-center rounded-xl  bg-no-repeat bg-cover' style={{ backgroundImage: `url("././asset/About_img_ori.jpg")` }} >
                           
                        </div>

                        <div className='w-full lg:w-3/5 sm:py-14 md:pl-10 '>
                            <p className='text-xl italic mb-4'>About</p>
                            <h1 className='text-3xl lg:text-5xl font-[400] text-[#C5B351] capitalize  mb-5'>Maninder Singh, Your Local Realtor</h1>

                            <div className=''>
                                <p className='text-base leading-relaxed mb-4'>Born and raised in Mission, BC, Rav brings local passion and intimate Fraser Valley knowledge to her role as a real estate professional. Focused on the Fraser Valley, she's dedicated to serving her community, building relationships, and providing top-notch service to her clients. </p>

                                <p className='text-base  leading-relaxed   mb-8'>Born and raised in Mission, BC, Rav brings local passion and intimate Fraser Valley knowledge to her role as a real estate professional. Focused on the Fraser Valley, she's dedicated to serving her community, building relationships, and providing top-notch service to her clients. </p>


                                {/* <div className=' flex gap-3 mt-2 '>
                                    <button className='inline-block  hover:text-[#C5B351] border border-[#C5B351] uppercase  px-4 py-1.5 sm:px-8 sm:py-3'>About me</button>
                                    <button className='hover:text-white transition duration-150 ease-out hover:ease-in  bg-[#C5B351] hover:bg-black uppercase px-4 py-1.5 sm:px-8 sm:py-3'>Let's Chat</button>

                                </div> */}

                                <div className=' my-6'>
                                    <hr />
                                    <div className='py-6'>
                                        <div className='flex justify-between items-center'>
                                            <div className='flex gap-2 '>
                                                <div className=' flex items-center justify-center w-10 h-10 rounded-full border border-[#C5B351] hover:bg-[#C5B351]  transition-all duration-75
                                                 -full'>
                                                    <FaLinkedinIn />
                                                </div>
                                                <div className=' flex items-center 
                                                   justify-center w-10 h-10 rounded-full border border-[#C5B351] hover:bg-[#C5B351]  transition-all duration-75
                                                  -full'>
                                                    <FaInstagram />
                                                </div>
                                                <div className=' flex items-center 
                                                     justify-center w-10 h-10 rounded-full border border-[#C5B351] hover:bg-[#C5B351]  transition-all duration-75
                                                   -full'>
                                                    <FaFacebookF />
                                                </div>
                                            </div>

                                            <div>
                                                <span className='text-xl cursor-pointer font-prata flex items-center justify-center'>Contact <FaLongArrowAltRight className='pl-1 pt-1 w-10' /></span>
                                            </div>



                                        </div>
                                    </div>
                                    <hr />

                                </div>



                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </>
    )
}

export default About