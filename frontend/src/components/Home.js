import React, { Component } from 'react'
import backtesting from "../images/bg.jpg";
import '../styles/main.css'
import { Link } from 'react-router-dom'

const myStyle={
            backgroundImage:`url(${backtesting})`,
            height:'100vh',
            marginTop:'-70px',
            fontSize:'50px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            };
const HomePage=()=>{
    return(
        <div class="home" style={myStyle}>
            <div className="welcome_content">
                <h1>Welcome to Mela Assistant Trader</h1>
                <p>Scalable Backtesting Infrastructure</p>
            </div>
        </div>
    )
}

export default HomePage
