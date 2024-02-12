import React from 'react'
import Night from "../Images/moon.png"
import Day from "../Images/brightness.png"

import { Link } from "react-router-dom";
const Nav = ({ Home, About, Title, mode, toggleMode }) => {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">{Title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">{Home}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">{About}</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            {mode === "light" ? <img src={Night} onClick={toggleMode} title={"Night Active"} style={{ height: '38px' }} alt="" /> : <img src={Day} title={"Light Mode"} onClick={toggleMode} style={{ height: '38px', backgroundColor: "white", borderRadius: "14px" }} alt="" />}

                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav
