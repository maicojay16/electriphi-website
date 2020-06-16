import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "@assets/img/logo.png"
import { MenuIcon as Menu, CloseIcon, AccountCircleIcon } from "@icons"
import style from "../Header/style.scss"

const openNav = () => (
    document.getElementById("sideNav").style.width = "300px"
)

const closeNav = () => (
    document.getElementById("sideNav").style.width = "0"
)

export default function Header() {
    return (
        <div className="navbar-fixed">
             <nav>
                <div className="nav-wrapper container">
                    <NavLink to={"/"} className="logo">
                        <img src={logo} />
                    </NavLink>
                    <Link className="menu" onClick={openNav}><Menu /></Link>
                </div>
            </nav>
            <div id="sideNav" className="header-sidenav">
                <Link className="closebtn" onClick={closeNav}><CloseIcon/></Link>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/news">News</Link></li>
                    <li><Link to="/team">Team</Link></li>
                    <li><Link to="/researches">Researches</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/feedback">Feedback</Link></li>
                    <li><Link to="/partnership">Partnership</Link></li>
                    <li><Link to="/">Contact Us</Link></li>
                    <li className="userRegister"><Link><AccountCircleIcon/>Login/Register</Link></li>
                </ul>
            </div>
        </div>
    );
}