import React from "react";
import { NavLink } from "react-router-dom";
import style from "./style.scss"

export default function ReadMore() {
    return (
        <div className="more full-width">
            <NavLink to={"/"}>
                Read More 
            </NavLink>
        </div>
    );
}
