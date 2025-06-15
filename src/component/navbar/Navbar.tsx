import React from "react";
import Image from "next/image";
import Agi_store from "@/assets/images/Agi_logo.png";
import { Menu, User, Heart, ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <header>
      <div className="bg-[#293544] text-gray-100 p-4 flex items-center justify-between px-[4vh]">
        <div className="text-2xl font-semibold">
          <Image className="w-[70px] h-[70px]" src={Agi_store} alt="logo" />
        </div>
        <div className="hidden md:flex items-center gap-4">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 rounded-md text-white"
          />
          <User />
          <Heart />
          <ShoppingCart />
        </div>
        <div className="md:hidden">
          <Menu />
        </div>
      </div>

      <nav className="bg-gray-50 p-4 overflow-x-auto whitespace-nowrap">
        <div className="flex justify-center items-center gap-4">
          {[
            "New in",
            "Best sellers",
            "Dresses",
            "Denim",
            "Tops",
            "Bottoms",
            "Trending",
            "Summer",
          ].map((item, index) => (
            <a
              key={index}
              href={`/#${item.toLowerCase().replace(/\s/g, "")}`}
              className="inline-block py-2 px-4 rounded-md hover:underline ease duration-300">
              {item}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
