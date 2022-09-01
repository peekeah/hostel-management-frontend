import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Sidebar.scss";

function Sidebar() {
    const navigate = useNavigate();
    return (
        <div className="sidebar">
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/update">Update</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
