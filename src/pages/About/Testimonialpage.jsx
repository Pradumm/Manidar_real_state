import React, { useEffect, useState } from 'react'
import Header from "../../components/header/Header"
import MessageBox from '../../components/MessageBox'
import Footer from '../../components/footer/Footer'


const Testimonialpage = () => {
    const data = [1, 2, 3, 4, 5]

    const [showMessageBox, setShowMessageBox] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowMessageBox(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setShowMessageBox(false);
    };


    return (
        <>
            <Header />

            <div className='bg-black flex justify-center items-center text-white  w-full bg-cover bg-no-repeat h-56' style={{ backgroundImage: `url("/asset/bg-lines-svg.svg")` }} >

                <div>
                    <h1 className='text-2xl lg:text-6xl font-[400] mb-4  text-center text-[#C5B351] '>WHAT CLIENTS ARE SAYING...</h1>
                    <p className='text-white lg:text-xl text-center font-normal font-prata  tracking-tight'>TESTIMONIALS</p>
                </div>

            </div>



            <section className='container mx-auto py-6 lg:pt-20 lg:pb:14 px-4 lg:px-10'>
                <div className=' space-y-10'>
                    {
                        data.map((item) => {
                            return (
                                <div className='px-5 py-6 lg:py-16 lg:px-20 bg-[#abb8c3]/10'>
                                    <p className='text-lg leading-relaxed mb-4'>I recently had the pleasure of working with Ravneet
                                        and I'm impressed by her exceptional skills in real estate .
                                        Her exceptional work ethics, compassionate character,
                                        and dual expertise as a nurse and realtor set her apart in the industry.
                                        If you're in need of a dedicated, knowledgeable, and caring professional, RAV is the ideal choice,
                                        ensuring a positive and memorable home buying or selling experience.
                                    </p>
                                    <p className='text-xl italic'>- Sumandeep Gill</p>
                                </div>
                            )
                        })
                    }
                </div>

            </section>

            <div>
                {showMessageBox && <MessageBox onClose={handleClose} />}
            </div>


            <Footer/>
        </>
    )
}

export default Testimonialpage