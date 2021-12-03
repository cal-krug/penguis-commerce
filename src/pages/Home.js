import React from 'react';
import { Link } from "react-router-dom";
import BannerImage from '../assets/astronautGunship.jpg';
import "../styles/Home.css";


function Home() {
    return (
    <div className="home">
        <div
        className="headerContainer"
        style={{ backgroundImage: `url(${BannerImage})` }}
        >
            <h1> STAR REACT Labs </h1>
            <p> FOR CHRIST, HONOR, GLORY </p>
            <Link to="menu">
                <button> BUY PRODUCT </button>
            </Link>
        </div>
    </div>
    )
}

export default Home
