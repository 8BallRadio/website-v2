import React from 'react'

import { Link } from 'react-router-dom'

import '../styles.css'

const MOCK_TAGS = ['grime', 'dubstep', 'techno', 'electro', 'ambient']

const ShowCard = ({ show }) => {
  const tags = MOCK_TAGS.sort().map((tag, index) => (
    <div className="show-tag" key={index}>
      {tag}
    </div>
  ))
  return (
    <>
      <Link to={show.key} relative="path">
        <div className="show-card">
          <div className="show-card-top">
            <img src="https://assets.technologynetworks.com/production/dynamic/images/content/364735/mxene-material-can-efficiently-mop-up-mercury-contamination-364735-1280x720.webp?cb=11899209" />
            <div className="show-date">4/20/2023</div>
            <div className="show-title">{show.showname}</div>
            <div className="show-description">{show.description}</div>
          </div>
          <div className="show-tags-container">{tags}</div>
        </div>
      </Link>
    </>
  )
}

export default ShowCard
