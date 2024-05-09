import React from 'react';
import logocomp from '../assets/logocomp.png';
import plus from '../assets/plus.png';
import hyggex from '../assets/hyggex.png';

function PlusComp() {
  return (
    <div className="flex items-center justify-between mt-30 space-x-4 p-4 rounded-lg">
      {/* Left side: Published By and Logo */}
      <div className="flex items-center justify-start ml-4">
        <img src={logocomp} alt="logo" className="w-14 h-14" />
        
        <div className='ml-0'>
        <span className="text-gray-800 ml-2 mb-12">Published By</span>
        <img src={hyggex} alt="hyggex" className='ml-2' />
        </div>
      </div>

      {/* Right side: Plus Icon and Create Flashcard */}
      <div className="flex items-center ">
      <img src={plus} alt="plus" className="w-10 h-10 mr-4" />
        <p className="text-gray-800 mr-4 ">Create Flashcard</p>
        
      </div>
    </div>
  );
}

export default PlusComp;
