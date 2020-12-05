import React from 'react';
import { useHistory } from 'react-router-dom';
import logo from './Logo.png';
import './Navbar.css';

const NavBar = () => {
    const history = useHistory();
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <img onClick={()=>history.push('/')} className="brand-logo" src={logo} alt="" />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <p onClick={()=>history.push('/')} className="nav-page">Home</p>
                    </li>
                    <li className="nav-item">
                        <p className="nav-page">About</p>
                    </li>
                    <li className="nav-item">
                        <p className="nav-page">Service</p>
                    </li>
                    <li className="nav-item">
                        <p className="nav-page">Concerns</p>
                    </li>
                    <li className="nav-item">
                        <p className="nav-page">Event</p>
                    </li>
                    <li className="nav-item">
                        <p className="nav-page">Contact</p>
                    </li>
                    <li className="nav-item">
                        {sessionStorage.getItem('name') ? <p onClick={()=>history.push('/bookinglist')} className="nav-page">{sessionStorage.getItem('name')}</p> : <button onClick={()=>history.push('/login')} className="nav-page btn">Login</button>}
                    </li>

                </ul>
            </div>
        </nav>
    );
};

export default NavBar;