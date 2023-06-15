import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'


const Messages = () => {
  const navigate = useNavigate()
 const [Messages,setmessage]=useState([])

const getallmessages =async()=>{
try {
  const response = await axios.get('https://shivbackend4.onrender.com/api/messages'); // Replace '/api/messages' with your API endpoint
      setmessage(response.data.ele);
      
 
 
     
  
} catch (error) {
  console.log(error)
}


}

useEffect(()=>{

  if(localStorage.getItem('userid')==undefined){
    alert("only admin can access this,hence Login first as admin")
    navigate("/Login")
    
  }else{
   getallmessages()
  }

},[])








  return (
    <div className='h-screen '>
    <div className='text-white bg-slate-950 mt-5  border-2  md:flex md:justify-center sm:flex sm:justify-center overflow-x-scroll '>
      <caption className=''>Messages of Clients </caption>
    <table className='border-collapse table-auto w-full'>
    <thead className='border'>
      <tr className='border'>
        <th className='border px-4 py-2'>Name</th>
        <th  className='border px-4 py-2'>Email</th>
        <th  className='border px-4 py-2'>Phone</th>
        <th  className='border px-4 py-2'>Message</th>
      </tr>
    </thead>
    <tbody>
      {Messages.map((message) => (
        <tr key={message._id} className='hover:bg-gray-50 hover:text-black border-green-600 font-bold'>
          <td className='border px-4 py-2'>{message.name}</td>
          <td className='border px-4 py-2'>{message.email}</td>
          <td className='border px-4 py-2'>{message.phone}</td>
          <td className='border px-4 py-2'>{message.message}</td>
        </tr>
      ))}
    </tbody>
  </table>
  </div>
  </div>
  )
}

export default Messages
