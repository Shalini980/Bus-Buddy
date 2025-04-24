import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
const UserLogin = () => {
  const[email,setEmail]= useState('')
  const[password,setPassword]= useState('')
  const [userData,setUserData] = useState({})

  const submitHandler = (e) => {
    e.preventDefault();
    // Handle login logic here
    setUserData({
      email: email,
      password: password
    })
    setEmail('')   //Input dalne ke baad field khali ho jaega 
    setPassword('')
  }
  return (
    <div  className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className="w-26 mt-4" src={logo} alt="logo's photo" />
        <h1 className='text-4xl font-bold text-black text-center'>Hola, Amigos!!</h1>
        <div className='px-4 mt-6 py-2 border-2 rounded-xl border-[#d7d7d7]'>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
      <h3 className='text-lg font-medium mb-5'>Enter your Email</h3>
      <input 
      required
      value={email}
      onChange={(e)=>{setEmail(e.target.value)}}

      className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base' 
      type="email" 
      placeholder='example@email.com' />

      <h3 className='text-lg font-medium mb-5'>Enter Password</h3>
      <input 
      className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
      value={password}
      onChange={(e)=>{setPassword(e.target.value)}}
      required type="password" 
      placeholder='example123'/> 

      <button className='bg-[#111] text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg paxeholder:textbase'>
         Login</button>
      </form>
        <p className='text-center'> New here? <Link to='/signup' className='text-blue-600'> Sign up.</Link> </p>
    </div>
      </div>
    <div>
      <Link to='/captain-login' className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg paxeholder:textbase'>
      Sign in as Captain</Link>
    </div>
    </div>
  )
}

export default UserLogin