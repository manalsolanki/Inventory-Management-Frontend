import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "../config";
const Header = () => {
    const navigate = useNavigate();
    const logOut = () => {
        console.log("Inside Logout")
        localStorage.removeItem('token')
        localStorage.removeItem('userid')
        axios.defaults.headers = { "Authorization": "" }
        navigate("/login", { replace: true });
    }
    return <header className="d-md-flex justify-content-between align-items-center p-3">
        <h1 className="text-center fs-3 logo">Home Inventory Management</h1>
        <div className="text-center justify-content-center">
            {localStorage.getItem('token') &&
                <div className="d-flex ">
                    <Link className="" to="/" role="button">Home</Link>
                    <Link className="  ms-3" to="/allpurchase" role="button">All Puchase</Link>
                    <div className=" header-link ms-3" role="button" onClick={logOut}>Log Out</div>
                </div>
            }
            {!localStorage.getItem('token') && <div>
                <Link className="" to="/login" role="button">Login</Link>
                <Link className=" ms-3" to="/signup" role="button">Sign Up</Link>
            </div>
            }

            {/* <Link className=" ms-3" to="/additem" role="button">Add new Puchase</Link> */}
        </div>
    </header>

}

export default Header;