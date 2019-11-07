import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/auth/authContext'
import ContactContext from '../../context/contacts/contactContext'
import './navbar.css'

const Navbar = () => {
    const authContext = useContext(AuthContext)
    const contactContext = useContext(ContactContext)

    const { isAuthenticated, logout, user } = authContext
    const { clearContacts } = contactContext

    const onLogout = () => {
        logout()
        clearContacts()
    }

    const authLinks = (
        <>
        <li className="nav-item"><span className="nav-link">Hello { user && user.name }</span></li>
        <li className="nav-item"><a onClick={onLogout} href="#!" className="nav-link"><i className="fas fa-sign-out-alt"></i> Logout</a></li>
        </>
    )

    const guestLinks = (
        <>
        <li className="nav-item">
        <Link to='/register' className="nav-link" >Register</Link>
        </li>
        <li className="nav-item">
        <Link to='/login' className="nav-link" >Login</Link>
        </li>
        </>
    ) 

    return (
        <>
        <nav className="navbar navbar-expand-md navbar-dark  py-2 fixed-top mb-5">
            <Link to='/' className="navbar-brand text-primary" ><i className="fas fa-id-card-alt"></i> Contact-Kepper</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
            </button>
        
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-5 ml-auto ">
                {isAuthenticated ? authLinks : guestLinks}
                <li className="nav-item">
                <Link to='/about' className="nav-link" >About</Link>
                </li>   
            </ul>
            </div>
        </nav>

        </>
    )
}

export default Navbar
