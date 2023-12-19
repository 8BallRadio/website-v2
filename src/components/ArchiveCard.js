import React from 'react'

import { Link } from 'react-router-dom'

import '../styles.css'

// const MOCK_DATE = '4/20/2023'
// const MOCK_IMAGE =
//   'https://assets.technologynetworks.com/production/dynamic/images/content/364735/mxene-material-can-efficiently-mop-up-mercury-contamination-364735-1280x720.webp?cb=11899209'
// const MOCK_TAGS = ['grime', 'dubstep', 'techno', 'electro', 'ambient']

const ArchiveCard = ({ show }) => {
  const MIXCLOUD_URL = 'https://mixcloud.com'
  const dateConvertHelper = date => {
    const formattedDate = new Date(date)
    const year = formattedDate.getFullYear()
    const month = formattedDate.getMonth() + 1
    const day = formattedDate.getDate()
    return `${month}/${day}/${year}`
  }
  const tags = show.cloudcasts[0].tags.sort().map((tag, index) => (
    <div className="show-tag" key={index}>
      {tag.name}
    </div>
  ))

  return (
    <>
      <Link to={`${MIXCLOUD_URL}${show.cloudcasts[0].key}`} relative="path">
        <div className="show-card">
          <div className="show-card-top">
            <img src={show.cloudcasts[0].pictures.large} className="show-image" />
            <div className="show-date">{dateConvertHelper(show.cloudcasts[0].created_time)}</div>
            <div className="show-title">{show.cloudcasts[0].name}</div>
            <div className="show-description">{show.cloudcasts[0].name}</div>
          </div>
          <div className="show-tags-container">{tags}</div>
        </div>
      </Link>
    </>
  )
}

export default ArchiveCard
