import React, { useState } from "react";
import axios from "../config";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [error, setError] = useState({ fnameErr: "", lanmeErr: "", emailErr: "", passwordErr: "", repasswordErr: "" })
    const [resErr, setResErr] = useState("");
    const validateUseDetails = (e) => {
        e.preventDefault();
        let flag = true;
        // Validation of email it should have @ and .
        const regularExpEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
        // validation for Password : length should be 7-16 , should have one special character , one digit and alphabets
        const regularExpPassword = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[@#%\*\-+=~\[\]{}<>\?].*).{7,16}$/
        const errorSet = { fnameErr: "", lanmeErr: "", emailErr: "", passwordErr: "", repasswordErr: "" }
        if (!firstName) {
            errorSet.fnameErr = "Please enter a first Name";
            flag = false;
        }
        if (!lastName) {
            errorSet.lanmeErr = "Please enter a last Name";
            flag = false;
        }
        if (!email) {
            errorSet.emailErr = "Please enter the email";
            flag = false;
        }
        else if (!(email.match(regularExpEmail))) {
            errorSet.emailErr = "Please enter a valid email address .";
            flag = false;
        }
        if (!password) {
            errorSet.passwordErr = "Please enter a password."
            flag = false;
        }
        else if (!(password.match(regularExpPassword))) {
            errorSet.passwordErr = "Password should be 7-16 character long,  should have one special character , one digit and alphabets."
        }
        if (!rePassword) {
            errorSet.repasswordErr = "Please enter the password again.";
            flag = false;
        }
        else if (!(rePassword === password)) {
            errorSet.repasswordErr = "Please enter the same password";
            flag = false;
        }
        setError(errorSet);
        if (flag) {
            const newData = { first_name: firstName, last_name: lastName, email: email, password: password };
            const response = axios.post('/user/adduser', newData)
                .then(function (response) {
                    navigate("/login", { replace: true });
                })
                .catch(function (error) {
                    setResErr(error.response.data.message);
                });

        }
    }

    return <section>
        <div className="wrapper text-center login-form" >
            {resErr &&
                <Alert variant="danger" onClose={() => setResErr("")} dismissible>
                    <Alert.Heading>Sorry ! Please try again</Alert.Heading>
                    <p>
                        {resErr}
                    </p>
                </Alert>}
            <h2 className="text-center">Sign Up </h2>
            <form method="POST" onSubmit={validateUseDetails} noValidate>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" name="firstName" onChange={(e) => { setFirstName(e.target.value) }} />
                    <label className="form-label"> First Name</label>
                    {error.fnameErr && <div className="text-start ms-2 text-danger "><span>{error.fnameErr}</span></div>}
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" name="lastName" onChange={(e) => { setLastName(e.target.value) }} />
                    <label className="form-label"> Last Name</label>
                    {error.lanmeErr && <div className="text-start ms-2 text-danger "><span>{error.lanmeErr}</span></div>}
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" name="Email" onChange={(e) => { setEmail(e.target.value) }} />
                    <label className="form-label"> Email</label>
                    {error.emailErr && <div className="text-start ms-2 text-danger "><span>{error.emailErr}</span></div>}
                </div>

                <div className="form-floating mb-3">
                    <input type="password" className="form-control" name="password" onChange={(e) => { setPassword(e.target.value) }} />
                    <label className="form-label">Password</label>
                    {!error.passwordErr && <div className="text-start ms-2 fw-lighter smallFont"><span>Should be 6-17 long, with one special character,number and alphabets</span></div>}
                    {error.passwordErr && <div className="text-start ms-2 text-danger "><span>{error.passwordErr}</span></div>}
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" name="rePassword" onChange={(e) => { setRePassword(e.target.value) }} />
                    <label className="form-label">Renter the Password</label>
                    {error.repasswordErr && <div className="text-start ms-2 text-danger "><span>{error.repasswordErr}</span></div>}
                </div>
                <div>
                    <input type="submit" className="btn btn-primary" value="Submit" />
                </div>
            </form>
        </div>
    </section>
}
export default SignUp;