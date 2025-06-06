import React from 'react'

const LocationSearchPanel = (props) => {
  console.log(props);
  //sample array for location
  const locations = [
    "Shimla Bypass Road, Vikasnagar, Dehra Dun, Uttarakhand",
    "Clock Tower Paltan Bazaar Road, Dehra Dun, Uttarakhand",
    "ISBT, Bus Station, Dehradun",
    "Graphic Era University, Clement Town, Dehradun",
  ]
  return (
    <div>
      {
      locations.map(function(elem,idx){
        return <div key={idx} onClick ={()=>{
          props.setVechilePanel(true)
          props.setPanelOpen(false)
        }} className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'>
        <h2 className='bg-[#eee] h-8 mx-1 flex items-center justify-center w-12 rounded-full'>
          <i className="ri-map-pin-fill"></i>
        </h2>
        <h4 className='font-medium'>{elem}</h4>
      </div>
      })
    }
    </div>
  )
}

export default LocationSearchPanel
