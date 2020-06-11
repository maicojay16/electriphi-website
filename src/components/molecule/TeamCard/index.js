import React from "react";
import { NavLink } from "react-router-dom";
import HorizontalDivider from "@atom/HorizontalDivider/"
import Avatar from "@atom/Avatar/"
import style from "@molecule/TeamCard/style.scss";

export default function TeamCard({ avatar, name, role, education, research, subTitle, excerpt }) {
    return (
        <div className="item">
            <div className="card">
                <div className="card-header">
                    <Avatar avatar={avatar} size="md spacing" />
                    <div className="card-info">
                        <div className="name">
                            <sub className="label">Name</sub>
                            <p className="data">{name}</p>
                        </div>
                        <div className="role">
                            <sub className="label">Role / Position</sub>
                            <p className="data">{role}</p>
                        </div>
                        <div className="education">
                            <sub className="label">Highest Educational Attainment</sub>
                            <p className="data">{education}</p>
                        </div>
                        <div className="research">
                            <sub className="label">Previous Research</sub>
                            <p className="data">{research}</p>
                        </div>
                    </div>
                </div>
                <HorizontalDivider style={{ margin: "20px 0 20px 0" }}/>
                <h5 className="sub-title">{subTitle}</h5>
                <p>{excerpt}</p>
                <NavLink to={"/"} className="read-more">
                    Read More
                </NavLink>
            </div>
        </div>
    );
}