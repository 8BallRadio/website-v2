import React from 'react';

import {Link} from 'react-router-dom';

import Player from './Player';
import NavBar from './NavBar';

import '../../styles.css';

const Header = () => {
    return (
        <header>
            <h3><Link to='/'>8-Ball Radio</Link></h3>
            <NavBar />
            <Player url={"https://eightball.out.airtime.pro/eightball_a"}/>
        </header>
    )
};

export default Header;