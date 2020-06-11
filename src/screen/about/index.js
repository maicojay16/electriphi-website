import React from "react";
import Footer from '@molecule/Footer/'
import Breadcrumbs from "@atom/Breadcrumbs/"
import BackgroundImage from "@atom/BackgroundImage/"
import bgImage from "@assets/img/about_background.png"
import logo from "@assets/img/logo.png"
import { aboutIntro, aboutInfo } from "./content.json";
import style from "@screen/about/style.scss"

export default function About() {
    return (
        <div>
            <div className="about-body">
                <div className="container">
                    <Breadcrumbs breadcrumbs="About Us" title="About Us" />
                </div>

                {aboutIntro.map(({ title, subTitle }, index) => (
                    <BackgroundImage
                        key={title + index}
                        backgroundImage={bgImage}
                        backgroundLogo={logo}
                        title={title}
                        subTitle={subTitle}
                    />
                ))}

                {aboutInfo.map(({ title, firstParag, secondParag }, index) => (
                    <div className="container">
                        <div className="about-content" key={title + index}>
                            <h1>{title}</h1>
                            <p>{firstParag}</p>
                            <p>{secondParag}</p>
                        </div>
                    </div>
                ))}

                <BackgroundImage
                    backgroundImage={bgImage}
                />

                {aboutInfo.map(({ title, firstParag, secondParag }, index) => (
                    <div className="container">
                        <div className="about-content" key={title + index}>
                            <h1>{title}</h1>
                            <p>{firstParag}</p>
                            <p>{secondParag}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Footer className="light" />
        </div>
    );
}