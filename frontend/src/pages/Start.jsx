import React from 'react'
import logo from '../assets/logo.png'
import bgImage from '../assets/bgImage.png'
import {Link} from 'react-router-dom'

const Start = () => {
  return (
    <div>
      <div
        className="h-screen pt-8 flex flex-col items-center justify-between w-full bg-blue-50  bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <img className="w-32 mt-4" src={logo} alt="logo's photo" />

        <div className="bg-white bg-opacity-90 pb-7 py-4 px-6 rounded-lg shadow-lg mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Start Your Ride With BusBuddy</h2>
          <Link to='/login' className="flex items-center justify-center w-full bg-blue-900 hover:bg-blue-800 transition text-white py-3 rounded mt-5">Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Start
