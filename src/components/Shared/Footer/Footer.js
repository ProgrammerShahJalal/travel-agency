import React from 'react';
import logo from '../../images/logo.png';

const Footer = () => {
    return (
        <div className='bg-gray-800 text-white px-5 py-3'>
            <div className="container">
                <div className="flex justify-center items-center">
                    <div className="flex-auto w-1/4">
                        <div className="w-20 mx-auto">
                            <img className='w-20' src={logo} alt="" />
                            <h3 className='text-2xl'>JTour</h3>
                        </div>
                        <p className='footer-paragraph'>We don't want you to take burden for equipment. The expert will arrive fully equipped to do the job. If the service required additional heavy equipment you have to only pay the transportation cost which is negotiable with expert.
                        </p>
                    </div>
                    <div className="flex-auto w-1/4">
                        <h3 className='text-2xl'>Follow Us</h3>
                        {/* down arrow */}
                        <div className='w-6'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </div>
                        <div className="row">
                            <div className="footer-icon">
                                <i className="fab fa-facebook-f"></i>
                                <i className="fab fa-twitter"></i>
                                <i className="fab fa-linkedin-in"></i>
                                <i className="fab fa-google-plus-g"></i>
                            </div>
                        </div>
                    </div>
                    <div className="flex-auto w-1/4">
                        <h3 className='text-2xl'>Get Free Estimates</h3>
                        <div className="row">
                            <h2>543-132-78910</h2>
                            <p>We can confirm you that our service is best an safe ever you seen.</p>
                        </div>
                    </div>
                    <div className="flex-auto w-1/4">
                        <div className='w-32 mx-auto my-2'>
                            <h3 className='text-2xl'>Our Gallary</h3>
                        </div>
                        <div className="grid grid-cols-4">
                            <div className="flex-auto w-20">
                                <img src="https://i.ibb.co/mX9k9Vh/img-ten-150x150.jpg" alt="" />
                                <img src="https://i.ibb.co/SRDC0Cv/image-one-150x150.jpg" alt="" />
                                <img src="https://i.ibb.co/k1Z8DcD/img-eight-150x150.jpg" alt="" />
                            </div>
                            <div className="flex-auto w-20">
                                <img src="https://i.ibb.co/ngxqjg0/img-six-150x150.jpg" alt="" />
                                <img src="https://i.ibb.co/1XN9XPc/img-seven-150x150.jpg" alt="" />
                                <img src="https://i.ibb.co/689ZSmW/img-four-150x150.jpg" alt="" />
                            </div>
                            <div className="flex-auto w-20">
                                <img src="https://i.ibb.co/dt97SWH/img-five-150x150.jpg" alt="" />
                                <img src="https://i.ibb.co/8XHtq5d/image-two-150x150.jpg" alt="" />
                                <img src="https://i.ibb.co/3MvfL6b/image-three-150x150.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center last-footer'>
                <small>Copyright © 2022 All Rights Reserved by <span id="special">JTour</span></small>
            </div>
        </div>
    );
};

export default Footer;