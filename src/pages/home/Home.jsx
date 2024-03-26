import React from 'react'
import "./home.css"
import Header from "../../components/header/Header"
import Homebanner from '../../components/banner/Homebanner'
import Footer from '../../components/footer/Footer'
import Testimonial from '../../components/testimonial/Testimonial'
import HomeContact from './HomeContact'
import About from './About'
import CardList from './CardList'
import Homeinfo from './Homeinfo'
import Homeslider from './Homeslider'

const Home = () => {
    return (
        <>

            <Header />
            <Homebanner />
            <Homeslider />
            <div className=' mt-0 sm:mt-12 py-6'>
                <About />
            </div>

            <section className='container mx-auto py-6 lg:pt-20 lg:pb:14 px-4 lg:px-10'>

                <div className="flex flex-col text-center w-full mb-5 lg:mb-14">
                    <h1 className=" text-2xl lg:text-5xl font-[400] mb-4 text-[#C5B351]  ">Featured Neighborhoods</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">In the vibrant neighborhood of San Jose, California, Sam is renowned among residents, property developers, local businesses, and professionals in the real estate industry for her remarkable skills, dynamic approach, and tireless commitment to facilitating transactions for buyers and sellers.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-5 gap-5 mb-4">
                    <div class="col-span-2 py-28  lg:py-40 bg-cover bg-no-repeat rounded-[10px] shadow overflow-hidden relative flex items-center justify-center" style={{ backgroundImage: `url("https://sanjose-wpresidence.b-cdn.net/wp-content/uploads/2014/05/10-4.webp")` }}>
                        <div class="   bg-black bg-opacity-25 hover:bg-opacity-0 z-50  text-center absolute inset-0 flex items-center justify-center ">
                            <p class="text-white text-2xl font-normal font-prata  tracking-tight ">MISSION</p>
                        </div>
                    </div>

                    <div class="col-span-1 py-28  lg:py-40 bg-cover bg-no-repeat rounded-[10px] shadow overflow-hidden relative flex items-center justify-center" style={{ backgroundImage: `url("https://sanjose-wpresidence.b-cdn.net/wp-content/uploads/2014/05/2-1.webp")` }}>
                        <div class="   bg-black bg-opacity-25 hover:bg-opacity-0 z-50  text-center absolute inset-0 flex items-center justify-center ">
                            <p class="text-white text-2xl font-normal font-prata  tracking-tight ">ABBOTSFORD

                            </p>
                        </div>
                    </div>
                    <div class="col-span-1 py-28  lg:py-40 bg-cover bg-no-repeat rounded-[10px] shadow overflow-hidden relative flex items-center justify-center" style={{ backgroundImage: `url("https://sanjose-wpresidence.b-cdn.net/wp-content/uploads/2014/05/1.6-1-980x768.webp")` }}>
                        <div class="   bg-black bg-opacity-25 hover:bg-opacity-0 z-50  text-center absolute inset-0 flex items-center justify-center ">
                            <p class="text-white text-2xl font-normal font-prata  tracking-tight ">CHILLIWACK

                            </p>
                        </div>
                    </div>
                    <div class="col-span-1 py-28  lg:py-40 bg-cover bg-no-repeat rounded-[10px] shadow overflow-hidden relative flex items-center justify-center" style={{ backgroundImage: `url("https://sanjose-wpresidence.b-cdn.net/wp-content/uploads/2014/05/10-4.webp")` }}>
                        <div class="   bg-black bg-opacity-25 hover:bg-opacity-0 z-50  text-center absolute inset-0 flex items-center justify-center ">
                            <p class="text-white text-2xl font-normal font-prata  tracking-tight ">MAPLE RIDGE

                            </p>
                        </div>
                    </div>
                </div>

                <div class=" grid grid-cols-1 md:grid-cols-5 gap-5 ">
                    <div class="col-span-1 py-28  lg:py-40 bg-cover bg-no-repeat rounded-[10px] shadow overflow-hidden relative flex items-center justify-center" style={{ backgroundImage: `url("https://sanjose-wpresidence.b-cdn.net/wp-content/uploads/2023/11/12-980x682.webp")` }}>
                        <div class="   bg-black bg-opacity-25 hover:bg-opacity-0 z-50  text-center absolute inset-0 flex items-center justify-center ">
                            <p class="text-white text-2xl font-normal font-prata  tracking-tight">ALDERGROVE

                            </p>
                        </div>
                    </div>

                    <div class="col-span-1 py-28  lg:py-40 bg-cover bg-no-repeat rounded-[10px] shadow overflow-hidden relative flex items-center justify-center" style={{ backgroundImage: `url("https://sanjose-wpresidence.b-cdn.net/wp-content/uploads/2023/11/4.webp")` }}>
                        <div class="   bg-black bg-opacity-25 hover:bg-opacity-0 z-50  text-center absolute inset-0 flex items-center justify-center ">
                            <p class="text-white text-2xl font-normal font-prata  tracking-tight ">LANGLEY
                            </p>
                        </div>
                    </div>
                    <div class="col-span-1 py-28  lg:py-40 bg-cover bg-no-repeat rounded-[10px] shadow overflow-hidden relative flex items-center justify-center" style={{ backgroundImage: `url("https://sanjose-wpresidence.b-cdn.net/wp-content/uploads/2023/11/1-980x768.webp")` }}>
                        <div class="   bg-black bg-opacity-25 hover:bg-opacity-0 z-50  text-center absolute inset-0 flex items-center justify-center ">
                            <p class="text-white text-2xl font-normal font-prata  tracking-tight ">HARRISON

                            </p>
                        </div>
                    </div>
                    <div class="col-span-2 py-28  lg:py-40 bg-cover bg-no-repeat rounded-[10px] shadow overflow-hidden relative flex items-center justify-center" style={{ backgroundImage: `url("https://sanjose-wpresidence.b-cdn.net/wp-content/uploads/2021/10/5.0.2-980x501.webp")` }}>
                        <div class="   bg-black bg-opacity-25 hover:bg-opacity-0 z-50  text-center absolute inset-0 flex items-center justify-center ">
                            <p class="text-white text-2xl font-normal font-prata  tracking-tight ">SILVERDALE</p>
                        </div>
                    </div>
                </div>

            </section>





            <div className='mt-3 lg:mt-16'>
                <CardList />
            </div>
            <div className='mt-3 '>
                <HomeContact />
            </div>

            <div className='mt-16'>
                <Testimonial />
            </div>
            <div className='mt-16'>
                <Homeinfo />
            </div>
            <Footer />





           
        </>
    )
}

export default Home