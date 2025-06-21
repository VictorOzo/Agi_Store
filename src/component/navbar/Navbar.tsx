"use client";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Form from "next/form";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Agi_store from "@/assets/images/Agi_logo.png";
import { Menu } from "lucide-react";
import { PackageIcon, TrolleyIcon } from "@sanity/icons";

export default function Navbar() {
  const { user } = useUser();
  return (
    <header>
      <div className="bg-[#293544] text-gray-100 p-4 flex items-center justify-between px-[4vh]">
        <div className="text-2xl font-semibold">
          <Link rel="stylesheet" href="/">
            <Image className="w-[70px] h-[70px]" src={Agi_store} alt="logo" />
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-4">
          {/* Search area */}
          <Form action="/search">
            <input type="text" name="query" />
          </Form>
          {/* Cart Area */}
          <Link href="/basket">
            <TrolleyIcon className="w-7 h-7" />
          </Link>
          {/* Orders Area */}
          <Link href="/orders">
            <PackageIcon className="w-7 h-7" />
          </Link>
          {/* User Area */}
          {user ? (
            <div>
              <UserButton />
              <div>
                <p>Welcome Back</p>
                <p>{user.fullName}!</p>
              </div>
            </div>
          ) : (
            <SignInButton mode="modal" />
          )}
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
