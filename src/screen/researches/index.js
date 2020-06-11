import React from "react";
import Footer from '@molecule/Footer/'
import ResearchCard from "@molecule/ResearchCard/"
import Breadcrumbs from "@atom/Breadcrumbs/"
import ReadMore from "@atom/ReadMore/"
import IntroData from "@screen/researches/section/IntroData"
import avatarImage from "@assets/img/avatar.jpg"
import { researches } from "./content.json"
import style from "@src/theme.scss"

export default function Researches() {
    return (
        <div>
            <div className="container">
                <Breadcrumbs breadcrumbs="Researches" title="Researches"/>
            </div>
            <div className="container">
                <IntroData />
            </div>
            <div className="container">
                <div className="row">
                    {researches.map(({ title, subTitle, excerpt, link, name, subject }, index) => (
                        <ResearchCard key={title + index}
                        title={title}
                        subTitle={subTitle}
                        excerpt={excerpt}
                        link={link}
                        avatar={avatarImage}
                        avatarSize="sm"
                        name={name}
                        subject={subject}
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
