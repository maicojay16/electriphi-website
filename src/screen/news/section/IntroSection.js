import React from "react";
import { NavLink } from "react-router-dom";
import HorizontalDivider from "@atom/HorizontalDivider/"
import coverImage from "@assets/img/news_background.png"
import { ChevronRightIcon } from "@icons"
import { intro } from "../content.json"
import style from "@screen/news/style.scss"

export default function IntroSection() {
    return (
        <div>
            {intro.map(({ title, subTitle, excerpt }, index) => (
                <div className="item full-width" key={title + index}>
                    <div className="full-news-card">
                        <img className="full-cover" src={coverImage} />
                        <div className="news-card-content">
                            <h1 className="title">{title}</h1>
                            <h5 className="sub-title">{subTitle}</h5>
                            <HorizontalDivider />
                            <p>{excerpt}</p>
                            <NavLink to={"/"} className="read-more">
                                Read More <ChevronRightIcon />
                            </NavLink>
                        </div>
                    </div>
                </div>
            ))} 
        </div>
    );
}
