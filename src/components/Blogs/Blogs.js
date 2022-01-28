import React, { useEffect, useState } from 'react';
import Blog from './Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch("https://mighty-chamber-44774.herokuapp.com/blogs")
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
                {
                    blogs.map(blog => <Blog key={blog._id} blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;