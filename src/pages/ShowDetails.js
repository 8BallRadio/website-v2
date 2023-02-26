import React, { useEffect, useState } from 'react'

import { useParams, useNavigate } from 'react-router-dom'

import supabase from '../config/supabaseClient'

import { useAuth } from '../contexts/Auth'

import '../styles.css'

const ShowDetails = () => {
  // const [show, setShow] = useState(null)
  const { showKey } = useParams()
  const history = useNavigate()

  // User data
  const { user } = useAuth()

  // Show data
  const [showname, setShowname] = useState('')
  const [description, setDescription] = useState('')
  const [owners, setOwners] = useState(null)
  const [setLoading] = useState(true)

  useEffect(() => {
    fetchShowDetails()
    verifyUser()
  }, [user])

  const fetchShowDetails = async () => {
    const { data, error } = await supabase.from('shows').select().eq('key', showKey).single()

    if (error) {
      // Redirect if show does not exist
      // TODO: Add alert to inform user if show DNE
      history('/')
    } else {
      console.log(data)

      setOwners(data.users)
      setShowname(data.showname)
      setDescription(data.description)
    }
  }

  const verifyUser = async () => {
    try {
      setLoading(true)

      if (user == null) {
        return
      }
      const { data, error, status } = await supabase
        .from('profiles')
        .select('username, website, avatar_url, shows')
        .eq('id', user?.id)
        .single()

      if (error && status !== 406) {
        throw Error
      }

      if (data) {
        setOwners()
      }
    } catch (error) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleClick = event => {
    console.log('we out here')
  }

  return (
    <div className={'contentContainer pushFromTop'}>
      <h2>{showname}</h2>
      <p>{description}</p>
      {!owners ? <></> : <button onClick={event => handleClick(event)}>Create a set</button>}
    </div>
  )
}

export default ShowDetails
