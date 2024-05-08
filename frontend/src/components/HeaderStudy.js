import React from 'react';

function HeaderStudy() {
  return (
    <div className="flex  mt-20 justify-center">
      {/* Container with flex display and center alignment */}
      <div className="flex items-center space-x-16">
        {/* Flex container for items with horizontal spacing */}
        <p className="text-center  text-blue-800 font-semibold hover:text-blue-600 cursor-pointer transition-colors duration-300">Study</p>
        <p className="text-center text-gray-600 font-semibold hover:text-blue-600 cursor-pointer transition-colors duration-300">Quiz</p>
        <p className="text-center text-gray-800 font-semibold hover:text-blue-600 cursor-pointer transition-colors duration-300">Test</p>
        <p className="text-center text-gray-800 font-semibold hover:text-blue-600 cursor-pointer transition-colors duration-300">Game</p>
        <p className="text-center text-gray-800 font-semibold hover:text-blue-600 cursor-pointer transition-colors duration-300">Other</p>
      </div>
    </div>
  );
}

export default HeaderStudy;
