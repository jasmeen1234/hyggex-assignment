import React from 'react'
import arrow from '../assets/arrow.png'
import home from '../assets/home.png'
import Relation from './Relation'
function Header1() {
  return (
    <div className='shadow-md w-full fixed top-20 left-0 bg-white flex' >
      <div className='md:flex items-center justify-between py-4 md:px-10 px-7'>
        {/* Logo section */}
        <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
          <img src={home} alt="home" className="h-8 w-8" /> 
          <img src={arrow} alt="arrow" className="h-6 w-6" /> 
          <span className="text-sm font-medium">Flashcard</span>
          <img src={arrow} alt="arrow" className="h-6 w-6" /> 
          <span className="text-sm font-medium">Mathematics</span> 
          <img src={arrow} alt="arrow" className="h-6 w-6" />
          <span className="text-xl text-blue-900 font-medium">Relation and Function</span> 
        </div>
      
      </div>
    </div>
  )
}

export default Header1
