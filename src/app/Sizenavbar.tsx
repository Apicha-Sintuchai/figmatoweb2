import React from "react";
import { FaHome,FaWallet   } from "react-icons/fa";
import { MdOutlinePointOfSale } from "react-icons/md";
import { FcStatistics } from "react-icons/fc";
import { IoIosSettings } from "react-icons/io";
export default function Sizenavbar() {
  return (
    <>
      <div className="fixed flex flex-col justify-start h-full w-20 bg-[#320617] rounded-e-3xl">
        <ul>
          <li className="flex flex-col items-center mt-4 gap-10 justify-center ">
            <div className="bg-[#66042e] w-6  ">
            <a href="#" className="text-white ml-2 ">J</a>
            </div>
            <div className="bg-[#66042e] w-16 pt-2 rounded-xl hover:translate-x-20 duration-500">
              <FaHome className="ml-4 " size={30}></FaHome>
            <a href="#" className="text-white ml-2 ">Home</a>
            </div>
            <div className="bg-[#66042e] w-16 pt-2 rounded-xl hover:translate-x-20 duration-500">
              <MdOutlinePointOfSale className="ml-4 " size={30}></MdOutlinePointOfSale>
            
            <a href="#" className="text-white ml-[0.80rem] ">Sale</a>
            </div>
            <div className="bg-[#66042e] w-16 pt-2 rounded-xl hover:translate-x-20 duration-500">
              <FcStatistics className="ml-4 " size={30}></FcStatistics>
            <a href="#" className="text-white ml-2 ">Status</a>
            </div>
            <div className="bg-[#66042e] w-16 pt-2 rounded-xl hover:translate-x-20 duration-500">
              <FaWallet className="ml-4 " size={30}></FaWallet>
            <a href="#" className="text-white ml-2 ">wallet</a>
            </div>
            <div className="bg-[#66042e] w-16 pt-2 rounded-xl hover:translate-x-20 duration-500">
              <IoIosSettings className="ml-4 " size={30}></IoIosSettings>
            <a href="#" className="text-white ml-1 ">Setting</a>
            </div>
            
           
          </li>
        </ul>
      </div>
    </>
  );
}
