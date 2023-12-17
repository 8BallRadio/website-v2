import React from 'react'

import Player from './Player'
import NavBar from './NavBar'
import Logo from '../../assets/logo.png'

import '../../styles.css'
import NavLink from './NavLink'

const Header = () => {
  return (
    <header>
      <NavLink to="/">
        <img src={Logo} style={{ width: '20%' }} />
      </NavLink>
      <Player url={'https://eightball.out.airtime.pro/eightball_a'} />
      <NavBar />
    </header>
  )
}

export default Header
