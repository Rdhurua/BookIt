import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import ExperienceCard from "../components/ExperiencesCard";
import axios from 'axios';

interface Experience {
  _id: string;
  picture: string;
  place: string;
  location: string;
  desc: string;
  price: string;
}



const HomePage = () => {
  const [search,setSearch]=useState("");
  const [experiences,setExperiences]=useState<Experience[]>([]);
  const[loading,setLoading]=useState(true);
  const[error,setError]=useState<string | null>(null);
  
  useEffect(()=>{

     const fetchData=async()=>{
      try{
          const res=await axios(`${import.meta.env.VITE_API}/experiences`);
          setExperiences(res.data);
          setLoading(false);
      }
      catch(error:any){
         setError("Failed to load experiences");
         setLoading(false);
      }
      
     }
     fetchData();
  },[]);



  const searchedData=experiences.filter((item)=>item.place.toLowerCase().includes(search.toLowerCase()));

if (loading)
    return <div className="text-center text-lg font-semibold mt-20">Loading...</div>;
  if (error)
    return <div className="text-center text-red-500 font-semibold mt-20">{error}</div>;




  return (
    <div className="w-full min-h-screen">
  {/* header */}
  <div className="w-full h-16 flex justify-between items-center shadow-lg px-4 sm:px-8 md:px-12 lg:px-16">
    {/* logo */}
    <div className="w-auto shrink-0">
      <img
        src={logo}
        alt="logo"
        className="h-10 sm:h-12 md:h-14 w-auto object-contain"
      />
    </div>

    {/* search section */}
    <div className="flex items-center w-2/3 sm:w-1/2 md:w-2/5 lg:w-1/3">
      <input
        type="text"
        placeholder="Search experiences"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        className="py-2 sm:py-3 px-3 sm:px-4 w-3/4 sm:w-2/3 mx-1 sm:mx-2 shadow outline-none rounded bg-[#EDEDED] text-sm sm:text-[14px]"
      />
      <button className="py-2 sm:py-3 px-4 sm:px-5 bg-yellow-400 rounded-md text-sm sm:text-base">
        Search
      </button>
    </div>
  </div>

<div className="mx-6  h-screen mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
 {searchedData.length>0?
  (searchedData.map((data,idx)=><ExperienceCard key={idx} Data={data}/>)):<p className="text-center col-span-full text-gray-500">No experiences found</p>}
</div>

</div>

  );
};

export default HomePage;
