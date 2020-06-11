import React from "react";
import { HouseIcon } from "@icons/"
import style from "./style.scss";

export default function Breadcrumbs({ breadcrumbs, title, style }) {
    return (
        <div className="breadcrumbs-content">
            <div className="breadcrumbs">
            <HouseIcon /> <sub className="link" style={style}>> {breadcrumbs}</sub>
            </div>
            <h1>{title}</h1>
        </div>
    );
}