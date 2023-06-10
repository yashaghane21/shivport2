import React from 'react'

import { useState } from 'react'

const Login = () => {

    const [inputs,setiInputs]=useState({
        Username:"",
        password:""
    })

    const handlesubmit = async(e)=>{
        e.preventdefault();
        try {
            const {data }= await axios.post("http://localhost:500/api/login",{
                Username:inputs.Username,
                password:inputs.password
            });
            if(data.success){
                localStorage.setItem("userid",data?.user._id)
                alert("login succsefully");

            }
            else{
                alert("email or passwoed is wrong")
            }

        } catch (error) {
            console.log(Error)
        }
    }

   const handlechange =(e)=>{
    setiInputs((prevState)=>({
        ...prevState,
        [e.target.name]:[e.target.value]
    }));
   }


    return (
                         <>

                         
                         </>

    )
}
export default Login
