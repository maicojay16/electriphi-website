import React from "react";
import breadcrumbsImage from "@assets/img/icon_breadcrumb_house.png"
import fonts from "@assets/fonts/";
import style from "./style.scss";

export default function Breadcrumbs({ breadcrumbs, title, style }) {
    return (
        <div className="breadcrumbs-content">
            <div className="breadcrumbs">
                <img class="breadcrumbs-icon" src={breadcrumbsImage} /> <sub className="link" style={style}> > {breadcrumbs}</sub>
            </div>
            <h1>{title}</h1>
        </div>
    );
}