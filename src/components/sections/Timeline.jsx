"use client"

import { useRef, useState, useEffect } from "react";
import SectionTitle from "../global/SectionTitle";
import TimelineItem from "../elements/TimelineItem";

const TimeLine = () => {
  const timelineRef = useRef(null);
  const [activeEvent, setActiveEvent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const scrollToTimeline = () => {
    timelineRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const scrollToEvent = (index) => {
    const eventElement = document.getElementById(`timeline-event-${index}`);
    if (eventElement) {
      eventElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setActiveEvent(index);
    }
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  const events = [
    {
      date: "24 Sept, 2025 - 12:00 PM",
      title: "REGISTRATION CLOSES",
      description: "Last chance to register! Registration closes today. Make sure you've submitted your team details and are ready for the hackathon!",
      icon: "⏰",
      color: "bg-red-500",
      bgColor: "bg-red-50",
      status: "upcoming"
    },
    {
      date: "4 OCT, 2025 - 8:00 AM",
      title: "STUDENT REGISTRATION BEGINS",
      description: "Event day starts! Student registration and check-in begins. Get your badges and prepare for an amazing hackathon experience!",
      icon: "📝",
      color: "bg-blue-500",
      bgColor: "bg-blue-50",
      status: "upcoming"
    },
    {
      date: "4 OCT, 2025 - 10:00 AM",
      title: "FACILITATION & WORKSHOP",
      description: "Join our facilitation session and workshop to get familiar with the hackathon format, rules, and meet fellow participants!",
      icon: "🎓",
      color: "bg-purple-500",
      bgColor: "bg-purple-50",
      status: "upcoming"
    },
    {
      date: "04 Oct, 2025 - 12:00 PM",
      title: "HACKING BEGINS",
      description: "The main event starts! 24 hours of intense coding, innovation, and creativity. Teams will work together to build amazing projects and compete for prizes!",
      icon: "🚀",
      color: "bg-green-600",
      bgColor: "bg-green-100",
      highlight: true,
      status: "main_event"
    },
    {
      date: "4 OCT, 2025 - 10:00 PM",
      title: "JAMMING SESSION",
      description: "Take a break from coding and join our jamming session! Network with other participants and enjoy some refreshments.",
      icon: "🎵",
      color: "bg-orange-500",
      bgColor: "bg-orange-50",
      status: "upcoming"
    },
    {
      date: "5 OCT, 2025 - 12:00 PM",
      title: "HACKATHON ENDS",
      description: "Time's up! Submit your final projects and prepare for the presentation phase. 24 hours of innovation comes to an end!",
      icon: "⏱️",
      color: "bg-red-600",
      bgColor: "bg-red-100",
      status: "upcoming"
    },
    {
      date: "5 OCT, 2025 - 2:00 PM",
      title: "RESULTS ANNOUNCED",
      description: "The moment everyone's been waiting for! Winners will be announced and prizes will be distributed. Congratulations to all participants!",
      icon: "🏆",
      color: "bg-yellow-500",
      bgColor: "bg-yellow-50",
      highlight: true,
      status: "upcoming"
    }
  ];

  return (
    <section ref={timelineRef} className="py-20 px-4 bg-green-50 dark:bg-green-900 relative overflow-hidden animate-fade-in" id="timeline">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-green-400 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-200 rounded-full opacity-15 animate-spin"></div>
      </div>
      
      <div className="relative z-10">
        {/* Header section */}
        <div className="text-center mb-12 sm:mb-16 px-4">
          <div className="inline-block bg-green-600 text-white px-6 sm:px-8 py-3 rounded-full font-bold text-lg sm:text-xl shadow-lg transform rotate-1 border-3 border-black mb-6 sm:mb-8">
            📅 AMBITION 2.0 TIMELINE 📅
          </div>
          <p className="text-lg text-green-600 dark:text-green-300 max-w-2xl mx-auto leading-relaxed font-medium">
            Where technology meets innovation - Follow the journey of our 24-hour flagship hackathon!
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4">
          {/* Interactive Navigation Dots */}
          {/* <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-30 hidden lg:block">
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full p-2 shadow-lg border border-green-200 dark:border-green-600">
              {events.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToEvent(index)}
                  className={`block w-3 h-3 rounded-full mb-2 last:mb-0 transition-all duration-300 hover:scale-125 ${
                    activeEvent === index 
                      ? 'bg-green-600 shadow-lg' 
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-green-400'
                  }`}
                  title={events[index].title}
                />
              ))}
            </div>
          </div> */}
          
          {/* Enhanced Vertical Line with gradient and decorative elements - hidden on mobile */}
          <div className="absolute left-1/2 w-1 transform -translate-x-1/2 hidden md:block" style={{height: 'calc(100% - 200px)'}}>
            <div className={`w-full h-full bg-green-500 rounded-full shadow-lg transition-all duration-1000 ${
              isVisible ? 'opacity-60 animate-pulse' : 'opacity-30'
            }`}></div>
          </div>
          <div className={`absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-green-300 z-0 hidden md:block transition-all duration-1000 ${
            isVisible ? 'animate-pulse' : 'opacity-50'
          }`} style={{height: 'calc(100% - 200px)'}}></div>
          
          {/* Floating timeline progress indicator */}
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-2 h-2 bg-green-600 rounded-full shadow-lg animate-bounce hidden md:block z-10"></div>
          
          {/* Timeline Items Container */}
          <div className="space-y-8 sm:space-y-12">
            {events.map((event, index) => (
              <div 
                key={index}
                id={`timeline-event-${index}`}
                className="scroll-mt-20"
                onMouseEnter={() => setActiveEvent(index)}
              >
                <TimelineItem
                  event={event}
                  index={index}
                  isActive={activeEvent === index}
                />
              </div>
            ))}
          </div>
          
          {/* Call to Action at the bottom */}
          <div className="text-center mt-12 sm:mt-16 px-4">
            <div className="inline-block bg-green-600 text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg shadow-lg sm:shadow-2xl border-2 sm:border-4 border-black transform -rotate-1 hover:rotate-0 transition-transform duration-300 min-h-[48px] flex items-center justify-center">
              🚀 Ambition 2.0 - Let's Hack!
            </div>
            <p className="text-lg text-green-600 dark:text-green-300 mb-8 font-semibold">
              The hackathon is now live! Teams are building amazing projects! 💻
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeLine;