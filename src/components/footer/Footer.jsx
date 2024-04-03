import React from 'react'
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { MdAddIcCall } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
    return (
        <>
            <footer class="body-font">
                <div class="container py-12 lg:px-10 mx-auto  ">
                    <div class="flex flex-wrap items-center">
                        <div class="lg:w-1/3 md:w-1/3 w-full px-4">
                            <h2 class="text-lg  font-semibold uppercase tracking-normal  mb-3">Maninder Singh REALTY INC.</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <p className='flex items-center   gap-2'> <span className=' text-NewYello  '><MdAddIcCall className='w-6 h-6 ' /></span>  604-855-8060</p>
                                    <p className='flex items-center   gap-2 my-1'>  <span className=' text-NewYello  '><MdOutlineEmail className=' w-6 h-6 ' /></span> sarah@sarahtoop.com </p>
                                    <p className='flex items-center gap-2'> <span className=' text-NewYello  '> <FaFacebookF className=' w-6 h-6 ' /> </span> facebook.com/sarahtooprealtor</p>
                                </li>

                            </nav>
                        </div>
                        <div class="lg:w-1/3 md:w-1/3 w-full px-4">
                            <nav class="list-none mb-10">

                                <li>
                                    <img

                                        src="./asset/Rexara Logo Black.png"
                                        class='w-60 md:mx-auto' alt="" />

                                </li>

                            </nav>
                        </div>
                        <div class="lg:w-1/3 md:w-1/3 w-full px-4 lg:px-16">
                            <h2 class="text-lg  font-semibold capitalize tracking-normal  mb-3">REXARA REALTY INC.</h2>
                            <nav class="list-none  mb-10">
                                <li>
                                    <p className='flex items-center   gap-2'> <span className=' text-NewYello  '><MdAddIcCall className='w-6 h-6 ' /></span>  604-855-8060</p>
                                    <p className='flex items-center   gap-2 my-1'>  <span className=' text-NewYello  '><MdOutlineEmail className=' w-6 h-6 ' /></span> sarah@sarahtoop.com </p>
                                    <p className='flex items-center gap-2'> <span className=' text-NewYello  '> <FaFacebookF className=' w-6 h-6 ' /> </span> facebook.com/sarahtooprealtor</p>
                                </li>

                            </nav>
                        </div>
                    </div>
                </div>
            </footer >


            <footer class="bg-black text-white py-2">
                <div class=" container lg:px-10 mx-auto  ">
                    <div class="grid grid-cols-1 gap-2 px-4 py-6 lg:py-8 sm:grid-cols-2 md:grid-cols-3 ">

                        <div class='w-full lg:col-span-1 lg:-mt-12'>
                            <img
                                src="./asset/White logo - no background.png"
                                class='' alt="" />


                            <p className='mt-8'>
                                Real estate is a term that refers to property consisting of land and
                                the buildings on it, along with its natural resources such as crops,
                                minerals, or water; immovable property of this nature.
                                Real estate is typically bought and sold either through
                                a licensed real estate agent or directly by the owner. </p>
                        </div>


                        <div className='col-span-1 sm:ml-10 lg:ml-28'>

                            <div className='flex  gap-6 lg:gap-16  '>


                                <div>
                                    <h2 class="mb-8 text-2xl font-semibold"> Links</h2>
                                    <nav class="list-none  capitalize space-y-3 cursor-pointer ">
                                        <li>
                                            <a class="">home</a>
                                        </li>
                                        <li>
                                            <a class="">about</a>
                                        </li>
                                        <li>
                                            <a class="">contact </a>
                                        </li>
                                        <li>
                                            <a class="">blog</a>
                                        </li>
                                    </nav>
                                </div>
                                <div>
                                    <h2 class="mb-8 text-2xl font-semibold">Industries </h2>
                                    <nav class="list-none  capitalize space-y-3 cursor-pointer ">
                                        <li>
                                            <a class="">property</a>
                                        </li>
                                        <li>
                                            <a class="">selling</a>
                                        </li>
                                        <li>
                                            <a class="">buying </a>
                                        </li>
                                        <li>
                                            <a class="">blog</a>
                                        </li>
                                    </nav>
                                </div>





                            </div>


                        </div>


                        <div className='col-span-1 lg:mx-auto'>

                            <div>
                                <h2 class="mb-8 text-2xl font-semibold">Address</h2>

                                <div className=''>
                                    <p>John Doe</p>
                                    <p>123 Main Street</p>
                                    <p>City, State, ZIP</p>
                                    <p>Country</p>
                                    <p>Email: Maninder@gmail.com </p>
                                    <p>Phone: 123-456-7890</p>
                                </div>


                                <div className='flex gap-3  items-center mt-2'>
                                    <div className=' flex items-center 
                                    justify-center w-10 h-10  rounded-full border border-[#C5B351] hover:bg-[#C5B351]  transition-all duration-75
                                    -full'>
                                        <FaLinkedinIn />
                                    </div>
                                    <div className=' flex items-center 
                                    justify-center w-10 h-10 rounded-full  border border-[#C5B351] hover:bg-[#C5B351]  transition-all duration-75
                                    -full'>
                                        <FaInstagram />
                                    </div>
                                    <div className=' flex items-center 
                                    justify-center w-10 h-10  rounded-full border border-[#C5B351] hover:bg-[#C5B351]  transition-all duration-75
                                    -full'>
                                        <FaFacebookF />
                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>


            </footer>

        </>
    )
}

export default Footer