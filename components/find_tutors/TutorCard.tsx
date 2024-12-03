import React from 'react'

const TutorCard = () => {
  return (
      <div className="border rounded-lg shadow-md bg-white p-4">
          <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gray-200">
                  {/* Placeholder for profile picture */}
              </div>
              <div>
                  <h2 className="text-xl font-bold">Cynthia Hunter</h2>
                  <p className="text-sm text-darkGray">Empowering Students</p>
              </div>
          </div>
          <p className="mt-4 text-sm text-gray-600">
              Hi! I am Cynthia Hunter, a dedicated tutor with a passion for helping
              students excel in their academic pursuits.
          </p>
          <div className="mt-4 flex justify-between items-center">
              <p className="text-primary font-bold">$40.00/Session</p>
              <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-green-700">
                  Book a session
              </button>
          </div>
      </div>
  )
}

export default TutorCard