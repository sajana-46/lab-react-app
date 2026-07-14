import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Addcourse from './components/Addcourse'
import Viewlab from './components/Viewlab'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Addcourse/>
    <Viewlab/>
      
    </>
  )
}

export default App
