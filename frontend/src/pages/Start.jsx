import React from 'react'
import logo from '../assets/logo.png'
import bgImage from '../assets/bgImage.jpg'
import bus from '../assets/bus.jpg'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div className="h-screen w-full ">
      {/* Top half */}
      <div
        className="w-full flex flex-col justify-between items-center relative bg-cover bg-center aspect-[2/2] md:aspect-[2/1]"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <img className="absolute top-4 left-4 w-16 md:w-24" src={logo} alt="logo's photo" />

        <div className="text-center px-6 mt-2 md:mt-5">
          <h1 className="text-black text-2xl md:text-4xl font-bold mb-2">Bus-Buddy</h1>
          <h2 className="text-black text-lg md:text-2xl font-bold mb-2">Your ride, always ready.</h2>
          <h3 className="text-black text-sm md:text-lg font-bold mb-3">A real-time college bus tracking web-application.</h3>
          <Link to="/login" className="inline-block bg-blue-900 hover:bg-blue-800 transition text-white py-2 px-4 md:py-3 md:px-6 rounded-3xl text-sm md:text-lg">
            Start Your Ride With BusBuddy
          </Link>
        </div>
      </div>

      {/* Bottom half with image + text side by side */}
      <div className="w-full bg-[#e9f8fd] flex flex-col md:flex-row items-center justify-center px-8 py-8 gap-8">
  {/* Image section */}
  <div className="w-full md:w-1/2 flex justify-center">
    <img src={bus} alt="bus" className="rounded-lg shadow-lg w-full h-auto object-cover" />
  </div>

  {/* Text section */}
  <div className="w-full md:w-1/2 bg-white shadow-lg px-8 py-6 rounded-lg">
    <h2 className="text-black font-bold text-3xl mb-4 text-center md:text-left">
      Experience seamless travel with real-time tracking!
    </h2>
    <p className="text-gray-700 text-center md:text-left">
      <span className="font-bold">Bus-Buddy</span> is a web application that allows you to track your college bus in real-time.
      With our user-friendly interface, you can easily find your bus location and estimated arrival time.
      No more waiting in uncertainty — stay informed and plan your journey with confidence!
      Whether you're a student or a parent, Bus-Buddy ensures a smooth and reliable travel experience.
      Join us today and never miss your bus again!
    </p>
  </div>
</div>
    </div>
  )
}

export default Start
