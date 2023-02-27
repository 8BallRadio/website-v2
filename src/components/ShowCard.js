import React from 'react'

import '../styles.css'

const ShowCard = ({ show }) => {
  return (
    <div className="show-card">
      <img src="https://assets.technologynetworks.com/production/dynamic/images/content/364735/mxene-material-can-efficiently-mop-up-mercury-contamination-364735-1280x720.webp?cb=11899209" />
      <div className="show-date">4/20/2023</div>
      <div className="show-title">{show.showname}</div>
      <div className="show-description">{show.description}</div>
    </div>
  )
}

export default ShowCard
