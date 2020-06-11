import React from "react";
import avatarImage from "@assets/img/avatar.jpg"
import Avatar from "@atom/Avatar/"
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { ChevronRightIcon, ChevronLeftIcon } from "@icons";
import style from "@molecule/TeamSlider/style.scss"


function NextArrow({ className, onClick }) {
    return (
        <ChevronRightIcon onClick={onClick} className={className}/>
    );
}
function PrevArrow({ className, onClick }) {
    return (
        <ChevronLeftIcon onClick={onClick} className={className}/>
    );
}
export default function TeamSlider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow className="next"/>,
        prevArrow: <PrevArrow className="prev" />
    };
    return (
        <div>
            <Slider {...settings}>
                <div className="slider-content">
                    <div className="left-content">
                        <div className="name">
                            <sub className="label">Name</sub>
                            <p className="data">Juan Dela Cruz</p>
                        </div>
                        <div className="role">
                            <sub className="label">Role / Position</sub>
                            <p className="data">Project Manager</p>
                        </div>
                        <div className="education">
                            <sub className="label">Highest Educational Attainment</sub>
                            <p className="data">M.S. Chemical Engineering</p>
                        </div>
                        <div className="research">
                            <sub className="label">Previous Research</sub>
                            <p className="data">A numerical study on two-phase core-annular<br /> flows of waxy crude oil/water in inclined pipes.</p>
                        </div>
                        <Link>Know Juan More</Link>
                    </div>
                    <Avatar avatar={avatarImage} size="extra-lg spacing" />
                </div>
                <div className="slider-content">
                    <div className="left-content">
                        <div className="name">
                            <sub className="label">Name</sub>
                            <p className="data">Juan Dela Cruz</p>
                        </div>
                        <div className="role">
                            <sub className="label">Role / Position</sub>
                            <p className="data">Project Manager</p>
                        </div>
                        <div className="education">
                            <sub className="label">Highest Educational Attainment</sub>
                            <p className="data">M.S. Chemical Engineering</p>
                        </div>
                        <div className="research">
                            <sub className="label">Previous Research</sub>
                            <p className="data">A numerical study on two-phase core-annular<br /> flows of waxy crude oil/water in inclined pipes.</p>
                        </div>
                        <Link>Know Juan More</Link>
                    </div>
                    <Avatar avatar={avatarImage} size="extra-lg spacing" />
                </div>
            </Slider>
        </div>
    );
}
