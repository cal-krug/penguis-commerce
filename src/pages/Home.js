import React from 'react';
import { Link } from "react-router-dom";
import BannerImage from '../assets/astronautGunship.jpg';
import "../styles/Home.css";


function Home() {
    return (
    <div className="home"
    style={{ backgroundImage: `url(${BannerImage})` }}
    >
        <div
        className="headerContainer">
            <h1> REACTion Labs </h1>
            <p> FOR CHRIST, HONOR, GLORY </p>
            <Link to="menu">
                <button> BUY PRODUCT </button>
            </Link>
        </div>
    </div>
    )
}

export default Home
