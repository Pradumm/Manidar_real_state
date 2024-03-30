import React, { useState } from 'react'
import Header from "../../components/header/Header"
import { FaCalendarAlt } from "react-icons/fa";
import { CiStickyNote } from "react-icons/ci";

import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

import BlogCard from "../../components/BlogCard"
import SearchForm from '../../components/SearchForm';
import Footer from '../../components/footer/Footer';
const Contactpage = () => {
    const data = [1, 2, 4]
    return (
        <>
            <Header />


            <div className='bg-black flex justify-center items-center text-white  w-full bg-cover bg-no-repeat h-56' style={{ backgroundImage: `url("/asset/bg-lines-svg.svg")` }} >

                <div>
                    <h1 className='text-2xl lg:text-6xl font-[400] mb-4 text-[#C5B351] '>How to contact me</h1>
                    <p className='text-white text-xl text-center font-normal font-prata  tracking-tight'>Call or send an email through our form</p>
                </div>

            </div>
            <div className='bg-[#fffcfc]'>
                <div className=' container px-4 lg:px-10 py-6 lg:py-16  mx-auto'>


                    <div className='grid grid-cols-1 lg:grid-cols-[68%_auto] gap-14 '>
                        {/*blog section  */}
                        <div className='flex-1 overflow-auto  h-auto' >


                            <div className='   bg-white shadow-lg  overflow-hidden rounded p-2  md:p-7 text-[#464646] '>
                                <h1 className=' text-black text-2xl lg:text-4xl font-[400] mb-4  '> Maninder Singh Realty</h1>
                                <div className='flex gap-3  items-center mt-5'>
                                    <div className=' flex items-center 
                                    justify-center w-8 h-8  rounded-full border border-[#C5B351] hover:bg-[#C5B351]  transition-all duration-75
                                    -full'>
                                        <FaLinkedinIn />
                                    </div>
                                    <div className=' flex items-center 
                                    justify-center w-8 h-8 rounded-full  border border-[#C5B351] hover:bg-[#C5B351]  transition-all duration-75
                                    -full'>
                                        <FaInstagram />
                                    </div>
                                    <div className=' flex items-center 
                                    justify-center w-8 h-8  rounded-full border border-[#C5B351] hover:bg-[#C5B351]  transition-all duration-75
                                    -full'>
                                        <FaFacebookF />
                                    </div>
                                </div>

                                <div className='py-6'>
                                    <p className='mb-1'><strong>Phone:</strong>  <span className='pl-3'>(305) 555-4446</span></p>
                                    <p className='mb-1'><strong>Mobile:</strong>  <span className='pl-3'>(305) 555-4446</span></p>
                                    <p className='mb-1'><strong>Email:</strong>   <span className='pl-3'>youremail@gmail.com</span></p>
                                    <p className='mb-1'><strong>Skype:</strong>   <span className='pl-3'>yourskypename</span> </p>
                                </div>

                                <div className='mb-5'>
                                    <p>Whether you’re looking for property for sale in
                                        New York area or property for rent, WP Residence makes
                                        searching easy. Use our unique geolocation mapping feature to root-out your ideal villa, townhouse or apartment and contact the owners direct. We will help you find your dream house in just a few seconds.We offer our clients a wealth of knowledge regarding all aspects of purchasing or selling a home. Whether it is helping you search for your dream home, discussing new New York real estate developments, or assisting with the sale of your property, we would love the opportunity to help.
                                        Please feel free to contact us with any questions!</p>
                                </div>
                                <img
                                    class=' object-cover rounded-lg'
                                    src="./asset/Webp_w.jpg" alt=""
                                />

                            </div>

                            {/* related form*/}
                            <div className='   bg-white shadow-lg  overflow-hidden rounded p-2  md:p-7 text-[#464646] my-5'>
                                <h1 className=' text-black text-2xl lg:text-3xl font-[400] mb-2  '> Contact</h1>
                                <form className='py-3'>

                                    <div className='flex flex-col sm:flex-row gap-3'>
                                        <input type="text" className='focus:outline-none border-gray-300 border rounded-lg px-4 py-2  w-full' placeholder='Name' />
                                        <input type="text" className='focus:outline-none border-gray-300 border rounded-lg px-4 py-2 w-full' placeholder='Email' />
                                        <input type="text" className='focus:outline-none border-gray-300 border rounded-lg px-4 py-2 w-full' placeholder='Website' />
                                    </div>



                                    <textarea
                                        className=' my-3 border w-full rounded-lg px-4 focus:outline-none border-gray-300 py-2'
                                        placeholder='comment '
                                        cols="20" rows="6">

                                    </textarea>

                                    <button className='px-5  bg-NewYello text-white rounded py-1.5  '>Post Comment</button>
                                </form>

                            </div>



                        </div>


                        {/* side bloge sect */}
                        <div className="relative">
                            <div className="sticky top-0 ">
                                <div className='p-6  rounded-lg shadow-lg bg-white mb-5'>
                                    <SearchForm />
                                </div>
                                <div className='p-6 rounded-lg shadow-lg bg-white'>
                                    <h4 className='text-2xl font-medium mb-4'>Latest Listings</h4>

                                    <div className='py-3'>
                                        <div className='flex flex-col space-y-3'>
                                            {
                                                data.map((item) => {
                                                    return (
                                                        <>
                                                            <div className='flex justify-between items-center'>
                                                                <img
                                                                    className=' w-28 rounded-xl object-cover'
                                                                    src="https://sanjose-wpresidence.b-cdn.net/wp-content/uploads/2014/05/9.6-525x328.webp" alt=""
                                                                />


                                                                <div className='pl-3'>
                                                                    <p>Villa with panoramic view</p>
                                                                    <p className='text-NewYello'>$ 5,500,000</p>
                                                                </div>
                                                            </div>
                                                        </>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div >

            <Footer/>

        </>
    )
}

export default Contactpage