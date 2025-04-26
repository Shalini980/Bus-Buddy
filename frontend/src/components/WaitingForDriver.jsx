import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
        <h5
        className="p-1 text-center w-[93%] absolute top-0" onClick={() => {
            props.setWaitingForDriver(false)
            }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      
      <div className='flex items-center justify-center'>
        <img className ='h-10' src="https://th.bing.com/th/id/OIP.oRfBSGPGjvPVUh8SyVvJ-gHaGM?w=860&h=720&rs=1&pid=ImgDetMain"/>
        <div className='text-right'>
            <h2 className='text-lg'>Subhash Pal</h2>
            <h4 className = 'text-xl font-semibold -mt-2'>UK07 AB 2098</h4>
            <p className='text-sm text-gray-600'>College bus</p>
        </div> 
      </div>

      <div className='flex gap-2 justify-between flex-col items-center'>
        <img className='h-20' src="https://th.bing.com/th/id/OIP.oRfBSGPGjvPVUh8SyVvJ-gHaGM?w=860&h=720&rs=1&pid=ImgDetMain" alt=""/>
      <div className='w-full mt-5'>
            <div className='flex items-center gap-5 border-2 border-gray-300'>
            <i className="ri-map-pin-user-fill"></i>
            <div>
                <h3 className='text-lg font-medium'>562/11-7</h3>
                <p className='text-sm -mt-1 text-gray-600'>Clement town, Dehradun, Uttarakhand</p>
            </div>
            </div>

            <div className='flex items-center gap-5 border-2 border-gray-300'>
            <i className="ri-id-card-fill"></i>
            <div>
                <h3 className='text-lg font-medium'>Subhash Pal</h3>
                <p className='text-sm -mt-1 text-gray-600'>Contact no: 892********</p>
            </div>
            </div>

            <div className='flex items-center gap-5 border-2 border-gray-300'>
            <i className ="text-lg ri-map-pin-2-line"></i>
            <div>
                <h3 className='text-lg font-medium'>Route</h3>
                <p className='text-sm -mt-1 text-gray-600'>Clock tower to Clement town</p>
            </div>
            </div>
      </div>
        <button onClick={()=>{
          props.setVehicleFound(true)
          props.setConfirmRidePanel(false)
        }} className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>Confirm</button>
      </div>
    </div>
  )
}

export default WaitingForDriver