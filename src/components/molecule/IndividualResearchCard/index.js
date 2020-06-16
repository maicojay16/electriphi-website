import React from "react";
import HorizontalDivider from "@atom/HorizontalDivider/"
import Avatar from "@atom/Avatar/"
import avatarImage from "@assets/img/avatar.jpg"
import style from "./style.scss";

export default function IndividualResearchCard() {
    return (
        <div className="individual-research-container">
            <div className="item-2">
                <div className="card">
                    <div className="card-top-solo">
                        <div className="card-left">
                            <h1 className="title">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </h1>
                            <div className="upper-data">
                                <div className="left">
                                    <sub className="label">Volume</sub>
                                    <h5 className="text">Volume VII</h5>
                                    <sub className="label">Featured In</sub>
                                    <h5 className="text">Chemical Engineering Daily</h5>
                                </div>
                                <div className="right">
                                    <sub className="label">Date of Publication</sub>
                                    <h5 className="text">May 21, 2020</h5>
                                    <sub className="label">Publisher</sub>
                                    <h5 className="text">Diliman Publishing House</h5>
                                </div>
                            </div>
                           
                            <HorizontalDivider style={{ margin: "20px 0 30px 0" }}/>
                        </div>
                    </div>
                    <div className="card-bottom-solo">
                        <div className="lower-data">
                           <div className="content">
                                <Avatar avatar={avatarImage} size="extra-sm"/>
                                <div className="data">
                                    <h5 className="name">Dr. Jose Gabriel Buenavilla</h5>
                                    <sub className="label">Field of Study</sub>
                                    <h5 className="text">Chemical Engineering</h5>
                                </div>
                           </div>
                           <div className="content">
                                <Avatar avatar={avatarImage} size="extra-sm"/>
                                <div className="data">
                                    <h5 className="name">Dr. Jose Gabriel Buenavilla</h5>
                                    <sub className="label">Field of Study</sub>
                                    <h5 className="text">Chemical Engineering</h5>
                                </div>
                           </div>
                        </div>
                        <div className="abstract">
                            <h3 className="subTitle">Abstract</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}