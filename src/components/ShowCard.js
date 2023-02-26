import React from 'react'

import { Link } from 'react-router-dom'

import '../styles.css'

const ShowCard = ({ show }) => {
  return (
    <div className="showCard">
      <Link to={show.key} relative="path">
        <h3>{show.showname}</h3>
      </Link>
      <p>{show.description}</p>
    </div>
  )
}

export default ShowCard
