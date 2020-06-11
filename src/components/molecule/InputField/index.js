import React from "react";
import Input from "@atom/Input/"
import style from "./style.scss";

export default function InputField({ type, name, labelFor, label }) {
    return (
       <div className="input-field">
            <Input name={name} type={type} />
            <label for={labelFor} className="active">{label}</label>
       </div>
    );
}