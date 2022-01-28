import React from 'react';

const Blog = ({ blog }) => {
    const { title, img, expense, rating } = blog;
    return (
        <div>
            <div className="md:shrink-0 rounded-xl shadow-lg">
                <img className="h-48 w-full object-cover md:h-full md:w-48 rounded-md" src={img} alt='' />
                <h2 className="uppercase tracking-wide text-sm text-indigo-500 font-semibold truncate">{title}</h2>
                <div className='flex justify-around items-center'>
                    <p className="mt-2 text-slate-500">${expense}</p>
                    <p className="mt-2 text-slate-500">{rating}</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;