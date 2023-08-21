import React from 'react'
import ae from "../assets/ae.png"
import ad from "../assets/ad.png"
import ps from "../assets/pr.png"
import lr from "../assets/lr.png"
import PS from "../assets/PS1.png"
const Skills = () => {
  return ( 
    <>
    <div  name="skils" className='bg-slate-950 h-100 text-cyan-500 p-5  gap-4  text-center font-sans text-4xl font-bold  max-w-full'>
       <h2>My skills</h2>
    
    <div className='mt-5 space-x-8 rounded-md  overflow-scroll flex md:overflow-x-auto w-full '> 
         
        <img src={ad} className='rounded-md max-w-sm'/>
        <img src={ae} className='rounded-md max-w-sm'/>
        <img src={ps} className='rounded-md max-w-sm'/>
        <img src={lr} className='rounded-md max-w-sm'/>
        <img src={PS} className='rounded-md max-w-sm'/>

       </div>
       </div>
       </>
  )
}

export default Skills 
