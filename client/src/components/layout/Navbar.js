import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark py-2 fixed-top mb-5">
            <Link to='/' className="navbar-brand text-info" ><i className="fas fa-id-card-alt"></i> Contact-Kepper</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
            </button>
        
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-5 ml-auto ">
                <li className="nav-item">
                <Link to='/' className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                <Link to='/about' className="nav-link" >About</Link>
                </li>  
            </ul>
            </div>
        </nav>
        {/* <nav className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand text-info" href="#!"><i className="fas fa-id-card-alt"></i> ContactKepper</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav left">
                <li className="nav-item">
                    <a className="nav-link" href="#!">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#!">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#!">No-Disabled</a>
                </li>
                </ul>
            </div>
            </nav> */}

            <div className="container">
            <hr className="bg-light"/>
            </div>
        </>
    )
}

export default Navbar
