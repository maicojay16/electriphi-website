import React from "react";
import style from "./style.scss";

export default function Avatar({ avatar, style, size='sm' }) {
    return (
        <img id="avatar" src={avatar} style={style} className={size} />
    );
}