import React, { Component } from 'react'
import  './nav.css'
class Nav extends Component {
    render() {
        return (

            <React.Fragment>
                <nav className="navbar navbar-expand-lg  custom-bg fixed-top">
                    <div className="container">
                        <a className="navbar logo " href="#">eNno</a>
                        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fas fa-bars fa-1x menuIcon"></i>
                        </button>
                        <div className="collapse navbar-collapse " id="navbarNav">
                            <ul className="navbar-nav ms-auto px-5">
                                <li className="nav-item ">
                                    <a className="nav-link active px-3 first-nav" aria-current="page" href="#homeSection">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link px-3" href="#aboutSection">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link px-3" href="#serviceSection">Service</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link px-3" href="#portfolioSection">Portfolio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link px-3" href="#teamSection">Team</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle main px-3" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Drop down 
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledBy="navbarDropdownMenuLink">

                                        <li><a className="dropdown-item pt-3 px-4" href="#">Drop down 1</a></li>

                                        <li> <a className="dropdown-item pt-3 px-4" href="#">Deep drop down &raquo; </a>
                                            <ul className="dropdown-menu dropdown-subMenu">
                                                <li><a className="dropdown-item pt-3 px-4" href="#">Deep Drop down 1</a></li>
                                                <li><a className="dropdown-item pt-3 px-4" href="#">Deep Drop down 2</a></li>
                                                <li><a className="dropdown-item pt-3 px-4" href="#">Deep Drop down 3</a></li>
                                                <li><a className="dropdown-item pt-3 px-4" href="#">Deep Drop down 4</a></li>
                                                <li><a className="dropdown-item pt-3 px-4" href="#">Deep Drop down 5</a></li>
                                            </ul>
                                        </li>

                                        <li><a className="dropdown-item pt-3 px-4" href="#">Drop down 2</a></li>
                                        <li><a className="dropdown-item pt-3 px-4" href="#">Drop down 3</a></li>
                                        <li><a className="dropdown-item pt-3 px-4" href="#">Drop down 4</a></li>

                                    </ul>
                                </li>
                                
                                <li className="nav-item">
                                    <a className="nav-link px-3" href="#contactSection">Contact</a>
                                </li>
                                <div className="mx-4">
                                    <button className="btn btn-outline-secondary px-4 py-1 custom-nav-button">Get Started</button>
                                </div>
                                
                            </ul>
                        </div>
                    </div>
                </nav>
            </React.Fragment>


        )
    }
}

export default Nav
