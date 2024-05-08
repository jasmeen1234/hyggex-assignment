import React from 'react';
import square from '../assets/square.png';
import leftarrow from '../assets/leftarrow.png';
import rightarrow from '../assets/rightarrow.png';
import refresh from '../assets/refresh.png';

function Tablebar() {
  return (
    <div className="flex items-center justify-center 0 p-4">
      <img src={refresh} alt="refresh" className="w-6 h-6 mr-20" />
      <img src={leftarrow} alt="leftarrow" className="w-6 h-6 mr-4" />
      <span className="text-gray-800 mr-2">01/10</span>
      <img src={rightarrow} alt="rightarrow" className="w-6 h-6 mr-4" />
      <img src={square} alt="square" className="w-6 h-6 ml-20" />
    </div>
  );
}

export default Tablebar;
