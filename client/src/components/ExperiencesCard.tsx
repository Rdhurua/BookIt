import React from 'react'
import { Link } from 'react-router-dom'

interface data{
  _id:string,
  picture:string,
   place:string,
   location:string,
   desc:string,
   price:string
}


const ExperienceCard = ({Data}:{Data:data}) => {
  return (
    <div className="w-[280px] h-auto sm:h-[350px] flex flex-col shadow-md  rounded-lg bg-[#f9f5f5] hover:shadow-lg transition-shadow duration-300 mx-auto my-2">
  {/* image */}
  <div className="w-full h-[180px] sm:h-[200px] rounded-lg overflow-hidden mb-3">
    <img
      src={Data.picture}
      alt=""
      className="w-full h-full object-cover rounded-lg"
    />
  </div>

<div className='flex flex-col  mb-2'>
  <div className="flex justify-between items-center text-sm sm:text-base px-2">
    <li className="list-none font-semibold text-gray-800">{Data.place}</li>
    <li className="list-none bg-[#F0F0F0] px-2 py-1 rounded-md shadow">{Data.location}</li>
  </div>

  <p className="text-gray-600 text-sm sm:text-[15px] mb-3 px-1 ">
    {Data.desc}
  </p>
</div>

  <div className="flex justify-between items-center px-1 mt-auto p-2 mx-1">
    <li className="list-none text-[14px] sm:text-base font-semibold text-gray-600 ">
      From: <span className='text-[20px] text-gray-900'>₹{Data.price}</span>
    </li>
    <Link to={`/details/${Data._id}`} state={{data:Data}} className="py-1 px-3 sm:px-4 bg-yellow-400 rounded-md text-sm sm:text-base hover:bg-yellow-500 transition-colors">
      View Details
    </Link>
  </div>
</div>

  )
}

export default ExperienceCard
