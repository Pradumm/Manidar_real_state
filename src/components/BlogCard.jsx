import React from 'react'
import { TbMathGreater } from "react-icons/tb";
const BlogCard = () => {
    return (
        <>

            <div className='lg:max-w-sm relative p-1 bg-white shadow-lg  overflow-hidden rounded-lg border-[1px] border-[#f1f8ff] text-[#464646] '>

                <img
                    class=' w-full rounded-[10px] transition-transform duration-300 transform hover:scale-110 object-cover'
                    src="https://sanjose-wpresidence.b-cdn.net/wp-content/uploads/2014/05/9.6-525x328.webp" alt=""
                />


                <div className='p-4 '>
                    <h4 className='text-xl cursor-pointer hover:text-NewYello font-semibold'>Best areas for families with kids</h4>
                    <p> March 4, 2016</p>
                    <p className='py-5 text-sm '> New York County as a whole covers a
                        total area of 33.77 square miles (87.5 km2),
                        of which 22.96 square miles lo
                        59.5 ...</p>
                    <div className='absolute   left-4 bottom-5'>
                        <span className='flex cursor-pointer text-sm font-bold hover:text-NewYello  justify-center items-center mt-2' > Continue reading  <TbMathGreater className='pl-1' /></span>
                    </div>
                </div>

            </div>
        </>
    )
}

export default BlogCard