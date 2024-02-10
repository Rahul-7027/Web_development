import React from 'react'
import Night from "../Images/moon.png"
import Day from "../Images/brightness.png"
const Nav = ({Home,About,Contact,Title,mode,toggleMode}) => {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{Title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">{Home}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">{About}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">{Contact}</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            {mode==="light"?<img src={Night} onClick={toggleMode} style={{height:'38px'}} alt="" />:<img src={Day} onClick={toggleMode} style={{height:'38px'}} alt="" />}
                            
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav
