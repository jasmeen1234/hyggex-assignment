import React from 'react';
import bulb from '../assets/bulb.png';
import speaker from '../assets/speaker.png';

function Table() {
  return (
    <div className="w-1/3 h-80 mt-20 flex items-center justify-center mx-auto">
      {/* Container with fixed width and height, centered */}
      
      <div className="w-full h-full mx-auto bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex flex-col items-center justify-center text-white font-bold text-3xl">
        <div className="flex items-center justify-between w-full px-4">
          <img src={bulb} alt="bulb" className="h-12 w-12 mb-60" />
          <span>9 + 6 + 7x - 2x - 3</span>
          <img src={speaker} alt="speaker" className="h-12 w-12 mb-60" />
        </div>
      </div>
      
    </div>
  );
}

export default Table;
