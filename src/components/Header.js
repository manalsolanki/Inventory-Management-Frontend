import React from "react";
import { Link } from "react-router-dom";
function Header() {
    return <header className="d-flex justify-content-between align-items-center p-3">
        <h1 className="text-center fs-3 logo">Home Inventory Management</h1>
        <div>
            <Link className=" ms-3" to="/" role="button">Home</Link>
            <Link className=" ms-3" to="/allpurchase" role="button">All Puchase</Link>
            {/* <Link className=" ms-3" to="/additem" role="button">Add new Puchase</Link> */}
        </div>
    </header>

}

export default Header;