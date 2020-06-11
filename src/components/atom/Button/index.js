import React from "react";
import { Link } from "react-router-dom";
import style from "./style.scss";

export default function Button() {
    return (
        <div className="button-container">
            <Link className="btn">Submit</Link>
        </div>
    );
}