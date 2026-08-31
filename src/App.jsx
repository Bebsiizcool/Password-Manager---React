import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Footer from './components/Footer'

function App() {
  

  return (
    <div>
       <Navbar/>
       <div className="">
       <Manager/>
       </div>
       <Footer/>
    </div>
  )
}

export default App
