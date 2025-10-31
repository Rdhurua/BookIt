import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

const DetailsPage = () => {
  
  const { state } = useLocation();
  const data = state?.data;

  return (
    <div className="w-full min-h-screen">
      {/* Header */}
      <div className="w-full h-16 flex justify-between items-center shadow-lg px-4 sm:px-8 md:px-12 lg:px-16 sticky top-1 ">
        <div className="w-auto shrink-0">
          <img
            src={logo}
            alt="logo"
            className="h-10 sm:h-12 md:h-14 w-auto object-contain"
          />
        </div>

        {/* Search section */}
        <div className="flex items-center w-2/3 sm:w-1/2 md:w-2/5 lg:w-1/3">
          <input
            type="text"
            disabled
            className="py-2 sm:py-3 px-3 sm:px-4 w-3/4 sm:w-2/3 mx-1 sm:mx-2 shadow outline-none rounded bg-[#EDEDED] text-sm sm:text-[14px]"
          />
          <button className="py-2 sm:py-3 px-4 sm:px-5 bg-yellow-400 rounded-md text-sm sm:text-base">
            Search
          </button>
        </div>
      </div>


      <div className="max-w-7xl mx-auto p-4 sm:p-6 ">
        <Link to="/" className="text-lg font-medium">
          ← Back
        </Link>

        <div className="w-full flex flex-col md:flex-row justify-between mt-6 gap-8">
       
          <div className="w-2/3 flex flex-col">
            <div className="">
              <img
                src={data.picture}
                alt={data.place}
                className="w-full h-[381px] rounded-lg shadow-md object-cover"
              />
            </div>

            <div className="mt-2">
              <h2 className="text-[24px] font-semibold mt-4 text-[#161616]">
                {data.place}
              </h2>
              <p className="text-gray-600 mt-2 text-sm sm:text-base text-center md:text-left">
                {data.desc}.Helmet and Life jackets along with an expert will
                accompany in {data.place}
              </p>
            </div>

            <div>
              <div className="mt-2">
                <h3 className="text-[18px] font-semibold mt-4 text-gray-800">
                  Choose date
                </h3>
                <div className=" w-full list-none flex pt-3">
                  <li className="px-3 py-2 border border-gray-400 text-[#838383] text-md mx-2 rounded-md ">
                    OCT 22
                  </li>
                  <li className="px-3 py-2 border border-gray-400 text-[#838383] text-md mx-2 rounded-md">
                    OCT 22
                  </li>
                  <li className="px-3 py-2 border border-gray-400 text-[#838383] text-md mx-2 rounded-md">
                    OCT 22
                  </li>
                  <li className="px-3 py-2 border border-gray-400 text-[#838383] text-md mx-2 rounded-md">
                    OCT 22
                  </li>
                  <li className="px-3 py-2 border border-gray-400 text-[#838383] text-md mx-2 rounded-md">
                    OCT 22
                  </li>
                </div>
              </div>

              <div className="mt-2 flex flex-col">
                <h3 className="text-[18px] font-semibold mt-4 text-gray-800">
                  Choose Time
                </h3>
                <div className="list-none flex pt-3">
                  <li className="px-3 py-2 border border-gray-400 text-[#838383] text-md mx-2 rounded-md ">
                    07:00 am{" "}
                    <span className="mx-2 text-red-600 text-md">4 left</span>
                  </li>
                  <li className="px-3 py-2 border border-gray-400 text-[#838383] text-md mx-2 rounded-md ">
                    09:00 am{" "}
                    <span className="mx-2 text-red-600 text-md">4 left</span>
                  </li>
                  <li className="px-3 py-2 border border-gray-400 text-[#838383] text-md mx-2 rounded-md ">
                    11:00 am{" "}
                    <span className="mx-2 text-red-600 text-md">4 left</span>
                  </li>
                  <li className="px-3 py-2 border border-gray-400 text-[#838383] text-md mx-2 rounded-md ">
                    01:00 pm{" "}
                    <span className="mx-2 text-red-600 text-md">sold out</span>
                  </li>
                </div>
                <h4 className="ml-2 text-[12px] w-full text-[#838383]">
                  All times are in IST(GMT +5:30)
                </h4>
              </div>

              <div className="w-full h-[66px]">
                <h3 className="text-[18px] font-semibold mt-4 text-gray-800">
                  About
                </h3>
                <div className="bg-[#EEEEEE] py-2 px-3 rounded ">
                  <p className="text-[#838383]">
                    Scenic routes,trained guides, and safety briefing, Minimum
                    age 10.
                  </p>
                </div>
              </div>
            </div>
          </div>


          <div className="w-[387px] h-[309px] bg-[#EFEFEF] rounded-lg shadow-md p-6 flex flex-col justify-between">
            <div className="w-[339px] h-[187px] space-y-4">
              {/* Price Details */}
              <ul className="space-y-3">
                <li className="flex justify-between text-[#656565] text-[16px]">
                  <span>Starts at</span>
                  <span className="font-medium text-[18px]">₹{data.price}</span>
                </li>

                <li className="flex justify-between text-[#656565] text-[16px] items-center">
                  <span>Quantity</span>
                  <div className="flex items-center gap-3">
                    <button className="w-6 h-6 flex items-center justify-center rounded-md border border-gray-400 text-gray-600 hover:bg-gray-200 text-[18px]">
                      -
                    </button>
                    <span className="font-medium">1</span>
                    <button className="w-6 h-6 flex items-center justify-center rounded-md border border-gray-400 text-gray-600 hover:bg-gray-200 text-[18px]">
                      +
                    </button>
                  </div>
                </li>

                <li className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span className="font-medium">₹{data.price}</span>
                </li>

                <li className="flex justify-between text-gray-700">
                  <span>Taxes</span>
                  <span className="font-medium">₹59</span>
                </li>

                <hr className="border-t border-gray-300" />

                <li className="flex justify-between text-lg font-semibold text-gray-900">
                  <span>Total</span>
                  <span>
                    {/* ₹{parseInt(data.price.replace(/[^0-9]/g, '')) + 59} */}
                    ₹59
                  </span>
                </li>
              </ul>
            </div>

            {/* Checkout Button */}
            <button className="mt-6 w-full bg-[#D7D7D7]  text-[#656565] font-medium py-2 rounded-md transition">
              Confirm
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
