import React from "react";
import { Link } from "react-router-dom"
import style from "./style.scss";

export default function PartnershipCard({ avatar, title, excerpt, website, college, smart }) {
    return (
        <div className="item-3">
           <div className="card-partnership">
                <img className="company-logo" src={avatar} />
                <div className="data">
                    <h5 className="title">{title}</h5>
                    <p className="excerpt">{excerpt}</p>
                    <sub className="role">Official Website</sub>
                    <h5 className="url"><Link>{website}</Link></h5>
                    <sub className="role">College of Chemical Engineering</sub>
                    <h5 className="role-name">{college}</h5>
                    <sub className="role">Smart Electronic Materials Laboratory</sub>
                    <h5 className="role-name">{smart}</h5>
                </div>
           </div>
        </div>
    );
}