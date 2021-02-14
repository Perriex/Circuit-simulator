import React from 'react'
import {Link} from "react-router-dom"
import Logo from '../Images/text.png'
import './Welcome.css'

const Welcome = () => {
    return (
        <div className="Welcome">
            <img width="220" src={Logo}/>
            <h2>Welcome To Circuit simulator</h2>
            <p>provided by:p.asadi</p>
            <Link to="/Table">go to Table</Link>
        </div>
    )
}

export default Welcome