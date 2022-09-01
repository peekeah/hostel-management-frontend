import React from "react";
import AppBar from "@mui/material/AppBar";
import "./Navbar.scss";

function Navbar() {
    return (
        <div className="navbar">
            <div className="container">
                <div className="left">logo</div>
                <div className="right">
                <ul>
                    <li>Home</li>
                    <li>Update</li>
                </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
