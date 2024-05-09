import React, { useState } from 'react';
import downarrow from '../assets/downarrow.png';

function Faq() {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="mt-20 ml-10 max-w-lg">
      <div className="text-4xl font-bold leading-tight text-transparent bg-gradient-to-r from-[#06286E] to-[#06286E] bg-clip-text mb-10 ml-4">
        FAQ
      </div>

     
      <div className="mb-8 relative">
        <input
          type="text"
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
          placeholder="Can education flashcard be used for all age groups"
        />
    
        <img
          src={downarrow}
          alt="downarrow"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5"
        />
      </div>

      {/* Input for Group 2 */}
      <div className="mb-8">
        <input
          type="text"
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
          placeholder="How do education flashcards work?"
        />
       <img
          src={downarrow}
          alt="downarrow"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5"
        />
      </div>

      {/* Input for Group 3 */}
      <div className="mb-10 relative">
        <input
          type="text"
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
          placeholder="Can education flashcard be used for test prepration  "
        />
        <img
          src={downarrow}
          alt="downarrow"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5"
        />
        {/* Conditional Render for Lorem Ipsum */}
        {isFocused && (
          <div className="mt-2 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida faucibus urna eget finibus.
            Donec consequat turpis at nisi rutrum.
          </div>
        )}
      </div>
    </div>
  );
}

export default Faq;
