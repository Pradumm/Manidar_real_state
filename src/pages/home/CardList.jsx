import React from 'react'
import { IoBedOutline } from "react-icons/io5";
import { IoCarSportOutline } from "react-icons/io5";
import { LuTriangleRight } from "react-icons/lu";
import { Link } from 'react-router-dom';
const CardList = () => {

    const data = [1, 2, 4, 5, 6, 7]

    const data2 = [
        {
            imgUrl: "https://seattle.b-cdn.net/wp-content/uploads/2021/09/decor_nice-1-8.jpg"
        },
        {
            imgUrl: "https://seattle.b-cdn.net/wp-content/uploads/2022/01/couch.jpg"
        },
        {
            imgUrl: "https://seattle.b-cdn.net/wp-content/uploads/2022/01/category_9.jpeg"
        },
        {
            imgUrl: "https://seattle.b-cdn.net/wp-content/uploads/2022/01/interior27-835x467.jpg"
        },
        {
            imgUrl: "https://seattle.b-cdn.net/wp-content/uploads/2022/01/city_9.jpeg"
        },
        {
            imgUrl: "https://seattle.b-cdn.net/wp-content/uploads/2022/01/category_11.jpeg"
        }
    ]





    return (
        <div className='py-5 lg:py-20 bg-[#abb8c3]/10 '>
            <div className='container px-4 lg:px-10 mx-auto items-center '>
                <div className='mb-6'>
                    <h2 className='text-3xl lg:text-5xl font-[400]  text-center text-[#C5B351]    capitalize mb-3'>FEATURED LISTINGS</h2>
                    <p className=' text-center'>LOREM IPSUM DOLOR SIT AMET</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-4 lg:gap-10 mx-auto'>

                    {
                        data2.map((item) => {
                            return (
                                <>
                                    <div

                                        class=" w-full  shadow bg-white mb-4">
                                        <a href="#">
                                            <img
                                                className='w-full'
                                                src={item.imgUrl}
                                                alt="" />

                                        </a>
                                        <div class="p-6">
                                            <a href="#">
                                                <h5 class="mb-2 text-xl text-center font-medium tracking-tight">Renovated apartment</h5>
                                            </a>
                                            <div className='my-2'>
                                                <p class=" text-center font-normal text-lg  text-black">$540,000</p>
                                                <p class="mb-4 text-center text-sm font-normal uppercase text-gray-400">APARTMENT0</p>
                                            </div>
                                            <div>
                                                <div className='flex justify-center items-center gap-3'>
                                                    <span className='flex items-center gap-2'> <IoBedOutline className='w-5 h-5' /> 2</span>
                                                    <span className='flex items-center gap-2'> <IoCarSportOutline className='w-5 h-5' /> 2</span>

                                                    <span className='flex items-center gap-2'> <IoBedOutline className='w-5 h-5' /> 2</span>
                                                    <span className='flex items-center gap-2'> <LuTriangleRight className='w-5 h-5' /> 2005 SqFt</span>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }


                </div>

                <div className='text-center pt-8'>
                    <Link to="/feature" className='text-white transition duration-150 ease-out hover:ease-in  bg-[#C5B351] hover:bg-black uppercase px-8 py-3'>more</Link>

                </div>


            </div>
        </div>
    )
}

export default CardList