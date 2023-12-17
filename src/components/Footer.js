import React from 'react'

import Logo from '../assets/logo.png'

const makeFooterLinkData = (title, link) => {
  return {
    title,
    link,
  }
}

// TODO: these links should be updated.
const FOOTER_LINK_DATA = [
  makeFooterLinkData('community', 'http://8balltv.club/'),
  makeFooterLinkData('zines', 'http://8balltv.club/'),
  makeFooterLinkData('TV', 'http://8balltv.club/'),
  makeFooterLinkData('merch', 'https://8ballmarket.com/'),
  makeFooterLinkData('volunteer', 'http://8balltv.club/'),
]

const Footer = () => {
  const footerLinkContent = FOOTER_LINK_DATA.map((data, index) => (
    <div className="footer-link" key={index}>
      <a href={data.link}>{data.title}</a>
    </div>
  ))
  return (
    <footer>
      <div className="footer-column-left">
        <img src={Logo} />
      </div>
      <div className="footer-column-center">
        Voted listeners’ Choice Best Online Radio Station in North America - Mixcloud Online Radio
        Awards 2018.
      </div>
      <div className="footer-column-right">{footerLinkContent}</div>
    </footer>
  )
}

export default Footer
