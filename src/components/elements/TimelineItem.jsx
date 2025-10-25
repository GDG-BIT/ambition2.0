const TimeLineItem = ({ event, index, isActive = false }) => {
  const { title, date, description, icon, color, bgColor, highlight, status } = event;
  const isLeft = index % 2 === 0;
  
  // Status badges removed as requested

  return (
    <div className={`timeline-item flex flex-col md:flex-row items-center w-full relative animate-fade-in-up transition-all duration-500 ${event.status === 'completed' ? 'status-completed' : ''} ${event.status === 'main-event' ? 'status-main-event' : ''} ${isActive ? 'scale-105 z-20' : 'hover:scale-102'}`} style={{animationDelay: `${index * 0.2}s`}}>
      {/* Mobile-first single column layout, desktop alternating layout */}
      {/* Content - always visible on mobile, alternating on desktop */}
      <div className={`w-full ${isLeft ? 'md:w-5/12 md:pr-8' : 'md:w-5/12 md:pl-8 md:order-3'} z-10`}>
        <div className={`timeline-content group relative overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl shadow-md sm:shadow-lg md:shadow-2xl hover:shadow-lg sm:hover:shadow-xl md:hover:shadow-3xl transition-all duration-500 border-2 sm:border-3 md:border-4 border-black ${bgColor} ${isLeft ? 'md:text-right' : 'md:text-left'} ${highlight ? 'transform scale-105 ring-2 sm:ring-3 md:ring-4 ring-green-400' : 'hover:scale-105'} ${status === 'completed' ? 'opacity-90 hover:opacity-100' : ''} ${isActive ? 'ring-4 ring-green-400 shadow-2xl border-green-500' : ''} cursor-pointer`}>
          
          {/* Animated background overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
          
          
            {/* Arrow pointer for desktop - pointing right */}
            {isLeft && (
              <div className="absolute top-8 right-0 translate-x-full w-0 h-0 hidden md:block border-l-[16px] border-l-white dark:border-l-gray-800 border-y-[16px] border-y-transparent"></div>
            )}
          
          <div className="bg-white dark:bg-gray-800 p-3 sm:p-4 md:p-6 lg:p-8 m-1 sm:m-2 rounded-md sm:rounded-lg md:rounded-xl shadow-inner">
              {/* Icon and Date Header */}
              <div className={`flex items-center gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3 md:mb-4 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">{icon}</div>
              <div className={`${color} text-white px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full text-xs sm:text-sm font-bold border-2 border-black shadow-lg whitespace-nowrap`}>
                {date}
              </div>
            </div>
            
            <h3 className={`text-base sm:text-lg md:text-xl lg:text-2xl font-black mb-2 sm:mb-3 md:mb-4 text-green-800 dark:text-green-200`}>
              {title}
            </h3>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium">{description}</p>
            
            {/* Decorative bottom accent */}
              <div className={`mt-2 sm:mt-3 md:mt-4 h-1 sm:h-1.5 md:h-2 ${color} rounded-full`}></div>
            </div>
          </div>
        </div>

      {/* Spacer for desktop alternating layout */}
      {!isLeft && (
        <div className="hidden md:block md:w-5/12"></div>
      )}

      {/* The Enhanced Center Dot */}
      <div className={`relative w-full md:w-2/12 flex justify-center my-3 sm:my-4 md:my-6 lg:my-0 ${isLeft ? 'md:order-2' : 'md:order-2'}`}>
        <div className={`timeline-dot group relative w-5 sm:w-6 md:w-8 lg:w-12 h-5 sm:h-6 md:h-8 lg:h-12 rounded-full ${color} border-2 sm:border-3 md:border-4 border-white dark:border-gray-800 shadow-md sm:shadow-lg md:shadow-2xl z-20 ${highlight ? 'animate-bounce' : ''} hover:scale-110 transition-all duration-300 cursor-pointer ${isActive ? 'scale-150 shadow-2xl' : ''}`}>
          <div className={`absolute inset-0 rounded-full ${color} ${status === 'completed' ? 'animate-pulse opacity-75' : 'group-hover:animate-spin opacity-75'}`}></div>
          <div className="absolute inset-1 sm:inset-2 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center group-hover:bg-gray-50 dark:group-hover:bg-gray-700 transition-colors duration-300">
            <span className={`text-sm sm:text-lg md:text-xl ${status === 'completed' ? 'filter grayscale-0' : ''} group-hover:scale-110 transition-transform duration-300`}>{icon}</span>
          </div>
          
          {/* Enhanced ripple effects */}
          {(highlight || status === 'main_event') && (
            <>
              <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${color} animate-ping opacity-30`}></div>
              <div className={`absolute -inset-1 sm:-inset-2 rounded-full bg-gradient-to-br ${color} animate-pulse opacity-20`}></div>
              <div className={`absolute -inset-2 sm:-inset-3 rounded-full bg-gradient-to-br ${color} animate-ping opacity-10 animation-delay-500`}></div>
            </>
          )}
          
          {/* Completion indicator */}
          {status === 'completed' && (
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white shadow-lg animate-pulse">
              <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75"></div>
            </div>
          )}
        </div>
      </div>

      {/* Arrow pointer for desktop - pointing left (for right side items) */}
      {!isLeft && (
        <div className="absolute top-8 left-0 -translate-x-full w-0 h-0 hidden md:block border-r-[16px] border-r-white dark:border-r-gray-800 border-y-[16px] border-y-transparent"></div>
      )}
    </div>
  );
};

export default TimeLineItem;