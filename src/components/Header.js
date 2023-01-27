import React from 'react';

import {Link} from 'react-router-dom';

import Player from './Player';
import NavBar from './NavBar';

import '../styles.css';

const Header = () => {
    return (
        <header>
            <h1><Link to='/'>8 Ball Radio</Link></h1>
            <Player url={"https://eightball.out.airtime.pro/eightball_a"}/>
            <NavBar />
        </header>
    )
};

export default Header;