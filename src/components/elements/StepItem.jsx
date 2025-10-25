import React from 'react';
import { FiUsers, FiTarget, FiEdit, FiCode } from 'react-icons/fi';

const StepItem = ({ number, title, description }) => {
  const getIcon = (num) => {
    switch(num) {
      case 1: return <FiUsers className="w-6 h-6" />;
      case 2: return <FiTarget className="w-6 h-6" />;
      case 3: return <FiEdit className="w-6 h-6" />;
      case 4: return <FiCode className="w-6 h-6" />;
      default: return <FiUsers className="w-6 h-6" />;
    }
  };

  return (
    <div className="flex items-start gap-6 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
      {/* Step Number Circle */}
      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
        {number}
      </div>
      
      {/* Content */}
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <div className="text-purple-600 dark:text-purple-400">
            {getIcon(number)}
          </div>
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">{title}</h3>
        </div>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default StepItem;