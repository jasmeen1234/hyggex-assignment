import React from 'react'
import logo from '../assets/logo.png';
import plus from '../assets/plus.png';
function PlusComp() {
  return (
    <div className="flex items-center justify-center space-x-4 bg-gray-200 p-4 rounded-lg">
      {/* Left side: Published By and Logo */}
      <div className="flex items-center">
        <span className="text-gray-800 mr-2">Published By</span>
        <img src={logo} alt="logo" className="w-8 h-8" />
      </div>

      {/* Right side: Plus Icon and Create Flashcard */}
      <div className="flex items-center">
        <img src={plus} alt="plus" className="w-8 h-8" />
        <p className="text-gray-800 ml-2">Create Flashcard</p>
      </div>
    </div>
  )
}

export default PlusComp
