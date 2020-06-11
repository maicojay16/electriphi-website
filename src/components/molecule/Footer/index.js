import React from "react";
import { Link } from "react-router-dom";
import style from "@molecule/Footer/style.scss"

export default function Footer({ className }) {
    return (
        <footer className={className}>
            <div className="container footer-data">
                <div className="copyright">
                    <sub className={className}>©2020 ELECTRIPHI. All Rights Reserved.</sub>
                </div>
                <ul>
                    <li><Link className={className} to="/">Home</Link></li>
                    <li><Link className={className} to="/news">News</Link></li>
                    <li><Link className={className} to="/team">Team</Link></li>
                    <li><Link className={className} to="/researches">Researches</Link></li>
                    <li><Link className={className} to="/about">About</Link></li>
                    <li><Link className={className} to="/feedback">Feedback</Link></li>
                    <li><Link className={className} to="/">Contact Us</Link></li>
                </ul>
            </div>
        </footer>
    );
}