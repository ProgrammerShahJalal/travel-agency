import React from 'react';
import logo from '../../images/logo.png';

const Footer = () => {
    return (
        <div className='bg-gray-800 text-white px-8 py-3'>
            <div className="md:flex-row flex justify-center items-center sm:flex-col">
                <div className="w-1/4 shrink">
                    <div className="w-20 mx-auto">
                        <img className='w-20' src={logo} alt="" />
                        <h3 className='text-2xl self-start'>JTour</h3>
                    </div>
                    <p className='text-left'>Amazing Tours a Best tour Operator and Travel agent in the world. We are Tour Package, Hotel booking and air ticket agency.World Tours & travel agency.
                    </p>
                </div>

                <div className="w-1/4 shrink">
                    <div className='w-36 mx-auto'>
                        <h3 className='text-2xl'>Follow Us</h3>
                    </div>
                    {/* down arrow */}
                    <div className='w-36 mx-auto'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                    <div className="flex gap-3 mt-2 w-36 mx-auto">
                        <i className="cursor-pointer fab fa-facebook-f"></i>
                        <i className="cursor-pointer fab fa-twitter"></i>
                        <i className="cursor-pointer fab fa-linkedin-in"></i>
                        <i className="cursor-pointer fab fa-google-plus-g"></i>
                    </div>
                </div>

                <div className="w-1/4 shrink">
                    <h3 className='text-2xl'>Contact Info</h3>
                    <div className='md:w-2/3'>
                        <h2>543-132-78910</h2>
                        <p>Our service is best an safe ever you seen to assure you happy journey.</p>
                    </div>
                </div>

                <div className="w-1/4 shrink">
                    <div className='w-32 mx-auto my-2'>
                        <h3 className='text-2xl'>Recent Trips</h3>
                    </div>
                    <div className="grid grid-cols-3 gap-2 sm:grid-cols-1">

                        <img className='rounded' src="https://i.ibb.co/nMzwKMq/g-1.jpg" alt="" />
                        <img className='rounded' src="https://i.ibb.co/vq062YK/g-2.jpg" alt="" />
                        <img className='rounded' src="https://i.ibb.co/dp1DzMR/g-3.jpg" alt="" />
                        <img className='rounded' src="https://i.ibb.co/9Wdjd4Y/g-4.jpg" alt="" />
                        <img className='rounded' src="https://i.ibb.co/F73QSk8/g-5.jpg" alt="" />
                        <img className='rounded' src="https://i.ibb.co/RD8Qycf/g-6-1.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className='text-center last-footer'>
                <small>Copyright © 2022 All Rights Reserved by <span className='text-orange-500 hover:italic cursor-pointer'>JTour</span></small>
            </div>
        </div>
    );
};

export default Footer;