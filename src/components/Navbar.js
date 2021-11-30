import React from 'react'
import Logo from '../assets/Tux.svg';
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css';

function Navbar() {
    return (
    <div className="navbar">
        <div className="leftside">
            <img className="logo" src={ Logo } />
        </div>
        <div className="rightside">
            <Link to="/"> Home</Link>
            <Link to="/shop"> Shop</Link>
            <Link to="/about"> About</Link>
            <Link to="/contact"> Contact</Link>
            <button className="hamburger-menu">
                <ReorderIcon className="hamburger-menu" />
            </button>
        </div>
    </div>
    )
}

export default Navbar
