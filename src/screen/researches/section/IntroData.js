import React from "react";
import HorizontalDivider from "@atom/HorizontalDivider/"
import Avatar from "@atom/Avatar/"
import avatarImage from "@assets/img/avatar.jpg"
import style from "@screen/researches/style.scss";

export default function IntroData() {
    return (
        <div className="section-introdata">
            <div className="section-introdata-content">
                <sub className="featured-research">
                    Featured Research
                </sub>
                <h1>Journal Title Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                <h5>Volume • Publisher • Date Published</h5>
                <HorizontalDivider style={{ borderBottom: "solid #b5b5b5 5px" }}/>
                <div className="data">
                    <Avatar size="lg spacing" avatar={ avatarImage }/>
                    <div className="info">
                        <sub>Author</sub>
                        <strong className="name">Juan Dela Cruz</strong>
                        <sub className="study">Field of study</sub>
                        <strong className="subject">Lorem Ipsum Dolore</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}