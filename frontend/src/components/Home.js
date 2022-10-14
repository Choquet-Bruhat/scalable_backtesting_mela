import React from 'react'
import backtesting from "../images/bg.jpg";
import '../styles/main.css'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap';

const myStyle={
            backgroundImage:`url(${backtesting})`,
            height:'100vh',
            marginTop:'-55px',
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
                <div>
                    <Button className="btn-round mr-2" color="primary" outline style={{ margin: '1rem' }}><Link to="/login">Login</Link></Button>
                    <Button className="btn-round mr-2" color="primary" outline style={{ margin: '1rem' }}><Link to="/signup">Sign Up</Link></Button>
                </div>    
            </div>
        </div>
    )
}

export default HomePage
