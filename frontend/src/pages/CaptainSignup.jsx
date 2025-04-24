import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/logo.png'
import { useState } from 'react'

const CaptainSignup = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const [busno,setBusno] = useState('')
  const [plate,setPlate] = useState('')
  const [capacity,setCapacity] = useState('')
  const [userData,setUserData] = useState({})

  const submitHandler = (e) => {
    e.preventDefault(); //to prevent reloading of page
    setUserData({
      username:{
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
      busno: busno,
      plate: plate,
      capacity: capacity
    })
    console.log(userData)
        setEmail('')   //Input dalne ke baad field khali ho jaega
        setPassword('')
        setFirstName('')
        setLastName('')
        setBusno('')
        setPlate('')
        setCapacity('')
  }
  return (
    <div  className='p-7 h-screen flex flex-col justify-between'>
    <div>
      <img className="w-30 mt-4" src={logo} alt="logo's photo" />
      <h1 className='text-4xl font-bold text-black text-center'>Welcome Aboard, Captain!!</h1>
      <div className='px-4 mt-6 py-2 border-2 rounded-xl border-[#d7d7d7]'>
      <form onSubmit={(e)=>{submitHandler(e)}}>
          <h3 className='text-base font-medium mb-5'>What's your Name?</h3>
          <div className='flex gap-2'>
                <input 
                required
                className='bg-[#eeeeee] w-1/2 mb-5 rounded px-4 py-2 border  text-lg placeholder:text-base' 
                type="firstname" 
                value={firstName}
                onChange={(e)=>{setFirstName(e.target.value)}}
                placeholder='First Name' />

            <h3 className='text-lg font-medium mb-2'></h3>
                <input 
                required
                className='bg-[#eeeeee] w-1/2 mb-5 rounded px-4 py-2 border  text-lg placeholder:text-base' 
                type="lastname" 
                value={lastName}
                onChange={(e)=>{setLastName(e.target.value)}}
                placeholder='Last Name' />
          </div>

          <h3 className='text-base font-medium mb-5'>Enter your Email</h3>
          <input 
          required
          className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base' 
          type="email" 
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}
          placeholder='example@email.com' />

          <h3 className='text-base font-medium mb-5'>Enter your Bus Number</h3>
          <input 
          required
          className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base' 
          type="busno" 
          value={busno}
          onChange={(e)=>{setBusno(e.target.value)}}
          placeholder='01' />

          <h3 className='text-base font-medium mb-5'>Enter your Bus's Number Plate</h3>
          <input 
          required
          className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base' 
          type="plate" 
          value={plate}
          onChange={(e)=>{setPlate(e.target.value)}}
          placeholder='UK07 0123 4567' />

          <h3 className='text-base font-medium mb-5'>Enter your Bus's Capacity</h3>
          <input 
          required
          className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base' 
          type="capacity"
          value={capacity} 
          onChange={(e)=>{setCapacity(e.target.value)}}
          placeholder='50' />

          <h3 className='text-base font-medium mb-5'>Enter Password</h3>
          <input 
          className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
          required type="password" 
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
          placeholder='example123'/> 

          <button className='bg-[#111] text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg paxeholder:textbase'>Sign Up</button>
                  <p className='text-center'> Already Registered? <Link to='/captain-login' className='text-blue-600'> Login Here.</Link> </p>
       </form>
    </div>
      </div>
    
  <div>
      <p className='text-xs leading-tight' >By proceeding, you consent to get SMS messages from Bus-Buddy to the number provided. </p>
    <Link to='/captain-login' className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg paxeholder:textbase'>
    Sign in as Student</Link>
  </div>
  </div>
  )
}

export default CaptainSignup