import { useState } from 'react'

import './App.css'
import Emojis from './components/emojis'
import ComplimentButton from './components/complimentButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Emojis/>
      <ComplimentButton/>
    </>
  )
}

export default App
