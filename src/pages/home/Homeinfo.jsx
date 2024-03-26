import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
const Homeinfo = () => {
    return (
        <div className=' py-5 lg:py-20 bg-[#abb8c3]/10 '>
            <div className='container lg:px-10 mx-auto '>
                <div className='grid grid-cols-1 md:grid-cols-[auto_60%] '>
                    <div className='px-4 '>
                        <img
                         className='w-60 h-60 rounded-md'
                         src="./asset/Webp_w.jpg" alt="" />

                        <div>
                            <div className='py-3'>
                                <h2 className=' text-xl lg:text-3xl font-medium'>Maninder Singh</h2>
                                <p className=''>REAL ESTATE AGE</p>
                            </div>

                            <p className='text-xl font-normal mt-2'>Downtown | Miami</p>
                            <p className='m'>785 West Side Road – Miami, FL 33879</p>
                            <div className='py-3'>
                                <p className='flex items-center gap-3'> <FaWhatsapp className='h-5 w-5 text-[#C5B351] ' /> <span>
                                    +1 (786) 465 9382</span></p>
                                <p className='flex items-center gap-3'> <FaSkype className='h-5 w-5 text-[#C5B351] ' /> <span> martin.moore</span></p>
                            </div>
                        </div>
                    </div>



                    <div className='px-4 lg:px-0'>
                        <div className='mb-5'>
                            <h2 className='text-3xl lg:text-5xl font-[400]  text-[#C5B351]  mb-3'>Contact Us</h2>
                            <p className=' '>LOREM IPSUM DOLOR SIT AMET</p>
                        </div>

                        <div>
                            <form className='p-6 lg:p-12 bg-white text-black ' action="">
                                <div className=" ">
                                    <div className="flex flex-wrap ">
                                        <div className="p-1 w-full sm:w-1/2">
                                            <div className="relative">
                                                <label htmlFor="name" className="leading-7 text-sm font-medium"> First Name</label>
                                                <input type="text" id="name" name="name" className="w-full  rounded border border-gray-[#C5B351]   focus:ring-2 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                            </div>
                                        </div>
                                        <div className="p-1 w-full sm:w-1/2">
                                            <div className="relative">
                                                <label htmlFor="email" className="leading-7 text-sm font-medium">First Last</label>
                                                <input type="email" id="email" name="email" className="w-full  rounded border border-gray-[#C5B351]    focus:ring-2 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                            </div>
                                        </div>
                                        <div className="p-1 w-full sm:w-1/2">
                                            <div className="relative">
                                                <label htmlFor="email" className="leading-7 text-sm font-medium">Email</label>
                                                <input type="email" id="email" name="email" className="w-full  rounded border border-gray-[#C5B351]    focus:ring-2 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                            </div>
                                        </div>
                                        <div className="p-1 w-full sm:w-1/2">
                                            <div className="relative">
                                                <label htmlFor="email" className="leading-7 text-sm font-medium">Number</label>
                                                <input type="email" id="email" name="email" className="w-full  rounded border border-gray-[#C5B351]    focus:ring-2 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                            </div>
                                        </div>
                                        <div className="p-1 w-full">
                                            <div className="relative">
                                                <label htmlFor="message" className="leading-7 text-sm font-medium">Message</label>
                                                <textarea id="message" name="message" className="w-full  rounded border border-gray-[#C5B351]    focus:ring-2 h-24 text-base outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                            </div>
                                        </div>
                                        <div className="p-1 w-full">
                                            <button className="w-full text-white bg-[#C5B351] border-0 py-2 px-8 focus:outline-none hover:bg-black  ">Submit</button>
                                        </div>
                                    </div>
                                </div>


                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homeinfo