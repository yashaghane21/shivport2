import React from 'react'
import a from "../images/1.jpg"
import b from "../images/2.jpg"
import c from "../images/4.jpg"
import d from "../images/1.jpg"
import e from "../images/e.jpg"
import f from  "../images/f.jpg"

 

const Myprojects = () => {
  return (
    <>
      <div name="myp" className=' bg-slate-950 w-full'>
        <div className='text-cyan-500 text-center font-sans font-bold text-4xl '>
          <h2 className=''>My Projects</h2>
        </div>
        <div className='mt-5 p-5 space-x-8 rounded-lg flex  max-w-sm  overflow-x-auto md:max-w-md  '>
       
        
          <img src={a}/>
          <img src={b}/>
          <img  src={c}/>
          <img  src={d}/>   
          <img  src={e}/>
          <img  src={f}/>




        </div>
      </div>

    </>
  )
}

export default Myprojects
