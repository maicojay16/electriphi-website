import React from "react";
import Footer from '@molecule/Footer/'
import PartnershipCard from "@molecule/PartnershipCard/"
import Breadcrumbs from "@atom/Breadcrumbs/"
import UPLogo from "@assets/img/logo_partnerships_upd.png"
import { partners } from "./content.json"
import style from "./style.scss"

export default function Partnership() {
    return (
        <div className="partnership-page">
             <div className="container">
                <Breadcrumbs breadcrumbs="Partnership" title="Partnership" />
            </div>
            <div className="container">
               <div className="row">
                    {partners.map(({ title, excerpt, website, college, smart }, index) => (
                        <PartnershipCard key={name + index}
                            avatar={UPLogo}
                            title={title}
                            excerpt={excerpt}
                            website={website}
                            college={college}
                            smart={smart}
                        />
                    ))} 
               </div>
            </div>
            <Footer className="light" />
        </div>
    );
}