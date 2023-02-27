import React from 'react'

import '../styles.css'

const MOCK_TAGS = ['grime', 'dubstep', 'techno', 'electro', 'ambient']

const ShowCard = ({ show }) => {
  const tags = MOCK_TAGS.map((tag, index) => (
    <div className="show-tag" key={index}>
      {tag}
    </div>
  ))
  return (
    <div className="show-card">
      <img src="https://assets.technologynetworks.com/production/dynamic/images/content/364735/mxene-material-can-efficiently-mop-up-mercury-contamination-364735-1280x720.webp?cb=11899209" />
      <div className="show-date">4/20/2023</div>
      <div className="show-title">{show.showname}</div>
      <div className="show-description">{show.description}</div>
      {/* TODO: the tags should probably sit at the bottom of the container. */}
      {/* TODO: these should only be visible for archived shows. */}
      <div>{tags}</div>
    </div>
  )
}

export default ShowCard
