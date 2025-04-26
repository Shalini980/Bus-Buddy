import React, { useState,useContext } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'
import {UserDataContext} from '../context/UserContext'
import logo from '../assets/logo.png'

const UserSignup = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const [userData,setUserData] = useState({})

  const navigate = useNavigate()
  const {user,setUser} = useContext(UserDataContext)

  const submitHandler = async (e) => {
    e.preventDefault() //to prevent reloading of page
    const newUser={
      fullname:{
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password
    }
    
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);

      if (response.status === 201) {
        const data = response.data;
        setUser(data.user);
        localStorage.setItem('token', data.token); // Save token
        navigate('/home');
      }
    } catch (error) {
      console.error('Signup failed:', error);
      alert("Signup failed: " + (error.response?.data?.message || "Internal server error"));

    }
  }
  return (
    <div  className='p-7 h-screen flex flex-col justify-between'>
    <div>
      <img className="w-30 mt-4" src={logo} alt="logo's photo" />
      <h1 className='text-4xl font-bold text-black text-center'>Glad to be your ride! !</h1>
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

          <h3 className='text-base font-medium mb-5'>Enter Password</h3>
          <input 
          className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
          required type="password" 
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
          placeholder='example123'/> 
          

          <button className='bg-[#111] text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg paxeholder:textbase'>Create Account</button>
                  <p className='text-center'> Already Registered? <Link to='/login' className='text-blue-600'> Login Here.</Link> </p>
       </form>
    </div>
      </div>
    
  <div>
      <p className='text-xs leading-tight' >By proceeding, you consent to get SMS messages from Bus-Buddy to the number provided. </p>
    <Link to='/captain-login' className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg paxeholder:textbase'>
    Sign in as Captain</Link>
  </div>
  </div>
  )
};
export default UserSignup