import React, { useEffect, useState } from 'react';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true);
        fetch("https://morning-coast-96153.herokuapp.com/services")
            .then(res => res.json())
            .then(data => {
                setIsLoading(false);
                setBlogs(data);
            })
    }, [])
    return (
        <div className='container my-5'>
            <h2 className='text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl text-center'>Our Blogs</h2>
            <div>
                <img src="" alt="" />
            </div>
        </div>
    );
};

export default Blogs;