import React from 'react'
import { Link } from "react-scroll"



const Nav = () => {

    return (

        <div className=' overflow-auto font-sans '>
            <ul className=" text-white flex items-center gap-1 py-2 text-sm md:text-lg ml-2 font-sans font-bold space-x-4 pr-2  ">

                <li className='x-6 font-mono hover:text-orange-400' >

                    shivaji
                </li>

                <li className='x-6 hover:text-cyan-600 ml-2'>
                    <Link to='home' smooth={true} duration={500}>Home</Link>
                </li>

                <li className='x-6 hover:text-cyan-600 ml-4'>
                    <Link to='myp' smooth={true} duration={500}>Projeects</Link>
                </li>


                <li className='x-6 hover:text-cyan-600'>
                    <Link to='skills' smooth={true} duration={500}>Skills</Link>
                </li>





            </ul>

        </div>

    )
}

export default Nav
