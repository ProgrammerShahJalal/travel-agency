import React from 'react';
import { Link } from 'react-router-dom';


const OnlyBlog = ({ blog }) => {
    const { title, img, data, _id } = blog;
    return (
        <div>
            <Link to={`/booking/${_id}`}>
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                    <div className="md:flex">
                        <div className="md:shrink-0">
                            <img className="h-48 w-full object-cover md:h-full md:w-48" src={img} alt="Man looking at item at a store" />
                        </div>
                        <div className="p-8">
                            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{title}</div>

                            <p className="mt-2 text-slate-500 indent-8 truncate">{data}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default OnlyBlog;