import React from 'react'

import Player from './Player'
import NavBar from './NavBar'

import '../../styles.css'

const Header = () => {
  return (
    <header>
      <Player url={'https://eightball.out.airtime.pro/eightball_a'} />
      <NavBar />
    </header>
  )
}

export default Header
