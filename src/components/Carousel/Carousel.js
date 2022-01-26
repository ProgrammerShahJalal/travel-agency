import React, { Component } from "react";
import Slider from "react-slick";

export default class AutoPlay extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear"
        };
        return (
            <div className="my-3">
                <h2 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl text-center my-3">Recent Trips</h2>
                <Slider {...settings}>
                    <div>
                        <img src="https://i.ibb.co/R9sRt3G/carousel-1.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://i.ibb.co/Zmdh51m/carousel-2.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://i.ibb.co/prwMFSH/g-6.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://i.ibb.co/1rnQztg/carousel-4.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://i.ibb.co/DMyQgDK/carousel-5.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://i.ibb.co/z4m2gKx/carousel-6.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://i.ibb.co/RzCtq0q/carousel-7.jpg" alt="" />
                    </div>
                </Slider>
            </div>
        );
    }
}