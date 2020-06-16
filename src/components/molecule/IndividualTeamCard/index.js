import React from "react";
import HorizontalDivider from "@atom/HorizontalDivider/"
import Avatar from "@atom/Avatar/"
import avatarImage from "@assets/img/avatar.jpg"
import style from "./style.scss";

export default function IndividualTeamCard() {
    return (
        <div className="individual-team-container">
            <div className="item-2">
                <div className="card">
                    <div className="card-top-solo">
                        <div className="card-left">
                            <h1 className="name">Juan Dela Cruz</h1>
                            <sub className="role-label">Role/ Position</sub>
                            <h5 className="role">Project Manager</h5>
                            <sub className="role-label">Highest Educational Attainment</sub>
                            <h5 className="role">M.S. Chemical Engineering</h5>
                            <HorizontalDivider style={{ margin: "10px 0 10px 0" }}/>
                            <h3 className="subTitle">About Juan</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <Avatar avatar={avatarImage} size="extra-lg" />
                    </div>
                    <div className="card-bottom-solo">
                        <div className="">
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