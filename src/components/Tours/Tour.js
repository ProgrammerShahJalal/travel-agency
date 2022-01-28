import React from 'react';
import { Link } from 'react-router-dom';


const Tour = ({ tour }) => {
    const { name, img, _id, cost } = tour;
    return (
        <div>
            <Link to={`/booking/${_id}`}>
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                    <div>
                        <div className="md:shrink-0">
                            <img className="h-48 w-full object-cover md:h-full md:w-48 pl-4 pt-3" src={img} alt="Man looking at item at a store" />
                        </div>
                        <div className="p-8">
                            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{name}</div>

                            <div className='flex justify-around items-center'>
                                <p className="font-bold mt-2 text-cyan-800">${cost}</p>
                                <button className="font-bold mt-2 bg-purple-800 text-white px-5 py-1 rounded-md">Booking</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Tour;