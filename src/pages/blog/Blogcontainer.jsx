import React, { useState, useEffect, useRef } from 'react'
import Header from "../../components/header/Header"
import { TbMathGreater } from "react-icons/tb";
import Footer from '../../components/footer/Footer';
import SearchForm from '../../components/SearchForm';
const Blogcontainer = () => {

    const firstRef = useRef(null);
    const secondRef = useRef(null);
    const [heightBetween, setHeightBetween] = useState(null);
    const [fixedPosition, setFixedPosition] = useState(false);

    useEffect(() => {
        function handleScroll() {
            if (secondRef.current) {
                const secondRect = secondRef.current.getBoundingClientRect();
                const height = Math.abs(secondRect.top);
                setHeightBetween(height);
                if (height <= window.innerHeight / 2) {
                    setFixedPosition(true);
                } else {
                    setFixedPosition(false);
                }
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    const data = [1, 2, 4]
    return (
        <>
            <Header />
            <div className='bg-black flex justify-center items-center text-white  w-full bg-cover bg-no-repeat h-56' style={{ backgroundImage: `url("/asset/bg-lines-svg.svg")` }} >

                <div>
                    <h1 className='text-2xl lg:text-6xl font-[400] mb-4 text-[#C5B351] '>Real Estate Blog</h1>
                    <p className='text-white text-xl text-center font-normal font-prata  tracking-tight'>Read about the latest industry news</p>
                </div>

            </div>


            <div className='bg-[#fffcfc]'>
                <div className=' container px-4 lg:px-10 py-6  mx-auto'>
                    <h1 className='text-2xl lg:text-4xl font-[400] mb-4  '>Blog List</h1>

                    <div className='grid grid-cols-1 lg:grid-cols-[68%_auto] gap-14 '>
                        {/*blog section  */}
                        <div className='flex-1 overflow-auto  h-auto' >

                            <div className='flex flex-wrap md:flex-nowrap gap-5  '>
                                <div className=' relative p-1 bg-white shadow-lg  overflow-hidden rounded-lg border-[1px] border-[#f1f8ff] text-[#464646] '>

                                    <img
                                        class='rounded-[10px] transition-transform duration-300 transform hover:scale-110 object-cover'
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

                                <div className=' relative bg-white shadow-lg p-1 overflow-hidden rounded-lg border-[1px] border-[#f1f8ff] text-[#464646] '>

                                    <img
                                        class='rounded-[10px] transition-transform duration-300 transform hover:scale-110 object-cover'
                                        src="https://sanjose-wpresidence.b-cdn.net/wp-content/uploads/2014/05/j-525x328.webp" alt=""
                                    />


                                    <div className='p-4 '>
                                        <h4 className='text-xl cursor-pointer hover:text-NewYello font-semibold'>Best areas for families with kids</h4>
                                        <p> March 4, 2016</p>
                                        <p className='my-4  text-sm'> New York County as a whole covers a
                                            total area of 33.77 square miles (87.5 km2),
                                            of which 22.96 square miles
                                            59.5 ...</p>
                                        <div className='absolute   left-4 bottom-5'>
                                            <span className='flex cursor-pointer text-sm font-bold hover:text-NewYello  justify-center items-center mt-2' > Continue reading  <TbMathGreater className='pl-1' /></span>
                                        </div>
                                    </div>

                                </div>


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

            <div className='mt-6'>
                <Footer />
            </div>

        </>
    )
}



export default Blogcontainer