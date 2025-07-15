import React from 'react'

const Congratulations = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-purple-500 to-red-500 relative text-white">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold animate-bounce text-center px-4">
        🎉 Congratulations! 🎉
      </h1>

      {/* Bottom Message */}
      <div className="absolute bottom-0 w-full text-center bg-black bg-opacity-50 py-3 text-sm sm:text-base">
        Your order is executed
      </div>
    </div>
  )
}

export default Congratulations
