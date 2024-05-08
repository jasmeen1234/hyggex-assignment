import React from 'react';


function Table() {
  return (
    <div className="w-1/3 h-80 mt-20 flex items-center justify-center mx-auto  ">
      {/* Container with fixed width and height, centered */}
      <div className="w-full h-full mx-auto bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg  flex items-center justify-center text-white font-bold text-3xl">
        Your Table Content
      </div>
      
    </div>
  );
}

export default Table;
