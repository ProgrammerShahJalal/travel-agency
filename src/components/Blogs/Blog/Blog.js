import React from 'react';
import { Link } from 'react-router-dom';


const Blog = ({ blog }) => {
    const { title, img, expense, rating, _id } = blog;
    return (
        <div>
            <Link to={`/details/${_id}`}>
                <div className="md:shrink-0 rounded-xl shadow-lg p-5 bg-white">
                    <img className="h-48 w-full object-cover md:h-full md:w-48 rounded-md" src={img} alt='' />
                    <h2 className="uppercase tracking-wide text-sm text-indigo-600 font-semibold truncate">{title}</h2>
                    <div className='flex justify-around items-center'>
                        <p className="font-bold mt-2 text-cyan-800">Cost: ${expense}</p>
                        <p className="font-bold mt-2 text-purple-800">Rating: {rating}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Blog;