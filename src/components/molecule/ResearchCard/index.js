import React from "react";
import { Link } from "react-router-dom";
import HorizontalDivider from "@atom/HorizontalDivider/"
import Avatar from "@atom/Avatar/"
import style from "./style.scss";

export default function ResearchCard({ title, subTitle, excerpt, avatar, name, volume, featured, date, publisher, field }) {
    return (
        <div className="item-3">
            <div className="card-research">
                <div className="card-top-solo">
                    <div className="card-left">
                        <h1 className="title">{title}</h1>
                        <div className="upper-data">
                            <div className="left">
                                <sub className="label">Volume</sub>
                                <h5 className="text">{volume}</h5>
                                <sub className="label">Featured In</sub>
                                <h5 className="text">{featured}</h5>
                            </div>
                            <div className="right">
                                <sub className="label">Date of Publication</sub>
                                <h5 className="text">{date}</h5>
                                <sub className="label">Publisher</sub>
                                <h5 className="text">{publisher}</h5>
                            </div>
                        </div>
                        
                        <HorizontalDivider style={{ margin: "20px 0 30px 0" }}/>
                    </div>
                </div>
                <div className="card-bottom-solo">
                    <div className="lower-data">
                        <div className="content">
                            <Avatar avatar={avatar} size="extra-sm"/>
                            <div className="data">
                                <h5 className="name">{name}</h5>
                                <sub className="label">Field of Study</sub>
                                <h5 className="text">{field}</h5>
                            </div>
                        </div>
                        <div className="content">
                            <Avatar avatar={avatar} size="extra-sm"/>
                            <div className="data">
                                <h5 className="name">{name}</h5>
                                <sub className="label">Field of Study</sub>
                                <h5 className="text">{field}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="abstract">
                        <h3 className="subTitle">{subTitle}</h3>
                        <p>{excerpt}</p>
                        <Link className="read-more"> Read More </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}