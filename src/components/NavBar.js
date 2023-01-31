import React from 'react';

import NavLink from './NavLink';

const NavBar = () => {

    return(
        <div className="navbar">
            <NavLink to="about"> About </ NavLink>
            <NavLink to="archive"> Archive </ NavLink>
            <NavLink to="events"> Events </ NavLink>
            <NavLink to="schedule"> Schedule </NavLink> 
        </div>
    )
}

export default NavBar;