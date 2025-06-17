"use client";
import React, { useState, useEffect } from "react";
import "./coming_soon_styles.css";
import {Playfair_Display} from "next/font/google";


const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function ComingSoonPage() {
  // Countdown
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date().setHours(0, 0, 0, 0) + 2000000000; // arbitrary future timestamp

    const interval = setInterval(() => {
      const now = Date.now();
      const distance = target - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`${playfair.className} coming-soon-page flex flex-col items-center justify-center text-center p-10 coming-soon-container`}>
      <div>
        <h1 className="text-5xl font-semibold ">
          Something <span className="text-yellow-500 italic ">ELEGANT</span> Is
          Coming
          <span className="text-yellow-500 italic"> SOON</span>
        </h1>
      </div>
      <p className="text-[black] text-[18px] mt-5 max-w-md font-semibold">
        We are crafting a collection that celebrates your unique style. Just a
        few minutes to go. At AgibyAgi, we are here to serve our customers with
        different collections and categories to shop from
      </p>
      <div className="text-4xl font-semibold mt-5 font-sans">
        {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m :{" "}
        {timeLeft.seconds}s
      </div>
      {/* Newsletter Signup */}
      <div className="newsletter">
        <h2 className="text-[black] text-3xl font-extrabold">
          Be the first to shop our collection !
        </h2>
        <input
          type="email"
          placeholder="Enter your email address"
          className="p-2 mt-5 rounded-md border border-gray-500"
        />
        <button className="bg-[#293544] text-gray-100 p-2 mt-2 rounded-md font-semibold">
          Register
        </button>
      </div>
    </div>
  );
}
