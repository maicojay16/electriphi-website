import React from "react";
import Footer from '@molecule/Footer/'
import Breadcrumbs from "@atom/Breadcrumbs/"
import Button from "@atom/Button/"
import InputField from "@molecule/InputField/"
import { LocationOnIcon, EmailIcon, CallIcon, AttachmentIcon } from "@icons"
import fonts from "@assets/fonts/"
import style from "./style.scss"


function updateList() {
    var input = document.getElementById('file');
    var output = document.getElementById('fileList');
  
    output.innerHTML = '<ul>';
    for (var i = 0; i < input.files.length; ++i) {
      output.innerHTML += '<li>' + input.files.item(i).name + '</li>';
    }
    output.innerHTML += '</ul>';
}

function uploadItem() {
    document.getElementById('file').click()
}

export default function Feedback() {
    return (
        <div>
            <div className="feedback-page">
                <div className="container">
                    <Breadcrumbs breadcrumbs="Feedback" style={{ color: "#616161" }} />
                </div>
                <div className="container">
                    <div className="registration-content">
                        <div className="left-content">
                            <h1>Get in touch.</h1>
                            <p className="subTitle">You can reach us through the following<br /> contact details.</p>
                            <div className="details">
                                <EmailIcon />
                                <p>hello@electriphi.com</p>
                            </div>
                            <div className="details">
                                <CallIcon />
                                <p>(632) 9123 - 456 - 789</p>
                            </div>
                            <div className="details">
                                <LocationOnIcon />
                                <p>
                                    ElectriPHI, University of the Philippines <br />
                                C.P. Garcia Avenue, Diliman <br />
                                Quezon City 1101
                            </p>
                            </div>
                        </div>
                        <div className="right-content">
                            <div className="right-content-body">
                                <div className="section">
                                    <div className="intro">
                                        <h1>We would love to hear from you.</h1>
                                        <p>Just send us a message in the form below with any <br />questions you have.</p>
                                    </div>
                                    <InputField type="text" name="firstname" labelFor="firstname" label="Firstname" />
                                    <InputField type="text" name="lastname" labelFor="lastname" label="Lastname" />
                                    <InputField type="text" name="lastname" labelFor="lastname" label="Email" />
                                    <InputField type="text" name="lastname" labelFor="lastname" label="Description" />
                                    <InputField type="text" name="lastname" labelFor="lastname" label="Type your message" />
                                    <div className="file-upload">
                                        <div className="upload-item">
                                            <sub>Insert File/s</sub>
                                            <AttachmentIcon onClick={uploadItem} />
                                            <input type="file" name="file" id="file" multiple onChange={updateList}  style={{ display: "none" }}/>
                                        </div>
                                    </div>
                                    <div className="uploaded-items">
                                        <div id="fileList"></div>
                                    </div>
                                </div>
                                <Button />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer className="light" />
        </div>
    );
}