import React, { useState, useEffect } from 'react';
import Header from "../../components/header/Header";
import Footer from '../../components/footer/Footer';
import SearchForm from '../../components/SearchForm';
import { Link } from 'react-router-dom';

const Blogcontainer = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            const response = await fetch('https://backend.artechworld.tech/api/blogs');
            const data = await response.json();
            if (data.status) {
                // Map through the data and parse the Summernote content
                const parsedBlogs = data.data.map(blog => {
                    return {
                        ...blog,
                        content: parseSummernoteContent(blog.content)
                    };
                });
                setBlogs(parsedBlogs);
            } else {
                console.error('Failed to fetch blogs');
            }
        } catch (error) {
            console.error('Error fetching blogs:', error);
        }
    };

    // Function to parse Summernote content and truncate to 20 words
    const parseSummernoteContent = (contentArray) => {
        if (Array.isArray(contentArray)) {
            const content = contentArray.join(' '); // Join HTML tags into a single string
            const words = content.split(' ');
            return words.slice(0, 20).join(' ') + '...'; // Truncate to 20 words
        }
        return contentArray;
    };

    return (
        <>
            <Header />
            <div className='bg-black flex justify-center items-center text-white w-full bg-cover bg-no-repeat h-56' style={{ backgroundImage: `url("/asset/bg-lines-svg.svg")` }}>
                <div>
                    <h1 className='text-2xl lg:text-6xl font-[400] mb-4 text-[#C5B351] '>Real Estate Blog</h1>
                    <p className='text-white text-xl text-center font-normal font-prata tracking-tight'>Read about the latest industry news</p>
                </div>
            </div>
            <div className='bg-[#fffcfc]'>
                <div className='container px-4 lg:px-10 py-6 mx-auto'>
                    <h1 className='text-2xl lg:text-4xl font-[400] mb-4'>Blog List</h1>
                    <div className='grid grid-cols-1 lg:grid-cols-[68%_auto] gap-14'>
                        {/*blog section  */}
                        <div className='flex-1 overflow-auto h-auto'>
                            <div className='flex flex-wrap md:flex-nowrap gap-5'>
                                {blogs.map(blog => (
                                    <div key={blog._id} className='relative p-1 bg-white shadow-lg overflow-hidden rounded-lg border-[1px] border-[#f1f8ff] text-[#464646]'>
                                        <img className='rounded-[10px] transition-transform duration-300 transform hover:scale-110 object-cover' src={`https://backend.artechworld.tech/uploads/blogs/tImages/${blog.mainImage}`} alt='' />
                                        <div className='p-4'>
                                            <h4 className='text-xl cursor-pointer hover:text-NewYello font-semibold'>{blog.title}</h4>
                                            <p>{new Date(blog.created_at).toLocaleDateString()}</p>
                                            {/* Render HTML content using dangerouslySetInnerHTML */}
                                            <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
                                            <div className='absolute left-4 bottom-5'>
                                                <Link to={`/singleblog/${blog._id}`} className='flex cursor-pointer text-sm font-bold hover:text-NewYello justify-center items-center mt-2'>
                                                    Continue reading <span className='pl-1'>&#10132;</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* side blog section */}
                        <div className='relative'>
                            <div className='sticky top-0'>
                                <div className='p-6 rounded-lg shadow-lg bg-white mb-5'>
                                    <SearchForm />
                                </div>
                                <div className='p-6 rounded-lg shadow-lg bg-white'>
                                    <h4 className='text-2xl font-medium mb-4'>Latest Listings</h4>
                                    <div className='py-3'>
                                        <div className='flex flex-col space-y-3'>
                                            {/* Latest listings here */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-6'>
                <Footer />
            </div>
        </>
    );
};

export default Blogcontainer;
