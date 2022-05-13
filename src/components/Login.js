import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom"
import axios from "../config";

const Login = () => {
    const navigate = useNavigate();
    const [validationErr, setValidationErr] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({ userEmailErr: "", passwordErr: "" })

    const validateUser = (e) => {
        e.preventDefault();
        let flag = true;
        const errorSet = { userEmailErr: "", passwordErr: "" }
        if (!userEmail) {
            errorSet.userEmailErr = "Please Enter a email id."
            flag = false;
        }
        if (!password) {
            errorSet.passwordErr = "Please enter a password";
            flag = false;
        }
        setError(errorSet)
        if (flag) {
            axios.post('/user/loginuser', { userEmail, password })
                .then(response => {
                    console.log(response)
                    localStorage.setItem("token", response.data.token)
                    localStorage.setItem("userid", response.data.userId)
                    axios.defaults.headers = {
                        "Authorization": response.data.token, "UserId": response.data.userId
                    }
                    navigate("/", { replace: true });
                })
                .catch(function (err) {
                    setValidationErr(err.response.data.message)
                })

            // navigate("/", { replace: true });
        }
    }
    return <section>
        <div className="wrapper text-center login-form" >
            {validationErr &&
                <Alert variant="danger" onClose={() => setValidationErr("")} dismissible>
                    <Alert.Heading>Sorry !! </Alert.Heading>
                    <p>
                        {validationErr}
                    </p>
                </Alert>}
            <h2 className="text-center">Login</h2>
            <form onSubmit={validateUser} method="POST" noValidate>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" name="userEmail" onChange={(e) => { setUserEmail(e.target.value) }} />
                    <label className="form-label">User Email</label>
                    {error.userEmailErr && <div className="text-start ms-2 text-danger "><span>{error.userEmailErr}</span></div>}
                </div>

                <div className="form-floating mb-3">
                    <input type="password" className="form-control" name="password" onChange={(e) => { setPassword(e.target.value) }} />
                    <label className="form-label">Password</label>
                    {error.passwordErr && <div className="text-start ms-2 text-danger "><span>{error.passwordErr}</span></div>}
                </div>
                <div>
                    <input type="submit" className="btn btn-primary" value="Submit" />
                </div>
            </form>
        </div>
    </section>
}
export default Login;