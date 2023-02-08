import React from 'react';

import NavLink from './NavLink';

import { useAuth } from '../contexts/Auth';

const NavBar = () => {
    
    const { user } = useAuth();

    return(
        <div className="navbar">
            {user 
                ? <NavLink to ="/dashboard"> Dashboard </NavLink>
                : <NavLink to ="/login"> Login </NavLink>}
            <NavLink to="about"> About </ NavLink>
            <NavLink to="archive"> Archive </ NavLink>
            <NavLink to="events"> Events </ NavLink>
            <NavLink to="schedule"> Schedule </NavLink> 
        </div>
    )
}

export default NavBar;