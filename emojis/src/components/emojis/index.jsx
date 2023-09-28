import React from 'react'
import "./index.css"
import { createContext } from 'react'

const Emojis = ({currentMood, compliments, setCompliments, setCurrentMood}) => {

  return (
    <div>
      <h2>Current Mood: <span className='emoji'>{currentMood}</span> </h2>
    </div>
  )
}

export default Emojis
