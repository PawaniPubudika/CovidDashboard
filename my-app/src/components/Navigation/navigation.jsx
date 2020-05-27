import React from 'react';
// import styles from './.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import { render } from '@testing-library/react';



const Navigation=()=>{

    return(
        <nav className="navbar sticky-top navbar-light bg-light">
        <a className="navbar-brand" href="#">COVID-19 Live Situational Analysis Dashboard</a>
        </nav>

    )
}

export default Navigation