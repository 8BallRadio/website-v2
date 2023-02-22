import React, { useState } from 'react'
import LiveData from './LiveData'

import pauseSVG from '../../assets/pause-fill.svg'
import playSVG from '../../assets/play.svg'

const Player = ({ url }) => {
  const [audio] = useState(new Audio(url))
  const [volume, setVolume] = useState(1)
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
    isPlaying ? audio.pause() : audio.play()
  }

  const changeVolume = value => {
    setVolume(value)
    audio.volume = value
  }

  const PlayButton = () => {
    return <img src={playSVG} alt="Play" width="32" height="32" />
  }

  const PauseButton = () => {
    return <img src={pauseSVG} alt="Pause" width="32" height="32" />
  }

  return (
    <div className="audioPlayer">
      <LiveData />
      <section>
        <input
          type="range"
          min={0}
          max={1}
          step={0.02}
          value={volume}
          onChange={event => {
            changeVolume(event.target.valueAsNumber)
          }}
        />
      </section>
      <button onClick={togglePlayPause}>
        {isPlaying ? <PauseButton /> : <PlayButton />}
      </button>
    </div>
  )
}

export default Player
