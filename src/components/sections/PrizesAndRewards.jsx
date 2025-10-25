"use client"

import React from "react";
import { useRouter } from 'next/navigation';
import SectionTitle from "@/components/global/SectionTitle";
import Card from "@/components/global/Card";
import { FiGift, FiStar, FiCoffee, FiBriefcase, FiTrophy, FiDollarSign } from "react-icons/fi";

const PrizesAndRewards = () => {
  const router = useRouter();
  
  const prizes = [
    {
      title: "🥇 First Place",
      amount: "₹50,000",
      description: "Cash prize + Internship opportunities",
      highlight: true,
      gradient: "from-yellow-400 to-orange-500",
      bgGradient: "from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20"
    },
    {
      title: "🥈 Second Place",
      amount: "₹30,000",
      description: "Cash prize + Mentorship program",
      highlight: false,
      gradient: "from-gray-400 to-gray-600",
      bgGradient: "from-gray-50 to-gray-100 dark:from-gray-800/20 dark:to-gray-700/20"
    },
    {
      title: "🥉 Third Place",
      amount: "₹20,000",
      description: "Cash prize + Swag kit",
      highlight: false,
      gradient: "from-amber-600 to-yellow-700",
      bgGradient: "from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20"
    },
    {
      title: "🎯 Best Innovation",
      amount: "₹15,000",
      description: "Most creative solution",
      highlight: false,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20"
    }
  ];

  const perks = [
    { 
      icon: <FiGift className="w-8 h-8" />, 
      title: "Swag Kits", 
      description: "Exclusive merchandise",
      color: "text-red-500",
      bgColor: "bg-red-50 dark:bg-red-900/20"
    },
    { 
      icon: <FiStar className="w-8 h-8" />, 
      title: "Certificates", 
      description: "Participation & winner certificates",
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20"
    },
    { 
      icon: <FiCoffee className="w-8 h-8" />, 
      title: "Food & Fun", 
      description: "Meals, snacks & entertainment",
      color: "text-green-500",
      bgColor: "bg-green-50 dark:bg-green-900/20"
    },
    { 
      icon: <FiBriefcase className="w-8 h-8" />, 
      title: "Internships", 
      description: "Opportunities with partner companies",
      color: "text-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20"
    }
  ];

  return (
    <section className="px-4 py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-indigo-900 dark:via-gray-900 dark:to-cyan-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-6 sm:top-10 left-4 sm:left-10 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-20 sm:top-40 right-8 sm:right-20 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-300 to-pink-400 rounded-2xl transform rotate-45 opacity-30"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-1/4 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-green-300 to-blue-400 rounded-full opacity-25"></div>
      </div>
      
      <div className="relative z-10">
      </div>
        {/* Header section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 px-4">
          <div className="inline-block bg-green-600 text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full font-bold text-lg sm:text-xl shadow-lg transform -rotate-2 border-2 sm:border-3 border-black mb-6 sm:mb-8">
            💰 PRIZES & REWARDS 💰
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            It's not just about the code, it's about the impact you create!
          </p>
        </div>
        
        {/* Prize Pool Header */}
        <div className="max-w-6xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <div className="inline-block bg-green-600 text-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-2xl border-2 sm:border-4 border-black transform rotate-1">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2">
                Total Prize Pool
              </h3>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-yellow-300">
                ₹6,00,000+
              </div>
            </div>
          </div>
        
          
          {/* Prize Cards */}
          {/* <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {prizes.map((prize, idx) => (
              <div key={idx} className={`relative ${prize.highlight ? 'sm:transform sm:-rotate-2 sm:scale-105' : ''}`}>
                <Card 
                  variant={prize.highlight ? "gradient" : "default"} 
                  className={`text-center relative overflow-hidden border-2 sm:border-4 border-black shadow-xl sm:shadow-2xl bg-gradient-to-br ${prize.bgGradient} hover:scale-105 transition-all duration-300 p-4 sm:p-6`}
                >
                  {prize.highlight && (
                    <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 bg-red-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-bold border-1 sm:border-2 border-black transform rotate-12">
                      WINNER!
                    </div>
                  )}
                  
                  <div className="text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4">{prize.title}</div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black mb-3 sm:mb-4 text-green-600 dark:text-green-400">
                    {prize.amount}
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 bg-white/50 dark:bg-gray-800/50 px-2 sm:px-3 py-1 sm:py-2 rounded-lg leading-relaxed">
                    {prize.description}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Perks Section */}
        {/* <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-3 sm:mb-4">
              🎁 What You Get Beyond Prizes
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
              Every participant walks away with valuable experiences and goodies!
            </p>
          </div>
          
          <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((perk, idx) => (
              <Card 
                key={idx} 
                variant="colorful" 
                className={`text-center hover:scale-110 transition-all duration-300 border-2 sm:border-4 border-black shadow-lg sm:shadow-xl ${perk.bgColor} p-4 sm:p-6`}
              >
                <div className={`${perk.color} mb-4 sm:mb-6 flex justify-center p-3 sm:p-4 rounded-full bg-white dark:bg-gray-800 shadow-lg border-2 border-black mx-auto w-fit`}>
                  <div className="w-6 h-6 sm:w-8 sm:h-8">
                    {React.cloneElement(perk.icon, { className: "w-full h-full" })}
                  </div>
                </div>
                <h4 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-gray-800 dark:text-gray-200">{perk.title}</h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium leading-relaxed">{perk.description}</p>
              </Card>
            ))}
          </div>
        </div> */} 
        
        {/* Call to Action */}
        <div className="text-center mt-8 sm:mt-12 lg:mt-16 px-4">
          <div 
            className="inline-block bg-green-600 text-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg shadow-xl sm:shadow-2xl border-2 sm:border-4 border-black transform rotate-1 hover:rotate-0 transition-transform duration-300 min-h-[48px] flex items-center justify-center cursor-pointer hover:bg-green-700 active:scale-95"
            onClick={() => window.open('https://tally.so/r/3E97Nl', '_blank')}
          >
            🚀 Ready to Win Big? Register Now!
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrizesAndRewards;

