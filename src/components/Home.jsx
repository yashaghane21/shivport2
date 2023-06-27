import React from 'react'
import image from "../assets/s.png"

import { FaFacebook } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"

const Home = () => {

  const handlebtn = () => {   // for mail 
    window.location.href = "mailto:Shivajisable20@gmail.com?subject=Hello&body=Body%20of%20the%20email";

  }

  return (
    <div name="home" className='h-screen flex flex-col  sm:flex-row'>

      
<div className="ml-10 p-5 mb-2 items-end">
        <img src={image} alt='hhii' />

      </div>
      <div className='text-center font-sans text-white md:mt-[150px] p-5 md:pl-[100px]'>
        <h2 className='font-bold text-5xl  text-teal-600'>Shivaji Sable</h2>
        <h3 className='mt-2 text-2xl'>  Graphic Designer</h3>
        <p className='mt-2 p-4 '>Hello I am Passionate <span className='text-cyan-500'>Graphic Designer </span>Having a Large Skill Set ,<br />I Specailize in Creating visually Captivating Designs.     </p>

        <div className='flex items-center justify-center mt-5 space-x-3 h-5 rounded-3xl hover:text-blue-800 '>
          <a href='https://www.facebook.com/shivaji.sable1'><FaFacebook /></a>
          <a href='https://www.instagram.com/shivaji_sable20/'><FaInstagram /></a>

          <div className='  pt-2 flex items-center justify-center '>

<button onClick={handlebtn} className='bg-cyan-500  pt-2 pb-2  pr-3 pl-3 rounded hover:bg-slate-800 hover:text-white'> Message</button>

</div>


        </div>

      </div>

    


    </div>

  )

}

export default Home
