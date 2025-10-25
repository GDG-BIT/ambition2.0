// raksha
//import card component! 
//leave a space for adding that cartoon character! 
import SectionTitle from "@/components/global/SectionTitle";
import Card from "@/components/global/Card";
import Image from "next/image";

const WhatIsAmbition = () => {
  return (
    <section className="px-4 py-20 bg-gradient-to-br from-white via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900 dark:to-pink-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-24 h-24 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-2xl transform rotate-45 opacity-30 animate-pulse"></div>
        <div className="absolute bottom-10 left-16 w-32 h-32 bg-gradient-to-br from-green-300 to-blue-400 rounded-full opacity-20"></div>
      </div>
      
      <div className="relative z-10">
        {/* Header section */}
        <div className="text-center mb-12">
          <div className="inline-block bg-green-600 text-white px-6 py-2 rounded-full font-bold text-lg shadow-lg transform rotate-2 border-2 border-black mb-8">
            what is amBITion ?
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Character placeholder */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Cartoon character placeholder */}
              <div className="w-80 h-80 bg-gradient-to-br from-green-200 to-emerald-300 dark:from-green-800 dark:to-emerald-900 rounded-3xl flex items-center justify-center shadow-2xl border-4 border-black transform hover:rotate-3 transition-transform duration-300 overflow-hidden relative">
                 <Image 
                    src="/ambition.png"
                    alt="Ambition Logo"
                    width={320}
                    height={320}
                    className="rounded-2xl object-contain"
                    style={{
                      filter: 'none',
                      transform: 'scale(1.05)',
                      transformOrigin: 'center'
                    }}
                  />
               </div>
              
              {/* Decorative elements around character */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full border-2 border-black animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full border-2 border-black"></div>
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="space-y-8">
            <Card variant="gradient" className="">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Innovation. Code. Impact.
                </h2>
                
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  amBITion is not just a hackathon—it's a battlefield for ideas where developers, designers, and innovators come together to build the future. Whether you're a seasoned coder or a curious beginner, this is your chance to solve real-world problems, showcase your skills, and collaborate with brilliant minds.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">💎</span>
                    <span className="font-semibold text-blue-600 dark:text-blue-400">What to Expect?</span>
                  </div>
                  
                  <div className="space-y-3 ml-8">
                    <div className="flex items-center gap-3">
                      <span className="text-lg">⚡</span>
                      <span className="text-gray-700 dark:text-gray-300">24 hours of non-stop innovation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-lg">👥</span>
                      <span className="text-gray-700 dark:text-gray-300">Hands-on mentorship from industry experts</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-lg">🏆</span>
                      <span className="text-gray-700 dark:text-gray-300">Exciting prizes, swags & career opportunities</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-lg">🔥</span>
                      <span className="text-gray-700 dark:text-gray-300">A chance to turn ideas into reality</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 p-4 rounded-xl border-l-4 border-purple-500">
                  <p className="text-gray-800 dark:text-gray-200 font-medium">
                    The clock is ticking. The challenge is set. <br/>
                    Are you ready to <span className="font-bold text-purple-600 dark:text-purple-400">INNOVATE, BUILD & DISRUPT?</span>
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsAmbition;

