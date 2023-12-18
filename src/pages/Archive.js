import React, { useState, useEffect } from 'react'
import ArchiveCard from '../components/ArchiveCard'
import '../styles.css'

const Archive = () => {
  const [fetchError, setFetchError] = useState(null)
  const [shows, setShows] = useState(null)
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(0)

  const MIXCLOUD_API = `https://api.mixcloud.com/8ballradio/feed/?offset=${page}`

  const fetchData = async () => {
    setLoading(true)
    setFetchError(null)

    try {
      const res = await fetch(MIXCLOUD_API)
      const { data } = await res.json()

      setShows(data)
      setFetchError(null)
      console.log('data: ', data)
    } catch (error) {
      setFetchError(error)
    } finally {
      setLoading(false)
      setPage(prevPage => prevPage + 20)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <div className="content-header">archive</div>
      {fetchError && <p>{fetchError}</p>}
      {shows && (
        <>
          <div className="shows-grid">
            {shows.map((show, index) => (
              <ArchiveCard key={index} show={show} />
            ))}
          </div>
        </>
      )}
      {loading && <p>Loading</p>}
    </div>
  )
}

export default Archive
