import React from 'react'
import parent from "./components/Parent"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Nav from "./components/Nav"
import Login from "./components/Login"
import Messages from './components/Messages'

const App = () => {
  return (
    <div className='bg-slate-950 '>
   <div>
   
     <BrowserRouter>
     <Nav />
     <Routes>
     <Route exact path='/msg'  element={<Messages />} /> 
     <Route exact path='/Login'  element={<Login/>} />
     <Route exact path='/' Component={parent}  />
     </Routes>
     </BrowserRouter>

 <BrowserRouter>
 <Routes>


 </Routes>

 </BrowserRouter>

     
</div>
    </div>
  )
  }
export default App
