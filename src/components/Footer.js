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
  makeFooterLinkData('community', 'https://8ballcommunity.club/'),
  makeFooterLinkData('zines', 'https://8ball-library.club'),
  makeFooterLinkData('TV', 'http://8balltv.club/'),
  makeFooterLinkData('merch', 'https://8ballmarket.com/'),
  makeFooterLinkData('volunteer', 'https://8ballcommunity.club/VOLUNTEER-WITH-US'),
]

const Footer = () => {
  const footerLinkContent = FOOTER_LINK_DATA.map((data, index) => (
    <div className="footer-link" key={index}>
      <a href={data.link}>{data.title} target="_blank"</a>
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
