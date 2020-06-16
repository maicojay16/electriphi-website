import React from "react";
import Footer from '@molecule/Footer/'
import { Link } from "react-router-dom";
import Avatar from "@atom/Avatar/"
import HorizontalDivider from "@atom/HorizontalDivider/"
import IndividualTeamCard from "@molecule/IndividualTeamCard/"
import Breadcrumbs from "@atom/Breadcrumbs/"
import avatarImage from "@assets/img/avatar.jpg"
import style from "./style.scss"

export default function IndividualTeam() {
    return (
        <div>
            <div className="container">
                <Breadcrumbs breadcrumbs="Team > Juan Dela Cruz" title="Team"/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="main-content">
                    <IndividualTeamCard />
                    {/* Right Side */}
                    <div className="other-member">
                        <h1 className="intro">Get to know other members</h1>
                        <div className="other-member-content">
                            <div className="members">
                                <div className="left-side">
                                    <Avatar avatar={avatarImage} size="sm" />
                                </div>
                                <div className="right-side">
                                    <h1 className="name">Juan Dela Cruz</h1>
                                    <sub className="role-label">Role/ Position</sub>
                                    <h5 className="role">Project Manager</h5>
                                    <sub className="role-label">Highest Educational Attainment</sub>
                                    <h5 className="role">M.S. Chemical Engineering</h5>
                                    <Link className="read-more">Know Juan More</Link>
                                </div>
                            </div>
                            <HorizontalDivider style={{ margin: "10px 0 10px 0" }}/>
                        </div>
                        <div className="other-member-content">
                            <div className="members">
                                <div className="left-side">
                                    <Avatar avatar={avatarImage} size="sm" />
                                </div>
                                <div className="right-side">
                                    <h1 className="name">Juan Dela Cruz</h1>
                                    <sub className="role-label">Role/ Position</sub>
                                    <h5 className="role">Project Manager</h5>
                                    <sub className="role-label">Highest Educational Attainment</sub>
                                    <h5 className="role">M.S. Chemical Engineering</h5>
                                    <Link className="read-more">Know Juan More</Link>
                                </div>
                            </div>
                            <HorizontalDivider style={{ margin: "10px 0 10px 0" }}/>
                        </div>
                        <div className="other-member-content">
                            <div className="members">
                                <div className="left-side">
                                    <Avatar avatar={avatarImage} size="sm" />
                                </div>
                                <div className="right-side">
                                    <h1 className="name">Juan Dela Cruz</h1>
                                    <sub className="role-label">Role/ Position</sub>
                                    <h5 className="role">Project Manager</h5>
                                    <sub className="role-label">Highest Educational Attainment</sub>
                                    <h5 className="role">M.S. Chemical Engineering</h5>
                                    <Link className="read-more">Know Juan More</Link>
                                </div>
                            </div>
                            <HorizontalDivider style={{ margin: "10px 0 10px 0" }}/>
                        </div>
                        <div className="other-member-content">
                            <div className="members">
                                <div className="left-side">
                                    <Avatar avatar={avatarImage} size="sm" />
                                </div>
                                <div className="right-side">
                                    <h1 className="name">Juan Dela Cruz</h1>
                                    <sub className="role-label">Role/ Position</sub>
                                    <h5 className="role">Project Manager</h5>
                                    <sub className="role-label">Highest Educational Attainment</sub>
                                    <h5 className="role">M.S. Chemical Engineering</h5>
                                    <Link className="read-more">Know Juan More</Link>
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
