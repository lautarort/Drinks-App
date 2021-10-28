import React from 'react'

import { Link } from 'react-router-dom';

import './Landing.css'

function Landing() {


    return (
        <div className='landing_container'>
            <h1 className= 'drinks_text'>DRINKS</h1>
        <h1 className= 'welcome_text'>¿SOS MAYOR DE 18 AÑOS?</h1>
        <button className='button_home'><Link to='/home' className='link_text'> SI </Link></button>
        <button className='button_home'>NO</button>
        </div>
    )
}

export default Landing