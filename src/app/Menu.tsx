/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Menu() {
    const menuItems = [
        {
          name: "Mikeshake choco",
          description: "With oreo",
          price: 35000,
          imageUrl: "https://i.pinimg.com/236x/f4/67/3c/f4673c8dd1a7affcf48fcd8657d5736b.jpg"
        },
        {
          name: "Indomie noddle",
          description: "extra spicy",
          price: 35000,
          imageUrl: "https://i.pinimg.com/236x/90/42/78/90427899b6b2580a0080d872cb15bf50.jpg"
        },
        {
          name: "Pizza",
          description: "extra chest",
          price: 35000,
          imageUrl: "https://i.pinimg.com/236x/1d/28/c5/1d28c51cfab73dfcd0e3fad6824f4e86.jpg"
        },
        {
          name: "Cabonara",
          description: "With cream",
          price: 35000,
          imageUrl: "https://i.pinimg.com/236x/32/2a/45/322a459efe060bd98fda0b2d8fc48967.jpg"
        },
        {
          name: "hotdog",
          description: "With bread",
          price: 35000,
          imageUrl: "https://i.pinimg.com/236x/0a/a4/ab/0aa4ab8b807fe5e2f747bdc619c50bde.jpg"
        },
      ];
  return (
    <>
    <div className="flex justify-center items-center mt-10">
      <div className="w-[85%]">
        <div className="grid grid-cols-1 gap-16 sm:grid-cols-2">
          {menuItems.map((item, index) => (
            <div key={index}>
              <div className="flex bg-slate-300 rounded-3xl">
                <div className="flex ">
                  <img
                    src={item.imageUrl}
                    alt=""
                    className="flex w-1/3 rounded-2xl"
                  />
                  <div className="flex flex-col gap-3 ml-4">
                    <p className="text-3xl font-bold">{item.name}</p>
                    <p className="text-3xl font-bold">{item.description}</p>
                    <p className="text-xl text-slate-300">Rp.{item.price}</p>
                    <p className="font-bold">Size</p>
                    <div className="flex gap-8">
                      <button className="hover:bg-slate-600 flex rounded-full duration-500">
                        S
                      </button>
                      <button className="hover:bg-slate-600 flex rounded-full duration-500">
                        M
                      </button>
                      <button className="hover:bg-slate-600 flex rounded-full duration-500">
                        L
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
  );
}
