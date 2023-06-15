import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Login = () => {
     const navigate =useNavigate()
    const [pass, setpass] = useState("")

    const [name, setname] = useState("")

    let dataa = {
        "Username": name,
        "password": pass

    }

    const handlesubmit = async (e) => {


        e.preventDefault();
        try {
            const { data } = await axios.post("https://shivbackend4.onrender.com/api/login", {

                Username: dataa.Username,
                password: dataa.password
            });
            console.log("Ef")
            if (data.success) {
                localStorage.setItem("userid", data?.user._id)
                alert("login succsefully");
                navigate("/msg")

            }
            else {
                alert("email or passwoed is wrong")
            }

        } catch (error) {
            console.log(Error)
        }
    }


    return (
        <div name="lg" className=' flex justify-center items-center bg-slate-950 text-white h-screen md:h-screen mt-5'>
            <div className='sm:w-1/6 h-1/4 md:w-4/6 flex justify-center items-center'>

                <form method='post' className=' p-4 border-2 w-2/3 flex justify-center flex-col items-center' onSubmit={handlesubmit} >
                    <h1 className='hover:text-cyan-500'>Login Here</h1>
                    <label>Username</label><br />
                    <input type='text' className=' border-2 rounded py-1 px-2 w-2/3 bg-cyan-950'
                        name="Useranme" placeholder=""
                        value={name} onChange={(e) => {
                            setname(e.target.value)
                        }} />


                    <label>Password</label><br />
                    <input type='password' className=' border-2 rounded py-1 px-2 w-2/3 bg-cyan-950'
                        name="password" placeholder=""
                        value={pass}
                        onChange={(e) => {
                            setpass(e.target.value)
                        }} />


                    <button className=' m-2 bg-blue-600 text-white py-1 mt-2 px-3 rounded' >Submit</button>
                </form>
            </div>
        </div>

    )
}
export default Login
