import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Homeslider = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
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
        <div className='container mx-auto py-6 lg:py-20 px-4 lg:px-10'>

            <div className="flex flex-col text-center w-full mb-5 lg:mb-14">
                <h1 className=" text-2xl lg:text-5xl font-[400] mb-4 text-[#C5B351]  ">Popular Categories</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">From luxurious waterfront estates to charming urban condos, we have something to suit every lifestyle and preference. Dive into the world of suburban tranquility with our spacious
                    single-family homes or embrace the convenience of city living with our vibrant downtown properties.</p>
            </div>

            <Carousel
                responsive={responsive}
                autoPlay={true}
                autoPlaySpeed={2000}
                infinite={true}
                itemClass=""
                removeArrowOnDeviceType={["tablet", "mobile"]}
            >



                <div class="bg-cover bg-no-repeat rounded-[10px] shadow overflow-hidden relative" style={{ backgroundImage: `url("https://sanjose-wpresidence.b-cdn.net/wp-content/uploads/2014/05/9.1.webp")` }}>
                    <div class="bg-black bg-opacity-25 inset-0 hover:bg-opacity-0 z-50 py-40 md:py-48">
                        <div class="absolute bottom-10 w-full flex justify-center">
                            <div className='text-center'>
                                <p class="text-white text-2xl font-normal font-prata tracking-tight mb-2">Commercial </p>
                                <span className='px-2 inline-flex text-white  items-center rounded-lg bg-NewYello'> 0 Listings </span>
                            </div>

                        </div>
                    </div>
                </div>



                <div class="bg-cover bg-no-repeat rounded-[10px] shadow overflow-hidden relative" style={{ backgroundImage: `url("https://sanjose-wpresidence.b-cdn.net/wp-content/uploads/2021/10/6.7-980x444.webp")` }}>
                    <div class="bg-black bg-opacity-25 inset-0 hover:bg-opacity-0 z-50 py-40 md:py-48">
                        <div class="absolute bottom-10 w-full flex justify-center">
                            <div className='text-center'>
                                <p class="text-white text-2xl font-normal font-prata tracking-tight mb-2">
                                    Single Family Home  </p>
                                <span className='px-2 inline-flex text-white  items-center rounded-lg bg-NewYello'> 5 Listings </span>
                            </div>

                        </div>
                    </div>
                </div>


                <div class="bg-cover bg-no-repeat rounded-[10px] shadow overflow-hidden relative" style={{ backgroundImage: `url("https://sanjose-wpresidence.b-cdn.net/wp-content/uploads/2014/05/9.4.webp")` }}>
                    <div class="bg-black bg-opacity-25 inset-0 hover:bg-opacity-0 z-50 py-40 md:py-48">
                        <div class="absolute bottom-10 w-full flex justify-center">
                            <div className='text-center'>
                                <p class="text-white text-2xl font-normal font-prata tracking-tight mb-2">
                                    Residential   </p>
                                <span className='px-2 inline-flex text-white  items-center rounded-lg bg-NewYello'> 2 Listings </span>
                            </div>

                        </div>
                    </div>
                   </div>


                   <div class="bg-cover bg-no-repeat rounded-[10px] shadow overflow-hidden relative" style={{ backgroundImage: `url("https://sanjose-wpresidence.b-cdn.net/wp-content/uploads/2014/05/2.3-3-980x682.webp")` }}>
                    <div class="bg-black bg-opacity-25 inset-0 hover:bg-opacity-0 z-50 py-40 md:py-48">
                        <div class="absolute bottom-10 w-full flex justify-center">
                            <div className='text-center'>
                                <p class="text-white text-2xl font-normal font-prata tracking-tight mb-2">Commercial </p>
                                <span className='px-2 inline-flex text-white  items-center rounded-lg bg-NewYello'> 0 Listings </span>
                            </div>

                        </div>
                    </div>
                </div>




            </Carousel>
        </div>
    )
}

export default Homeslider