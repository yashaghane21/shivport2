import React from 'react'
import Home from "./components/Home"
import Myprojects from './components/Myprojects'

import Skills from './components/Skills'
import Footer from './components/Footer'
import Nav from "./components/Nav"
import Login from "./components/Login"
import Contact from './components/Contact'


const App = () => {
  return (
    <div className='bg-slate-950 '>
   <div>
     <Nav />

    <Home />
   < Myprojects />
    <Skills />
    <Login />
    <Contact />
    <Footer />
     
</div>
    </div>
  )
  }
export default App
