import React from 'react'
import { useQuery } from 'react-query'

const LiveData = () => {
  const fetchAirtimeInfo = async () => {
    const res = await fetch('https://eightball.airtime.pro/api/live-info')
    return res.json()
  }

  const { data, status } = useQuery('currentShow', fetchAirtimeInfo)

  return (
    <div>
      {status === 'error' && <p>Error fetching data</p>}
      {status === 'loading' && <p>Fetching data...</p>}
      {status === 'success' && (
        <div>
          {data.currentShow[0].name} -{data.current.name}
        </div>
      )}
    </div>
  )
}

export default LiveData
