import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 dark:from-gray-900 dark:via-purple-900 dark:to-pink-900 text-gray-900 dark:text-gray-100 py-8 sm:py-12 lg:py-16 overflow-hidden rounded-tl-2xl rounded-tr-2xl sm:rounded-tl-3xl sm:rounded-tr-3xl transition-colors duration-300 border-t-2 sm:border-t-4 border-black relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-4 sm:top-10 left-4 sm:left-10 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-8 sm:top-20 right-8 sm:right-20 w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 bg-gradient-to-br from-green-300 to-blue-400 rounded-full opacity-30"></div>
        <div className="absolute bottom-8 sm:bottom-20 left-1/4 w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-25 animate-pulse"></div>
        <div className="absolute bottom-4 sm:bottom-10 right-1/3 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20"></div>
        {/* Geometric shapes */}
        <div className="absolute top-1/4 left-1/2 w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 bg-gradient-to-r from-pink-400 to-purple-400 transform rotate-45 opacity-30"></div>
        <div className="absolute bottom-1/3 right-4 sm:right-10 w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-gradient-to-r from-green-400 to-blue-400 transform rotate-45 opacity-25"></div>
      </div>
      
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start relative z-10">
        {/* LEFT COLUMN */}
        <div className="bg-white/70 dark:bg-gray-800/70 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl border-2 sm:border-3 border-black backdrop-blur-sm">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            <h4 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase text-black dark:text-white">ADDRESS</h4>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
          </div>
          <div className="bg-gradient-to-r from-gray-50 to-purple-50 dark:from-gray-700 dark:to-purple-800 p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl border-2 border-purple-200 dark:border-purple-600 mb-4 sm:mb-6">
            <p className="text-sm sm:text-base leading-relaxed font-semibold text-black dark:text-white">
              BANGALORE INSTITUTE OF TECHNOLOGY,<br/>
              KRISHNA RAJENDRA RD, PARVATHIPURAM,<br/>
              VISHWESHWARAPURA, BASAVANAGUDI,<br/>
              BENGALURU, KARNATAKA 560004
            </p>
          </div>

          {/* Enhanced decorative line with diamonds */}
          <div className="flex items-center mb-4 sm:mb-6 lg:mb-8">
            <span className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-gradient-to-br from-yellow-400 to-orange-500 transform rotate-45 shadow-lg border-1 sm:border-2 border-black" />
            <span className="flex-grow h-1 sm:h-1.5 lg:h-2 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 mx-2 sm:mx-3 lg:mx-4 rounded-full shadow-md" />
            <span className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-gradient-to-br from-green-400 to-blue-500 transform rotate-45 shadow-lg border-1 sm:border-2 border-black" />
          </div>

          {/* Enhanced centered quote */}
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-800 dark:to-pink-800 p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl border-2 sm:border-3 border-black shadow-lg sm:shadow-xl">
            <p className="text-sm sm:text-base lg:text-xl italic font-black text-center text-black dark:text-white leading-relaxed">
              " IT'S NOT JUST ABOUT WRITING CODE,<br/>
                IT'S ABOUT THE EXPERIENCE "
            </p>
            <div className="flex justify-center mt-3 sm:mt-4">
              <div className="w-8 sm:w-10 lg:w-12 h-0.5 sm:h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN (embedded map) */}
        <div className="bg-white/70 dark:bg-gray-800/70 p-3 sm:p-4 lg:p-4 rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl border-2 sm:border-3 border-black backdrop-blur-sm">
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
            <h4 className="text-lg sm:text-xl lg:text-2xl font-black uppercase text-black dark:text-white">FIND US</h4>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
          </div>
          <div className="rounded-lg sm:rounded-xl overflow-hidden shadow-xl sm:shadow-2xl border-2 sm:border-3 border-black h-48 sm:h-64 lg:h-80 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.265361662902!2d77.57164927503963!3d12.95486421524508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1592715c4e7f%3A0x7dfaf94e52204678!2sBangalore%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1745376986155!5m2!1sen!2sin"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BIT Location"
            />
            {/* Map overlay decoration */}
            <div className="absolute top-1 sm:top-2 right-1 sm:right-2 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM SECTION - Contains Social Media and Copyright */}
      <div className="mt-8 sm:mt-12 lg:mt-16 text-center relative z-10 px-4 max-w-4xl mx-auto overflow-hidden">
        {/* SOCIAL MEDIA LINKS CONTAINER */}
        <div className="bg-white/70 dark:bg-gray-800/70 p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl border-2 sm:border-3 border-black backdrop-blur-sm mb-6 sm:mb-8 overflow-hidden w-full">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
            <h4 className="text-lg sm:text-xl lg:text-2xl font-black uppercase text-black dark:text-white">CONNECT WITH US</h4>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
          </div>
          
          {/* SOCIAL MEDIA LINKS WRAPPER */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 lg:gap-4 overflow-hidden w-full">
            {/* Instagram Link */}
            <a 
              href="https://www.instagram.com/ambition_v2?igsh=MW51NGt4d2FiYXRtcQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-800 dark:to-purple-800 px-2 sm:px-3 py-2 rounded-lg border-2 border-pink-300 dark:border-pink-600 hover:border-pink-500 dark:hover:border-pink-400 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg w-full sm:w-auto sm:min-w-[140px] sm:max-w-[160px] flex-shrink-0 overflow-hidden"
            >
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm group-hover:animate-pulse flex-shrink-0">
                📷
              </div>
              <div className="text-left overflow-hidden min-w-0 flex-1">
                <p className="font-black text-xs text-black dark:text-white truncate">Instagram</p>
                <p className="text-xs text-gray-600 dark:text-gray-300 truncate">@ambition_v2</p>
              </div>
            </a>

            {/* Email Link */}
            <a 
              href="mailto:ambitiontwenty24@gmail.com"
              className="group flex items-center gap-2 bg-gradient-to-r from-blue-100 to-green-100 dark:from-blue-800 dark:to-green-800 px-2 sm:px-3 py-2 rounded-lg border-2 border-blue-300 dark:border-blue-600 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg w-full sm:w-auto sm:min-w-[140px] sm:max-w-[160px] flex-shrink-0 overflow-hidden"
            >
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-blue-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm group-hover:animate-pulse flex-shrink-0">
                ✉️
              </div>
              <div className="text-left overflow-hidden min-w-0 flex-1">
                <p className="font-black text-xs text-black dark:text-white truncate">Email</p>
                <p className="text-xs text-gray-600 dark:text-gray-300 truncate">ambitiontwenty24@gmail.com</p>
              </div>
            </a>

            {/* WhatsApp Link */}
            <a 
              href="https://wa.me/919620247096"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-gradient-to-r from-green-100 to-yellow-100 dark:from-green-800 dark:to-yellow-800 px-2 sm:px-3 py-2 rounded-lg border-2 border-green-300 dark:border-green-600 hover:border-green-500 dark:hover:border-green-400 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg w-full sm:w-auto sm:min-w-[140px] sm:max-w-[160px] flex-shrink-0 overflow-hidden"
            >
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-green-500 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm group-hover:animate-pulse flex-shrink-0">
                📱
              </div>
              <div className="text-left overflow-hidden min-w-0 flex-1">
                <p className="font-black text-xs text-black dark:text-white truncate">WhatsApp</p>
                <p className="text-xs text-gray-600 dark:text-gray-300 truncate">+91 96202 47096</p>
              </div>
            </a>
          </div>

          {/* Decorative line */}
          <div className="flex items-center justify-center mt-6 sm:mt-8">
            <span className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-pink-400 to-purple-500 transform rotate-45 shadow-lg border-1 border-black" />
            <span className="w-16 sm:w-20 lg:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 mx-2 sm:mx-3 rounded-full shadow-md" />
            <span className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-blue-400 to-green-500 transform rotate-45 shadow-lg border-1 border-black" />
          </div>
        </div>

        {/* COPYRIGHT SECTION - Contained within the footer bottom section */}
        <div className="copyright-container w-full overflow-hidden">
          <div className="flex items-center justify-center gap-2 sm:gap-3 lg:gap-4 mb-3 sm:mb-4 overflow-hidden">
            <div className="w-4 sm:w-6 lg:w-8 h-0.5 bg-gradient-to-r from-transparent to-purple-400 flex-shrink-0"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex-shrink-0"></div>
            <div className="w-8 sm:w-12 lg:w-16 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 flex-shrink-0"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full flex-shrink-0"></div>
            <div className="w-4 sm:w-6 lg:w-8 h-0.5 bg-gradient-to-r from-pink-400 to-transparent flex-shrink-0"></div>
          </div>
          <div className="bg-white/50 dark:bg-gray-800/50 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-full border-2 border-purple-300 dark:border-purple-600 backdrop-blur-sm inline-block max-w-full overflow-hidden">
            <p className="text-xs sm:text-sm font-bold text-black dark:text-white truncate">
              © {new Date().getFullYear()}, All rights reserved • Made with ❤️ for amBITion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
