import React from "react";
import Footer from '@molecule/Footer/'
import { Link } from "react-router-dom";
import HorizontalDivider from "@atom/HorizontalDivider/"
import IndividualNewsCard from "@molecule/IndividualNewsCard/"
import Breadcrumbs from "@atom/Breadcrumbs/"
import fonts from "@assets/fonts/"
import style from "./style.scss"

export default function IndividualNews() {
    return (
        <div>
            <div className="container">
                <Breadcrumbs breadcrumbs="News > News Article" title="News"/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="main-content">
                    <IndividualNewsCard />
                        {/* Right Side */}
                        <div className="other-news">
                            <h1 className="intro">Other News</h1>
                            <div className="other-news-content">
                                <h1 className="title">
                                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
                                </h1>
                                <div className="lower-data">
                                    <h5 className="sub-title">Name of Author • Data Published</h5>
                                    <Link className="read-more">Read more</Link>
                                </div>
                                <HorizontalDivider style={{ margin: "10px 0 10px 0" }}/>
                            </div>
                            <div className="other-news-content">
                                <h1 className="title">
                                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
                                </h1>
                                <div className="lower-data">
                                    <h5 className="sub-title">Name of Author • Data Published</h5>
                                    <Link className="read-more">Read more</Link>
                                </div>
                                <HorizontalDivider style={{ margin: "10px 0 10px 0" }}/>
                            </div>
                            <div className="other-news-content">
                                <h1 className="title">
                                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
                                </h1>
                                <div className="lower-data">
                                    <h5 className="sub-title">Name of Author • Data Published</h5>
                                    <Link className="read-more">Read more</Link>
                                </div>
                                <HorizontalDivider style={{ margin: "10px 0 10px 0" }}/>
                            </div>
                            <div className="other-news-content">
                                <h1 className="title">
                                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
                                </h1>
                                <div className="lower-data">
                                    <h5 className="sub-title">Name of Author • Data Published</h5>
                                    <Link className="read-more">Read more</Link>
                                </div>
                                <HorizontalDivider style={{ margin: "10px 0 10px 0" }}/>
                            </div>
                            <div className="other-news-content">
                                <h1 className="title">
                                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
                                </h1>
                                <div className="lower-data">
                                    <h5 className="sub-title">Name of Author • Data Published</h5>
                                    <Link className="read-more">Read more</Link>
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
