import React from 'react'

import Logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer>
      <div className="footer-column-end">
        <img src={Logo} />
      </div>
      <div className="footer-column-center">
        Voted listeners’ Choice Best Online Radio Station in North America - Mixcloud Online Radio
        Awards 2018.
      </div>
      <div className="footer-column-end">
        <div className="footer-link">community</div>
        <div className="footer-link">zines</div>
        <div className="footer-link">TV</div>
        <div className="footer-link">merch</div>
        <div className="footer-link">volunteer</div>
      </div>
    </footer>
  )
}

export default Footer
