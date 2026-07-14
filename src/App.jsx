import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Addcourse from './components/Addcourse'
import Viewlab from './components/Viewlab'
import Navigationbar from './components/Navigationbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
            


      <Route path='/' element={<Addcourse/>} />
      <Route path='/view' element={<Viewlab/>} />

    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
