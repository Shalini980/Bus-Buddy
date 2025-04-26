import React from 'react'

const VechilePanel = (props) => {
  return (
    <div>
        <h5 className='p-3 text-center w-[90%] absolute top-0 ' onClick={()=>{
            props.setVechilePanel(false)
        }}><i className="text-3xl text-gray-400 ri-arrow-drop-down-line"></i></h5>
              <h3 className='text-4xl font-bold mb-2'>Select your Bus</h3>
              <div onClick={()=>{
                props.setConfirmRidePanel(true)
              }} className='flex border-2 border-gray-300 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between'>
                  <img className='h-12' src ="https://th.bing.com/th/id/OIP.oRfBSGPGjvPVUh8SyVvJ-gHaGM?w=860&h=720&rs=1&pid=ImgDetMain"></img>
                  <div className='ml-2 w-1/2'>
                    <h4 className='font-medium text-lg'>BusNO : 57 <span><i className="ri-map-pin-user-line"></i></span></h4>
                    <h5 className='font-medium text-sm'>Arriving in 15 min</h5>
                    <p className='font-normal text-xs'>27 Seat Available currently</p>
                  </div>
              </div>
              <div onClick={()=>{
                props.setConfirmRidePanel(true)
              }} className='flex border-2 border-gray-300 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between'>
                  <img className='h-12' src ="https://th.bing.com/th/id/OIP.IvF6kMA2utOwOkMrRukZ3gHaFq?rs=1&pid=ImgDetMain"></img>
                  <div className='ml-2 w-1/2'>
                    <h4 className='font-medium text-lg'>BusNO : 23 <span><i className="ri-map-pin-user-line"></i></span></h4>
                    <h5 className='font-medium text-sm'>Arriving in 43 min</h5>
                    <p className='font-normal text-xs'>60 Seat Available currently</p>
                  </div>
              </div>
              <div onClick={()=>{
                props.setConfirmRidePanel(true)
              }} className='flex border-2 border-gray-300 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between'>
                  <img className='h-12' src ="https://th.bing.com/th/id/OIP.oRfBSGPGjvPVUh8SyVvJ-gHaGM?w=860&h=720&rs=1&pid=ImgDetMain"></img>
                  <div className='ml-2 w-1/2'>
                    <h4 className='font-medium text-lg'>BusNO : 19 <span><i className="ri-map-pin-user-line"></i></span></h4>
                    <h5 className='font-medium text-sm'>Already Departed</h5>
                    <p className='font-normal text-xs'>Not Available Anymore</p>
                  </div>
            </div>
    </div>
  )
}

export default VechilePanel