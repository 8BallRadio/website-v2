import React, { useEffect } from 'react'
import ArchiveCard from '../components/ArchiveCard'
import '../styles.css'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useInView } from 'react-intersection-observer'

const Archive = () => {
  const { ref, inView } = useInView()

  const fetchData = async ({ pageParam }) => {
    const res = await fetch(
      `https://api.mixcloud.com/8ballradio/feed/?limit=20&offset=${pageParam}`,
    )
    return res.json()
  }

  const { data, status, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['shows'],
    queryFn: fetchData,
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.paging.next
    },
  })

  useEffect(() => {
    if (inView) {
      fetchNextPage()
    }
  }, [inView, fetchNextPage])

  const archiveList = data?.pages.map(sets =>
    sets.data.map((set, index) => {
      return <ArchiveCard key={index} show={set} />
    }),
  )

  if (status === 'error') {
    return <p>Error fetching data</p>
  }

  if (status === 'pending') {
    return <p>Fetching data...</p>
  }

  return (
    <div>
      <div className="content-header">archive</div>
      <>
        <div className="shows-grid">{archiveList}</div>
        <div className="show-tags-container">
          <div ref={ref}>{isFetchingNextPage}</div>
        </div>
      </>
    </div>
  )
}

export default Archive
