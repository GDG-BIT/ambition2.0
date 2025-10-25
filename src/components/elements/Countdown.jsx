"use client";
import { useEffect, useState } from "react";

// You can pass the targetDate as a prop from the HeroBanner component
const Countdown = ({ targetDate = "2025-09-20T09:00:00" }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {
      Days: "00",
      Hours: "00",
      Minutes: "00",
      Seconds: "00",
    };

    if (difference > 0) {
      timeLeft = {
        Days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
        Hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
        Minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, "0"),
        Seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState({
    Days: "00",
    Hours: "00",
    Minutes: "00",
    Seconds: "00",
  });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setTimeLeft(calculateTimeLeft());
    
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, [targetDate]); // Rerun effect if targetDate changes

  if (!isClient) {
    return (
      <div className="flex justify-center items-center gap-1 sm:gap-2 md:gap-4 text-center bg-white p-2 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl shadow-2xl border-2 border-gray-200 w-full max-w-xs sm:max-w-lg md:max-w-2xl mx-auto">
        {["Days", "Hours", "Minutes", "Seconds"].map((label) => (
          <div key={label} className="flex flex-col items-center flex-1">
            <div className="bg-white border-2 border-gray-300 rounded-md sm:rounded-lg p-1 sm:p-2 md:p-4 mb-1 sm:mb-2 shadow-md w-full min-w-0">
              <span className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black block">
                00
              </span>
            </div>
            <span className="text-xs sm:text-sm uppercase tracking-wide text-gray-600 font-semibold text-center">
              {label}
            </span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center gap-1 sm:gap-2 md:gap-4 text-center bg-white p-2 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl shadow-2xl border-2 border-gray-200 w-full max-w-xs sm:max-w-lg md:max-w-2xl mx-auto">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="flex flex-col items-center flex-1">
          {/* Number container with individual border */}
          <div className="bg-white border-2 border-gray-300 rounded-md sm:rounded-lg p-1 sm:p-2 md:p-4 mb-1 sm:mb-2 shadow-md w-full min-w-0">
            <span className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black block">
              {value}
            </span>
          </div>
          
          {/* Label */}
          <span className="text-xs sm:text-sm uppercase tracking-wide text-gray-600 font-semibold text-center">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;