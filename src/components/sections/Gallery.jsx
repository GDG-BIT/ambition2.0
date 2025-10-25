'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const Gallery = () => {
  const galleryImages = [
    
    { src: '/gallery/3.png', alt: 'Gallery Image 3' },
    { src: '/gallery/4.png', alt: 'Gallery Image 4' },
    { src: '/gallery/5.png', alt: 'Gallery Image 5' },
    { src: '/gallery/6.png', alt: 'Gallery Image 6' },
    
    { src: '/gallery/8.jpg', alt: 'Gallery Image 8' },
    { src: '/gallery/9.jpg', alt: 'Gallery Image 9' },
    { src: '/gallery/10.jpg', alt: 'Gallery Image 10' },
    { src: '/gallery/11.jpg', alt: 'Gallery Image 11' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const images = galleryImages;

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return (
      <section className="px-4 py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-900 dark:via-gray-900 dark:to-purple-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border-4 border-black">
            <div className="relative w-full" style={{ aspectRatio: '21/9' }}>
              <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse flex items-center justify-center">
                <div className="text-gray-500 dark:text-gray-400 text-xl font-semibold">Loading Gallery...</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="px-4 py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-900 dark:via-gray-900 dark:to-purple-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-24 h-24 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-2xl transform rotate-45 opacity-30 animate-pulse"></div>
        <div className="absolute bottom-10 left-16 w-32 h-32 bg-gradient-to-br from-green-300 to-blue-400 rounded-full opacity-20"></div>
      </div>
      
      <div className="relative z-10">
        {/* Header section */}
        <div className="text-center mb-12">
          <div className="inline-block bg-green-600 text-white px-6 py-2 rounded-full font-bold text-lg shadow-lg transform rotate-2 border-2 border-black mb-8">
            GALLERY
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Capturing moments from our amazing hackathon journey!
          </p>
        </div>

        {/* Carousel Container with Strict Boundaries */}
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border-4 border-black">
            {/* Main Image Display with Fixed Aspect Ratio Container */}
            <div className="relative w-full" style={{ aspectRatio: '21/9' }}>
              <div className="absolute inset-0 overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out h-full"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {images.map((image, index) => (
                    <div key={index} className="w-full h-full flex-shrink-0 relative">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover bg-gray-100 dark:bg-gray-700"
                        priority={index === 0}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 z-20 focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 z-20 focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Next image"
              >
                <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
              </button>

              {/* Image Counter */}
              <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-black/60 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium z-20">
                {currentIndex + 1} / {images.length}
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="bg-gray-50 dark:bg-gray-700 p-3 sm:p-4 pb-1">
              <div className="flex justify-center space-x-2 sm:space-x-3 md:space-x-4 overflow-x-auto scrollbar-hide">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-lg overflow-hidden border-2 transition-all duration-300 hover:scale-105 ${
                      index === currentIndex
                        ? 'border-green-500 shadow-lg shadow-green-500/50'
                        : 'border-gray-300 dark:border-gray-600 hover:border-green-400'
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={112}
                      height={112}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Dot Indicators */}
            <div className="absolute bottom-3 sm:bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-white shadow-lg'
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;