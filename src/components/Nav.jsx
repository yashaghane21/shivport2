import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';



const Nav = () => {

    return (

        <div className=' overflow-auto font-sans '>
            <ul className=" text-white flex items-center gap-1 py-2 text-sm md:text-lg ml-2 font-sans font-bold space-x-4 pr-2  ">

                <li className='x-6 font-mono hover:text-orange-400' >
                <RouterLink to="/" >  shivaji</RouterLink>

                  
                </li>

                <li className='x-6 hover:text-cyan-600 ml-2'>
                    <ScrollLink to='home' smooth={true} duration={500}>Home</ScrollLink>
                </li>

                <li className='x-6 hover:text-cyan-600 ml-4'>
                    <ScrollLink to='myp' smooth={true} duration={500}>Projects</ScrollLink>
                </li>


                <li className='x-6 hover:text-cyan-600'>
                    <ScrollLink to='skils' smooth={true} duration={500}>Skills</ScrollLink>
                </li>
              

            
                
                <li className='x-6 hover:text-cyan-600'>
                <ScrollLink to='contact' smooth={true} duration={500}>Contact</ScrollLink>
                </li>
              
                <li className='x-6 hover:text-cyan-600'>
                <RouterLink to="/msg" >Message</RouterLink>
                </li>
               

            </ul>

        </div>

    )
}

export default Nav
