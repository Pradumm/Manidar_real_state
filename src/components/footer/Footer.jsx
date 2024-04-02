import React from 'react'
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
const Footer = () => {
    return (
        <>
            <footer class="body-font">
                <div class="container py-16 lg:px-10 mx-auto  ">
                    <div class="flex flex-wrap md:text-left text-center">
                        <div class="lg:w-1/3 md:w-1/3 w-full px-4">
                        <h2 class="text-lg  font-semibold capitalize tracking-normal  mb-3">REXARA REALTY INC.</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <p>   604-855-8060</p>
                                    <p>   sarah@sarahtoop.com </p>
                                    <p>   facebook.com/sarahtooprealtor</p>
                                </li>

                            </nav>
                        </div>
                        <div class="lg:w-1/3 md:w-1/3 w-full px-4">
                            <nav class="list-none mb-10">

                                <li>
                                    <img

                                        src="./asset/Rexara Logo Black.png"
                                        class='' alt="" />

                                </li>

                            </nav>
                        </div>
                        <div class="lg:w-1/3 md:w-1/3 w-full px-4 text-center">
                            <h2 class="text-lg  font-semibold capitalize tracking-normal  mb-3">REXARA REALTY INC.</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <div className=''>
                                        <p>#101-7388 Vedder Road </p>
                                        <p>Chilliwack, BC V2R 4E4</p>
                                        <p>(604) 705-3339</p>
                                    </div>

                                </li>

                            </nav>
                        </div>
                    </div>
                </div>
            </footer >


            <footer class="bg-black text-white py-12">
                <div class=" container lg:px-10 mx-auto  ">
                    <div class="grid grid-cols-1 gap-2 px-4 py-6 lg:py-8 md:grid-cols-2">
                        <div class='flex flex-wrap  gap-6'>
                            <div class='w-full lg:w-56'>
                                <img src="https://media.istockphoto.com/id/1445195721/photo/happy-female-customer-paying-with-a-credit-card-in-a-ceramic-store.webp?b=1&s=170667a&w=0&k=20&c=OzfxMe_tc7J0hljLVCMQKbMPIcJ3JVblYow6FonNA_Q=" class='w-full' alt="" />
                                <p className='text-xl font-semibold text-center py-2 '></p>
                                <img

                                    src="./asset/Rexara Logo Transparent.png"
                                    class='w-40 mx-auto' alt="" />


                            </div>


                            <div className=''>
                                <h2 class="mb-8 text-2xl font-semibold">WHY BUY WITH ME?</h2>
                                <div className='flex flex-col'>
                                    <p className='text-base'>Lorem ipsum dolor sit amet </p>
                                    <span className='text-base'>Lorem ipsum dolor  </span>
                                    <span className='text-base'>Lorem ipsum dolor sit amet </span>

                                </div>

                            </div>
                        </div>

                        <div className='flex justify-between flex-wrap '>
                            <div className=''>
                                <h2 class="mb-8 text-2xl font-semibold">WHY SELL WITH ME?</h2>
                                <div className='flex flex-col cursor-pointer'>
                                    <p className='text-base'>Why sell with me?</p>
                                    <span className='text-base'>Free consultation </span>
                                    <span className='text-base'>Lorem ipsum dolor sit amet </span>

                                </div>
                            </div>

                            <div>

                                <div className='md:text-center'>
                                    <p>John Doe</p>
                                    <p>123 Main Street</p>
                                    <p>City, State, ZIP</p>
                                    <p>Country</p>
                                    <p>Email: johndoe@example.com</p>
                                    <p>Phone: 123-456-7890</p>
                                </div>


                                <div className='flex gap-3 md:justify-center items-center mt-2'>
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