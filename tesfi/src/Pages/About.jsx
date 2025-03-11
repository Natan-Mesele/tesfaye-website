import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const About = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // Adjust speed as necessary
        arrows: false, // If you don't want navigation arrows
    };

    return (
        <section id="home" className="relative w-full">
            <Slider {...settings} className="h-full">
                <div className="w-full lg:h-[80vh]">
                    <img
                        className="w-full h-full object-cover"
                        src="https://z-p3-scontent.fadd1-1.fna.fbcdn.net/v/t1.6435-9/169071844_3817223531679076_5867760248704401295_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE8azJRbvqEzfYfWgvFKhkZic3R4M_rc9mJzdHgz-tz2YvE0az8fWxhEZ_LvxlhGO8myVCkxUeUBwS3OAJryLmQ&_nc_ohc=VC1alQ-tii0Q7kNvgHnpElM&_nc_oc=AdgeRkumcfbY1-0CbgeljFBpVEpl0GpWJKEakQn-g0WbbIX_1JOjkY7jaT00WBlhyP4&_nc_zt=23&_nc_ht=z-p3-scontent.fadd1-1.fna&_nc_gid=AdFE8ppPOT7iEsoOE8gVwaa&oh=00_AYEbeAyagUhd9mzU25vxStcpYfzhW6QNRP_sb_eAkUi-nA&oe=67F6A0AC"
                        alt="Slide 1"
                    />
                </div>
                <div className="w-full h-full lg:h-[80vh]">
                    <img
                        className="w-full h-full object-cover"
                        src="https://images.unsplash.com/photo-1564585222527-c2777a5bc6cb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Slide 2"
                    />
                </div>
                <div className="w-full h-full lg:h-[80vh]">
                    <img
                        className="w-full h-full object-cover"
                        src="https://plus.unsplash.com/premium_photo-1663051238732-d6246f747dab?q=80&w=1423&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DD"
                        alt="Slide 3"
                    />
                </div>
                <div className="w-full h-full lg:h-[80vh]">
                    <img
                        className="w-full h-full object-cover"
                        src="https://plus.unsplash.com/premium_photo-1733688152977-010b9755ac0b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Slide 3"
                    />
                </div>
            </Slider>
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center text-white px-4 md:px-12 lg:px-24 pt-18">
                <h1 className="text-3xl md:text-6xl font-bold mb-4 text-gray-100 lg:text-5xl">
                    Dr. Tesfaye Belachew
                </h1>
                <p className="text-lg md:text-xl mb-4 text-gray-100 font-bold">
                    A popular figure in the Evangelical Church of Mekane Yesus in Ethiopia. He is a well-respected theologian and educator.
                </p>
                <p className="text-lg md:text-xl mb-6 text-gray-100 font-bold">
                    Founder of Diakonia, a Spiritual College in Hawassa City, dedicated to training future leaders in the faith.
                </p>
                <button className="py-2 px-6 bg-blue-500 hover:bg-blue-700 text-white rounded-lg cursor-pointer font-bold">
                    Learn More
                </button>
            </div>
        </section>
    );
};

export default About;
