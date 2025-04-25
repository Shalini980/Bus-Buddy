import React from 'react'

const LocationSearchPanel = () => {
  return (
    <div>
      <div className='flex gap-4 items-center my-4 justify-start'>
        <h2 className='bg-[#eee] h-8 mx-1 flex items-center justify-center w-12 rounded-full'>
          <i className="ri-map-pin-fill"></i>
        </h2>
        <h4>Shimla Bypass Road, Vikasnagar, Dehra Dun, Uttarakhand</h4>
      </div>

      <div className='flex gap-4 items-center my-4 justify-start'>
        <h2 className='bg-[#eee] h-8 mx-1 flex items-center justify-center w-12 rounded-full'>
          <i className="ri-map-pin-fill"></i>
        </h2>
        <h4>Clock Tower Paltan Bazaar Road, Dehra Dun, Uttarakhand</h4>
      </div>

      <div className='flex gap-4 items-center my-4 justify-start'>
        <h2 className='bg-[#eee] h-8 mx-1 flex items-center justify-center w-12 rounded-full'>
          <i className="ri-bus-fill"></i>
        </h2>
        <h4>ISBT, Bus Station, Dehradun</h4>
      </div>

      <div className='flex gap-4 items-center my-4 justify-start'>
        <h2 className='bg-[#eee] h-8 mx-1 flex items-center justify-center w-12 rounded-full'>
          <i className="ri-school-line"></i>
        </h2>
        <h4>Graphic Era University, Clement Town, Dehradun</h4>
      </div>
    </div>
  )
}

export default LocationSearchPanel
