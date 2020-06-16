import React from "react";
import { Link } from "react-router-dom"
import Footer from '@molecule/Footer/'
import Breadcrumbs from "@atom/Breadcrumbs/"
import BackgroundImage from "@atom/BackgroundImage/"
import bgImage1 from "@assets/img/about-1.png"
import bgImage2 from "@assets/img/about-2.png"
import partnerImage from "@assets/img/graphic_about_partnership.png"
import logo from "@assets/img/icon_about-us_electriphi.png"
import { aboutIntro } from "./content.json";
import style from "@screen/about/style.scss"

export default function About() {
    return (
        <div className="about-page">
            <div className="about-body">
                <div className="container">
                    <Breadcrumbs breadcrumbs="About Us" title="About Us" />
                </div>

                {aboutIntro.map(({ title, subTitle }, index) => (
                    <BackgroundImage
                        key={title + index}
                        backgroundImage={bgImage2}
                        backgroundLogo={logo}
                        title={title}
                        subTitle={subTitle}
                    />
                ))}

                <div className="container">
                    <div className="about-content-first">
                        <div className="data">
                            <h1>Lorem ipsum dolor sit amet.</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu odio ut sem nulla pharetra. Risus in hendrerit gravida rutrum quisque non tellus orci ac. Facilisis mauris sit amet massa vitae tortor. Pellentesque id nibh tortor id aliquet lectus proin. Elit ullamcorper dignissim cras tincidunt lobortis feugiat.</p>
                        </div>
                        <img className="about-content-img" src={bgImage1} />
                    </div>
                    <div className="about-content-second">
                        <div className="data">
                            <h1>Lorem ipsum dolor sit amet.</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu odio ut sem nulla pharetra. Risus in hendrerit gravida rutrum quisque non tellus orci ac. Facilisis mauris sit amet massa vitae tortor. Pellentesque id nibh tortor id aliquet lectus proin. Elit ullamcorper dignissim cras tincidunt lobortis feugiat.</p>
                        </div>
                        <img className="about-content-img" src={bgImage2} />
                    </div>
                </div>
                <Link to="/partnership" className="link-to-partnership">
                    <img className="partner-link" src={partnerImage} />
                </Link>
                <div className="container">
                    <div className="about-content-first">
                        <div className="data">
                            <h1>Lorem ipsum dolor sit amet.</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu odio ut sem nulla pharetra. Risus in hendrerit gravida rutrum quisque non tellus orci ac. Facilisis mauris sit amet massa vitae tortor. Pellentesque id nibh tortor id aliquet lectus proin. Elit ullamcorper dignissim cras tincidunt lobortis feugiat.</p>
                        </div>
                        <img className="about-content-img" src={bgImage1} />
                    </div>
                    <div className="about-content-second">
                        <div className="data">
                            <h1>Lorem ipsum dolor sit amet.</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu odio ut sem nulla pharetra. Risus in hendrerit gravida rutrum quisque non tellus orci ac. Facilisis mauris sit amet massa vitae tortor. Pellentesque id nibh tortor id aliquet lectus proin. Elit ullamcorper dignissim cras tincidunt lobortis feugiat.</p>
                        </div>
                        <img className="about-content-img" src={bgImage2} />
                    </div>
                </div>

            </div>
            <Footer className="light" />
        </div>
    );
}