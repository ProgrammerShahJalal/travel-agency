import React from 'react';

const Blog = ({ blog }) => {
    const { title, img, expense, rating } = blog;
    return (
        <div>
            <h2>{title}</h2>
        </div>
    );
};

export default Blog;