import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "../config";
const Header = () => {
    const navigate = useNavigate();
    const logOut = () => {
        console.log("Inside Logout")
        localStorage.removeItem('token')
        axios.defaults.headers = { "Authorization": "" }
        navigate("/login", { replace: true });
    }
    return <header className="d-flex justify-content-between align-items-center p-3">
        <h1 className="text-center fs-3 logo">Home Inventory Management</h1>
        <div>
            <Link className=" ms-3" to="/" role="button">Home</Link>
            <Link className=" ms-3" to="/allpurchase" role="button">All Puchase</Link>
            <Link className=" ms-3" to="/login" role="button">Login</Link>
            <Link className=" ms-3" to="/signup" role="button">Sign Up</Link>
            <div className="ms-3" role="button" onClick={logOut}>Log Out</div>
            {/* <Link className=" ms-3" to="/additem" role="button">Add new Puchase</Link> */}
        </div>
    </header>

}

export default Header;