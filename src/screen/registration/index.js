import React from "react";
import Breadcrumbs from "@atom/Breadcrumbs/"
import Button from "@atom/Button/"
import InputField from "@molecule/InputField/"
import Footer from '@molecule/Footer/'
import style from "./style.scss"

export default function Registration() {
    return (
        <div>
            <div className="registration-page">
                <div className="container">
                    <Breadcrumbs breadcrumbs="Registration" style={{ color: "#fff" }} />
                </div>
                <div className="container">
                    <div className="registration-content">
                        <div className="left-content">
                            <h1>Registration</h1>
                            <p>Complete your account set up by providing<br /> your proper login and biography info.</p>
                        </div>
                        <div className="right-content">
                            <div className="right-content-body">
                                <div className="section">
                                    <h1 className="title">Tell us about yourself</h1>
                                    <InputField type="text" name="username" labelFor="username" label="Username" />
                                    <InputField type="text" name="firstname" labelFor="firstname" label="Firstname" />
                                    <InputField type="text" name="lastname" labelFor="lastname" label="Lastname" />
                                    <InputField type="password" name="createpassword" labelFor="createpassword" label="Create Password" />
                                </div>
                                <div className="section">
                                    <h1 className="title">How can we reach you?</h1>
                                    <InputField type="text" name="email" labelFor="email" label="Email" />
                                    <InputField type="text" name="mobile" labelFor="mobile" label="Mobile No." />
                                    <InputField type="text" name="landline" labelFor="landline" label="Landline" />
                                </div>
                                <div className="section">
                                    <h1 className="title">Where do you live?</h1>
                                    <InputField type="text" name="street" labelFor="street" label="Street" />
                                    <InputField type="text" name="district" labelFor="district" label="District" />
                                    <InputField type="text" name="city" labelFor="city" label="City" />
                                    <InputField type="text" name="province" labelFor="province" label="Province" />
                                    <InputField type="text" name="zipcode" labelFor="zipcode" label="Zip Code" />
                                </div>
                                <Button />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer className="dark"/>
        </div>
    );
}