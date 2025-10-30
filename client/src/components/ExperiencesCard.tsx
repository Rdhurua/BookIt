import React from 'react'
import image from '../assets/images/kakyaking.jpg'
const ExperiencesCard = () => {
  return (
    <div className="w-[280px] h-auto sm:h-[350px] flex flex-col shadow-md  rounded-lg bg-[#F0F0F0] hover:shadow-lg transition-shadow duration-300 mx-auto">
  {/* image */}
  <div className="w-full h-[180px] sm:h-[200px] rounded-lg overflow-hidden mb-3">
    <img
      src={image}
      alt=""
      className="w-full h-full object-cover rounded-lg"
    />
  </div>

<div className='flex flex-col px-2 mb-2'>
  <div className="flex justify-between items-center text-sm sm:text-base">
    <li className="list-none font-semibold text-gray-700">Location</li>
    <li className="list-none bg-[#f0f0f0be] px-2 py-1 rounded">uuid5</li>
  </div>

  <p className="text-gray-600 text-sm sm:text-[15px] mb-3 ">
    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.
  </p>
</div>

  <div className="flex justify-between items-center px-1 mt-auto p-2 mx-1">
    <li className="list-none text-[14px] sm:text-base font-semibold text-gray-800">
      From: $99
    </li>
    <button className="py-2 px-3 sm:px-4 bg-yellow-400 rounded-md text-sm sm:text-base hover:bg-yellow-500 transition-colors">
      View Details
    </button>
  </div>
</div>

  )
}

export default ExperiencesCard
