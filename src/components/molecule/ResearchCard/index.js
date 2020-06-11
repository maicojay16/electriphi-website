import React from "react";
import { NavLink } from "react-router-dom";
import HorizontalDivider from "@atom/HorizontalDivider/"
import Avatar from "@atom/Avatar/"
import style from "./style.scss";

export default function ResearchCard({ title, subTitle, excerpt, avatar, avatarSize, name, subject }) {
    return (
        <div className="item">
            <div className="card">
                <h1 className="title">{title}</h1>
                <h5 className="sub-title">{subTitle}</h5>
                <HorizontalDivider style={{ margin: "20px 0 0 0" }}/>
                <p>{excerpt}</p>
                <NavLink to={"/"} className="read-more">
                    Read More
                </NavLink>
                <HorizontalDivider style={{ margin: "20px 0 0 0" }}/>
                <div className="card-bottom">
                    <Avatar avatar={avatar} size={avatarSize} />
                    <div className="info">
                        <sub>Author</sub>
                        <strong className="name">{name}</strong>
                        <sub className="study">Field of study</sub>
                        <strong className="subject">{subject}</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}