import React from "react";
import { FaSearch } from "react-icons/fa";
export default function Navbar() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="w-[85%]">
          <div className="flex justify-between">
            <div className="">
              <h1 className="text-2xl font-bold">Warung Om Jon</h1>
              <h1>Sunny,June 20 2021</h1>
            </div>
            <div className="flex bg-slate-200 h-full w-96 mt-5">
              <FaSearch size={30}></FaSearch>
              <p className="mx-6 mt-1">Search category or menu...</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-5">
        <div className="w-[85%]">
            <div className="flex gap-12 underline">
                <h1 className="hover:text-red-400  ">All</h1>
                <h1 className="hover:text-red-400  ">coffee</h1>
                <h1 className="hover:text-red-400  ">Tea</h1>
                <h1 className="hover:text-red-400  ">Juice</h1>
                <h1 className="hover:text-red-400  ">Meal</h1>
                <h1 className="hover:text-red-400  ">Snack</h1>
                <h1 className="hover:text-red-400  ">Dessert</h1>
            </div>
        </div>
      </div>
    </>
  );
}
