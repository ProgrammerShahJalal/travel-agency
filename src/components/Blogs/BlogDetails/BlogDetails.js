import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
    let { id } = useParams();

    const [blogDetails, setBlogDetails] = useState([])
    useEffect(() => {
        fetch('https://mighty-chamber-44774.herokuapp.com/blogs')
            .then(res => res.json())
            .then((data) => {
                const foundBlog = data.filter(detail => detail._id == id)
                console.log(foundBlog);
                setBlogDetails(foundBlog);
            })
    }, [id])

    const { title, img, expense, rating, location, data, time } = blogDetails[0] || {};

    return (
        <div className='max-w-md overflow-hidden md:max-w-2xl mx-auto'>
            <div className="md:shrink-0 rounded-xl shadow-lg p-5 bg-white">
                <img className="h-auto w-full object-cover md:h-full md:w-full rounded-md" src={img} alt='' />
                <h2 className='text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl text-center my-5'>{title}</h2>
                <div className='flex justify-around items-center'>
                    <p className="font-bold mt-2 text-cyan-500">Tour Place: {location}</p>
                    <p className="font-bold mt-2 text-purple-500">Time: {time} days</p>
                </div>
                <div className='flex justify-around items-center'>
                    <p className="font-bold mt-2 text-cyan-500">Total Expense: ${expense}</p>
                    <p className="font-bold mt-2 text-purple-500">Rating: {rating}</p>
                </div>
                <div>
                    <p className='text-justify'>
                        {data}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;