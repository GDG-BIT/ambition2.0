import React from 'react';

const Card = ({ children, className = "", variant = "default" }) => {
  const getCardStyles = () => {
    const baseStyles = "relative overflow-hidden transition-all duration-300 transform hover:scale-105";
    
    switch (variant) {
      case "gradient":
        return `${baseStyles} bg-gradient-to-br from-white via-gray-50 to-purple-50 dark:from-gray-800 dark:via-gray-700 dark:to-purple-900 rounded-2xl p-8 shadow-2xl hover:shadow-3xl border-2 border-purple-100 dark:border-purple-800 hover:border-purple-300 dark:hover:border-purple-600`;
      case "colorful":
        return `${baseStyles} bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-800 dark:via-blue-900 dark:to-green-900 rounded-2xl p-6 shadow-xl hover:shadow-2xl border-2 border-blue-100 dark:border-blue-800 hover:border-blue-300 dark:hover:border-blue-600`;
      case "minimal":
        return `${baseStyles} bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500`;
      default:
        return `${baseStyles} bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl border-2 border-gray-100 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-600`;
    }
  };

  return (
    <div className={`${getCardStyles()} ${className}`}>
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 opacity-10 rounded-bl-2xl"></div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Card;