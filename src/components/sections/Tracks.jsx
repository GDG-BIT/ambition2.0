// sana
//will need sectiontitle component and cards component 
// can use the section title component for the card title also!
// add the styleElemnt component

import SectionTitle from "@/components/global/SectionTitle";
import Card from "@/components/global/Card";
import CardTitle from "@/components/global/cardTitle"; 

const Tracks = () => {
  const tracks = [
    { 
      name: "Web3", 
      description: "Blockchain & Decentralized Apps",
      icon: "🌐",
      gradient: "from-blue-400 to-purple-600",
      bgColor: "from-blue-50 to-purple-50 dark:from-blue-900 dark:to-purple-900"
    },
    { 
      name: "AI/ML", 
      description: "Artificial Intelligence & Machine Learning",
      icon: "🤖",
      gradient: "from-green-400 to-blue-600",
      bgColor: "from-green-50 to-blue-50 dark:from-green-900 dark:to-blue-900"
    },
    {
  name: "Open Innovation",
  description: "Driving collaborative financial innovations for the future.",
  icon: "💰",
  gradient: "from-yellow-400 to-orange-600",
  bgColor: "from-yellow-50 to-orange-50 dark:from-yellow-900 dark:to-orange-900"
},
{
  name: "IoT and Cyber Security",
  description: "Securing connected devices with cutting-edge IoT and cyber protection.",
  icon: "🔒",
  gradient: "from-pink-400 to-red-600",
  bgColor: "from-pink-50 to-red-50 dark:from-pink-900 dark:to-red-900"
}

  ];

  return (
    <section className="px-4 py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 relative overflow-hidden" id="tracks">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-6 sm:top-10 left-4 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-purple-200 to-pink-200 dark:from-purple-800 dark:to-pink-800 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-8 sm:right-20 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-blue-200 to-green-200 dark:from-blue-800 dark:to-green-800 rounded-full opacity-20"></div>
      </div>
      
      <div className="relative z-10">
        <SectionTitle title="Tracks" subtitle="Choose your theme and go wild" />
        
        {/* Enhanced header section */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12 px-4">
          <div className="inline-block bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-base sm:text-lg shadow-lg transform -rotate-2 border-2 border-black">
            HACKATHON TRACKS !!
          </div>
        </div>
        
        <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {tracks.map((track, idx) => (
            <Card key={idx} variant="colorful" className="text-center group p-4 sm:p-6">
              {/* Icon container */}
              <div className={`w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-br ${track.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl shadow-lg transform group-hover:rotate-12 transition-transform duration-300`}>
                {track.icon}
              </div>
              
              {/* Track name */}
              <div className="mb-3 sm:mb-4">
                <CardTitle title={track.name} />
              </div>
              
              {/* Description */}
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{track.description}</p>
              
              {/* Decorative bottom accent */}
              <div className={`mt-4 sm:mt-6 h-1 w-full bg-gradient-to-r ${track.gradient} rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300`}></div>
            </Card>
          ))}
        </div>
        
        
      </div>
    </section>
  );
};

export default Tracks;

