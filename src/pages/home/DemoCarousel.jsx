import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IoBedOutline } from "react-icons/io5";
import { MdOutlineBathroom } from "react-icons/md";
import { BiRectangle } from "react-icons/bi";

function DemoCarousel() {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 2,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },



    }


    return (


        <>

            <div className='container mx-auto py-6 px-4 lg:px-10'>

                <div className="flex flex-col text-center w-full mb-5 lg:mb-14">
                    <h1 className=" text-2xl lg:text-5xl font-[400] mb-4 text-[#C5B351]  "> Exclusive Listings </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">  single-family homes or embrace the convenience of city living with our vibrant downtown properties.</p>
                </div>



                <Carousel
                    responsive={responsive}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    infinite={true}
                    itemClass=""
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                >
                    <div className='border bg-white '>
                        <div className=' relative w-full  h-96 bg-center  bg-no-repeat bg-cover' style={{ backgroundImage: `url("https://rexararealty.com/uploads/gallery/PhotoAG00009-1.jpeg")` }} >
                            <div className='absolute top-0 left-0 p-2 rounded-br-lg bg-NewYello'>
                                <p className='text-white text-sm capitalize' >exclusice Listings</p>
                            </div>
                            <div className='absolute bottom-0 left-0 px-4 py-2 bg-white rounded-tr-lg'>
                                <p className='text-lg '>$500000</p>
                            </div>



                        </div>
                        <div className='p-4'>
                            <p>123 Main Street City, State, ZIP </p>

                            <p className='flex gap-3'>

                                <span className='flex justify-center items-center gap-3 '>  <IoBedOutline className='w-5 h-5' />3</span>
                                <span className='flex justify-center items-center gap-3'>  <MdOutlineBathroom className="w-5 h-5" />10</span>
                                <span className='flex justify-center items-center gap-3'><BiRectangle className="w-5 h-5" />2005 SqFt</span>
                            </p>
                        </div>


                    </div>
                </Carousel >

            </div>
        </>
    );
}

export default DemoCarousel;