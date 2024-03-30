import React from 'react'
import Header from "../../components/header/Header"
import { MdAddCall } from "react-icons/md";
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom';
const FeaturedPage = () => {

 

    const data2 = [
        {
            imgUrl: "https://s3-us-west-2.amazonaws.com/avenuehq-listings/fvrebgv/000/262/828/579e07eb2cf83a63f4382dedd25db8b6b61c67fa.jpg?fit=clip&w=1140"
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
        <>
            <Header />
            <div className='bg-black flex justify-center items-center text-white  w-full bg-cover bg-no-repeat h-56' style={{ backgroundImage: `url("/asset/bg-lines-svg.svg")` }} >

                <form className=" w-full px-4 lg:w-1/2">
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border  focus:outline-none  rounded-full bg-gray-50 " placeholder="Search Mockups, Logos..." required />
                        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-NewYello hover:bg-NewYello  focus:outline-none  font-medium rounded-full text-sm px-5 py-2">Search</button>
                    </div>
                </form>

            </div>


            <div className=' container px-4 lg:px-10 py-6  mx-auto'>
                <div class="mb-4 border-b border-gray-700">
                    <ul class="flex flex-wrap -mb-px text-base font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                        <li class="me-2" role="presentation">
                            <button class="inline-block p-4  text-NewYello hover:underline rounded-t-lg" id="profile-tab" data-tabs-target="#profile" type="button" aria-controls="profile" aria-selected="false">All Properties</button>
                        </li>
                        <li class="me-2" role="presentation">
                            <button class="inline-block p-4 hover:underline  rounded-t-lg " id="dashboard-tab" data-tabs-target="#dashboard" type="button" aria-controls="dashboard" aria-selected="false"> Residential Attached</button>
                        </li>
                        <li class="me-2" role="presentation">
                            <button class="inline-block p-4 rounded-t-lg  " id="settings-tab" data-tabs-target="#settings" type="button" aria-controls="settings" aria-selected="false">Settings</button>
                        </li>
                        <li role="presentation">
                            <button class="inline-block p-4  rounded-t-lg " id="contacts-tab" data-tabs-target="#contacts" type="button" aria-controls="contacts" aria-selected="false">Contacts</button>
                        </li>
                    </ul>
                </div>

                <div className='flex items-center justify-between'>
                    <div>
                        <p className='text-base'>Showing : <span>1-7  <span className='text-sm'>of </span>7</span></p>
                    </div>
                    <div>

                        <form class="w-40 mx-auto">
                            <select id="countries" class=" border text-sm   block w-full  focus:outline-none p-1.5 ">
                                <option selected>-- short by --</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </form>

                    </div>
                </div>


                <div className='py-8 flex flex-wrap gap-5'>

                    {
                        data2.map((item) => {
                            return (
                                <>
                                    <div class="max-w-sm mb-4">
                                        <p className=' font-semibold mb-2 pl-1'>31591 TOWNSHIPLINE Avenue in Mission: Mission BC House for sale : MLS®# R2849124</p>

                                        <div className=' border p-2 relative h-[185px] overflow-hidden'>
                                            <img
                                                className='transform transition-transform duration-3000 hover:scale-125'
                                                src={item.imgUrl}
                                                alt=""
                                            />
                                            <div className='p-2 absolute top-2 right-2 bg-black/70 rounded-md'>
                                                <MdAddCall className='text-white   ' />
                                            </div>
                                            <div className=' w-full flex justify-between absolute bottom-2 '>
                                                <button className='px-4 py-2 bg-gray-50 text-red-500'>TOWNSHIPLINE</button>
                                                <button className='px-4 py-2 bg-pink-200 text-red-500'>$ 6660</button>
                                            </div>
                                        </div>
                                        <div className='py-2'>
                                            <div class="relative ">
                                                <table class="w-full text-sm text-left rtl:text-right  ">
                                                    <thead class="text-xs text-gray-700 uppercase">
                                                        <tr className='border' >
                                                            <th scope="col" class="px-4 border py-1.5">
                                                                Color
                                                            </th>
                                                            <th scope="col" class="px-4 border   py-1.5">
                                                                Color
                                                            </th>
                                                            <th scope="col" class="px-4 border   py-1.5">
                                                                Category
                                                            </th>
                                                            <th scope="col" class="px-4 border   py-1.5">
                                                                Price
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr class="bg-white border">
                                                            <td class="px-4 border  py-1.5">
                                                                Silver
                                                            </td>
                                                            <td class="px-4 border  py-1.5">
                                                                Silver
                                                            </td>
                                                            <td class="px-4 border  py-1.5">
                                                                Laptop
                                                            </td>
                                                            <td class="px-4 border  py-1.5">
                                                                $2999
                                                            </td>
                                                        </tr>



                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <p className='text-xs pl-1'>Welcome to luxury living at its finest! Introducing a captivating retreat with exceptional finishes and vaulted</p>
                                        <p className='text-xs py-2 pl-1'>Listed by 3033 IMMEL ST #360 ABBOTSFORD</p>

                                        <div className='flex justify-between'>
                                            <Link to="/featurelist" className='text-white  shadow-xl text-sm transition duration-150 ease-out hover:ease-in  bg-[#C5B351] hover:bg-black uppercase px-8 py-2'>View</Link>
                                            <Link to="/featurelist" className='text-white  shadow-xl  text-sm transition duration-150 ease-out hover:ease-in  bg-black  hover:bg-[#C5B351] uppercase px-8 py-2'>more</Link>

                                        </div>

                                    </div>
                                </>
                            )
                        })
                    }


                </div>

            </div>

            <div className='mt-6'>
                <Footer/>
            </div>

        </>
    )
}

export default FeaturedPage