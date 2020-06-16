import React from "react";
import { NavLink } from "react-router-dom";
import HorizontalDivider from "@atom/HorizontalDivider/"
import fonts from "@assets/fonts/"
import style from "./style.scss";

export default function News({ title, subTitle, excerpt, cover }) {
    return (
        <div className="item">
            <div className="news-card">
                <img className="cover" src={cover} />
                <div className="news-card-content">
                    <h1 className="title">{title}</h1>
                    <h5 className="sub-title">{subTitle}</h5>
                    <HorizontalDivider />
                    <p>{excerpt}</p>
                    <NavLink to={"/"} className="read-more">
                        Read More
                    </NavLink>
                </div>
            </div>
        </div>
    );
}