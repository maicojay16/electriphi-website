import React from "react";
import style from "./style.scss";

export default function Input({ type, placeholder, id, name }) {
    return (
        <input type={type} id={id} name={name} placeholder={placeholder} />
    );
}