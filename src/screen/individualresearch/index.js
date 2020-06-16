import React from "react";
import Footer from '@molecule/Footer/'
import { Link } from "react-router-dom";
import Avatar from "@atom/Avatar/"
import HorizontalDivider from "@atom/HorizontalDivider/"
import IndividualResearchCard from "@molecule/IndividualResearchCard/"
import Breadcrumbs from "@atom/Breadcrumbs/"
import avatarImage from "@assets/img/avatar.jpg"
import style from "./style.scss"

export default function IndividualResearch() {
    return (
        <div>
            <div className="container">
                <Breadcrumbs breadcrumbs="Researches > Research Title" title="Researches"/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="main-content">
                    <IndividualResearchCard />
                    {/* Right Side */}
                    <div className="other-research">
                        <h1 className="intro">Other Researches</h1>
                        <div className="other-member-content">
                            <h1 className="title">
                                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.
                            </h1>
                            <div className="members">
                                <div className="left-side">
                                    <Avatar avatar={avatarImage} size="extra-sm" />
                                </div>
                                <div className="right-side">
                                    <h1 className="name">Juan Dela Cruz</h1>
                                    <sub className="label">Field of Study</sub>
                                    <h5 className="text">Chemical Engineering</h5>
                                </div>
                            </div>
                            <div className="members">
                                <div className="left-side">
                                    <Avatar avatar={avatarImage} size="extra-sm" />
                                </div>
                                <div className="right-side">
                                    <h1 className="name">Juan Dela Cruz</h1>
                                    <sub className="label">Field of Study</sub>
                                    <h5 className="text">Chemical Engineering</h5>
                                </div>
                            </div>
                            <HorizontalDivider style={{ margin: "10px 0 10px 0" }}/>
                        </div>
                        <div className="other-member-content">
                            <h1 className="title">
                                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.
                            </h1>
                            <div className="members">
                                <div className="left-side">
                                    <Avatar avatar={avatarImage} size="extra-sm" />
                                </div>
                                <div className="right-side">
                                    <h1 className="name">Juan Dela Cruz</h1>
                                    <sub className="label">Field of Study</sub>
                                    <h5 className="text">Chemical Engineering</h5>
                                </div>
                            </div>
                            <div className="members">
                                <div className="left-side">
                                    <Avatar avatar={avatarImage} size="extra-sm" />
                                </div>
                                <div className="right-side">
                                    <h1 className="name">Juan Dela Cruz</h1>
                                    <sub className="label">Field of Study</sub>
                                    <h5 className="text">Chemical Engineering</h5>
                                </div>
                            </div>
                            <HorizontalDivider style={{ margin: "10px 0 10px 0" }}/>
                        </div>
                        <div className="other-member-content">
                            <h1 className="title">
                                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.
                            </h1>
                            <div className="members">
                                <div className="left-side">
                                    <Avatar avatar={avatarImage} size="extra-sm" />
                                </div>
                                <div className="right-side">
                                    <h1 className="name">Juan Dela Cruz</h1>
                                    <sub className="label">Field of Study</sub>
                                    <h5 className="text">Chemical Engineering</h5>
                                </div>
                            </div>
                            <div className="members">
                                <div className="left-side">
                                    <Avatar avatar={avatarImage} size="extra-sm" />
                                </div>
                                <div className="right-side">
                                    <h1 className="name">Juan Dela Cruz</h1>
                                    <sub className="label">Field of Study</sub>
                                    <h5 className="text">Chemical Engineering</h5>
                                </div>
                            </div>
                            <HorizontalDivider style={{ margin: "10px 0 10px 0" }}/>
                        </div>
                    </div>
                    {/* Right Side */}
                    </div>
                </div>
             </div>
            <Footer className="semi-light"/>
        </div>
    );
}
