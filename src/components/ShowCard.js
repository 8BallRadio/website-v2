import React from 'react'

import '../styles.css'

const ShowCard = ({ show }) => {
  return (
    <div className="show-card">
      <div className="show-date">4/20/2023</div>
      <div className="show-title">{show.showname}</div>
      <div className="show-description">{show.description}</div>
    </div>
  )
}

export default ShowCard
