import React from 'react'
import { Link } from 'react-router-dom'

const LoggedInLinks = () => {
    return (
        <>
            <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active" to="/create_recipe">Create Recipes</Link>
            </li>
            <li className="nav-item">
                <a className="nav-link active" href="#" onClick={()=>{logout()}}>Log Out</a>
            </li>
        </>
    )
}

const LoggedOutLinks = () => {
    return (
        <>
            <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active" to="/signup">Sign Up</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active" to="/login" >Login</Link>
            </li>

        </>
    )
}
