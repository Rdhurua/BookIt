import React from "react";
import logo from "../assets/logo.png";
import ExperiencesCard from "../components/ExperiencesCard";
const HomePage = () => {
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
        className="py-2 sm:py-3 px-3 sm:px-4 w-3/4 sm:w-2/3 mx-1 sm:mx-2 shadow outline-none rounded bg-[#EDEDED] text-sm sm:text-[14px]"
      />
      <button className="py-2 sm:py-3 px-4 sm:px-5 bg-yellow-400 rounded-md text-sm sm:text-base">
        Search
      </button>
    </div>
  </div>

<div className="mx-6  h-screen mt-6 grid grid-cols-4 ">
<ExperiencesCard/>
<ExperiencesCard/>
<ExperiencesCard/>
<ExperiencesCard/>
</div>




</div>

  );
};

export default HomePage;
