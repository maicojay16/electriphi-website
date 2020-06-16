import React from "react";
import Footer from '@molecule/Footer/'
import NewsCard from "@molecule/NewsCard/"
import Breadcrumbs from "@atom/Breadcrumbs/"
import ReadMore from "@atom/ReadMore/"
import coverImage from "@assets/img/news_background.png"
import IntroSection from "./section/IntroSection.js"
import { researches } from "./content.json"
import fonts from "@assets/fonts/"
import style from "@screen/news/style.scss"

export default function News() {
    return (
        <div>
            <div className="news-page">
                <div className="container">
                    <Breadcrumbs breadcrumbs="News" title="News" />
                </div>
                <div className="container">
                    <IntroSection />
                </div>
                <div className="container">
                    <div className="row">
                        {researches.map(({ title, subTitle, excerpt }, index) => (
                            <NewsCard key={title + index}
                                title={title}
                                subTitle={subTitle}
                                excerpt={excerpt}
                                cover={coverImage}
                            />
                        ))}
                    </div>
                </div>
                <div className="container">
                    <ReadMore />
                </div>
            </div>
            <Footer className="light" />
        </div>
    );
}
