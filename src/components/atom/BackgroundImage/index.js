import React from "react";
import style from "./style.scss"

export default function BackgroundImage({ backgroundImage, backgroundLogo, title, subTitle }) {
    return (
        <div>
            <div className="header">
                <img className="about-background" src={backgroundImage} />
                <div className="header-content">
                    <div className="header-info">
                        <img className="background-logo" src={backgroundLogo} />
                        <h3>{title}</h3>
                        <p>{subTitle}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}