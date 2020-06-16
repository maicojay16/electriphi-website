import React from "react";
import Footer from '@molecule/Footer/'
import Breadcrumbs from "@atom/Breadcrumbs/"
import ReadMore from "@atom/ReadMore/"
import TeamSlider from "@molecule/TeamSlider/"
import TeamCard from "@molecule/TeamCard/"
import avatarImage from "@assets/img/avatar.jpg"
import { teamdata } from "./content.json"
import style from "./style.scss"


export default function Team() {
    return (
        <div>
            <div className="container">
                <Breadcrumbs breadcrumbs="Team" title="Team"/>
            </div>
            <div className="container">
               <div className="slider-content-container">
                    <TeamSlider />
               </div>
            </div>
            <div className="container">
               <div className="row">
                    {teamdata.map(({  name, role, education, research, subTitle, excerpt }, index) => (
                        <TeamCard key={name + index}
                        name={name}
                        role={role}
                        education={education}
                        research={research}
                        subTitle={subTitle}
                        excerpt={excerpt}
                        avatar={avatarImage}
                        />
                    ))} 
               </div>
            </div>
            <div className="container">
               <ReadMore />
            </div>
            <Footer className="semi-light"/>
        </div>
    );
}
