import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const TourDetails = () => {
    let { id } = useParams();

    const [tourDetails, setTourDetails] = useState([])
    useEffect(() => {
        fetch('https://mighty-chamber-44774.herokuapp.com/tours')
            .then(res => res.json())
            .then((data) => {
                const foundTour = data.filter(detail => detail._id == id)
                console.log(foundTour);
                setTourDetails(foundTour);
            })
    }, [id])

    const { name, img, cost, description, category } = tourDetails[0] || {};

    return (
        <div className='max-w-md overflow-hidden md:max-w-2xl mx-auto my-5'>
            <div className="md:shrink-0 rounded-xl shadow-lg p-5 bg-white">
                <img className="h-auto w-full object-cover md:h-full md:w-full rounded-md" src={img} alt='' />
                <h2 className='text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl text-center my-5'>{name}</h2>
                <div className='flex justify-around items-center'>
                    <p className="font-bold mt-2 text-cyan-900">Total Cost: ${cost}</p>
                    <p className="font-bold mt-2 text-white bg-purple-700 px-4 rounded-md">Category: {category} days</p>
                </div>
                <div>
                    <p className='text-justify'>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TourDetails;