'use strict';
import React, { useState } from "react";
import Routes from "./Routes.js";
import jQuery from 'jquery';

// Frontend rendering of Navbar on all pages - should be rendering inside index.js alongside whatever 'page' it is on.
function siteNav(props) {
    return (
        < div style = {{ width: "auto" }}>>
        <nav className="navbar">
                <div className="container-fluid">

                <ul className="nav navbar-nav ml-auto">
                    <li className="nav-item" role="presentation"><a className="nav-link active" style={{ color: "#ffffff" }} href="./home"><i className="site-home"></i>&nbsp;Home</a></li>
                    </ul>
                    </div>
            </nav>
            <Routes />
    </div>
    )
}

export default siteNav;