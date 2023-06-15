import React from 'react'
import { useState } from 'react'
import axios from "axios"



const Contact = () => {

  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [phone, setphone] = useState("")
  const [msg, setmsg] = useState("")


  const datta = {
    "Name": name,
    "Email": email,
    "Phone": phone,
    "Msg": msg
  }
  const handlesubmit = (e) => {
    e.preventDefault();
    try {
      const { data } = axios.post("https://shivbackend4.onrender.com/api/about", {

        name: datta.Name,
        email: datta.Email,
        phone: datta.Phone,
        message: datta.Msg

      })

       alert("Message send succesfully")

    } catch (error) {
      alert(error);
      console.log(error)
    }

  }
  return (
    <div name="contact">
      <div className='text-center text-5xl font-bold  font-serif  mt-20 '>
        <h3 className='text-cyan-500'>Contact Me</h3>
        </div>

      <div className='container grid-flow-col flex items-center justify-center  h-screen'>


        <form className='w-2/3 border-2 p-10' onSubmit={handlesubmit}>

          <label className='text-white m-5'>Name</label>
          <input className='pt-2 pb-2' type='text' value={name} onChange={(e) => {
            setname(e.target.value)
          }} />

          <label className='text-white m-5'>Email</label>
          <input className='pt-2 pb-2' type='text' value={email} onChange={(e) => {
            setemail(e.target.value)
          }} />

          <label className='text-white m-5'>Phone</label>
          <input className='pt-2 pb-2' type='text' value={phone} onChange={(e) => {
            setphone(e.target.value)
          }} />

          <div className='mt-5 p-5'>
            <div className='text-center'>
              <label className='text-white pb-2'>Message</label>
            </div>

            <textarea className='w-full md:h-60  sm:h-30' value={msg} onChange={(e) => {
              setmsg(e.target.value)
            }} />

          </div>
          <div className='flex items-center py-1 mt-2 px-3 rounded justify-center text-white font-sans bg-cyan-500 hover:bg-slate-950 hover:text-white  hover:border-2 p-2'>
            <button>Send </button>

          </div>


        </form>

      </div>
    </div>
  )
}

export default Contact