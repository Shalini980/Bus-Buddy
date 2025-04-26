import React, { useState,useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'

const UserLogin = () => {
  const {user,setUser} = useContext(UserDataContext)
  const[email,setEmail]= useState('')
  const[password,setPassword]= useState('')
  const [userData,setUserData] = useState({})
  const navigate = useNavigate()

  const submitHandler = async (e) =>{
    e.preventDefault();
    
    const userData = {
      email: email,
      password: password
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData);
  
      if (response.status === 200) {
        const data = response.data;
        setUser(data.user);
        localStorage.setItem('token', data.token); // Save token
        navigate('/home');
      } else {
        console.error('Unexpected response:', response);
      }
    } catch (err) {
      console.error('Login failed:', err);
    }
  
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