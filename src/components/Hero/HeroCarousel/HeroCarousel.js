import React, { Component } from "react";
import Slider from "react-slick";

export default class Fade extends Component {
    render() {
        const settings = {
            dots: true,
            autoplay: true,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div>
                <Slider {...settings}>
                    <div>
                        <img src="https://i.ibb.co/R9sRt3G/carousel-1.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://i.ibb.co/1rnQztg/carousel-4.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://i.ibb.co/RzCtq0q/carousel-7.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://i.ibb.co/z4m2gKx/carousel-6.jpg" alt="" />
                    </div>
                </Slider>
            </div>
        );
    }
}