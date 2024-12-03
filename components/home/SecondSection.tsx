import React from 'react'

const SecondSection = () => {
  return (
      <main className="bg-gray-50 min-h-screen">
          {/* Section Title */}
          <section className="text-center py-12">
              <p className="text-green-600 font-medium text-sm uppercase mb-3">
                  A Step-by-Step Guide
              </p>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Unlock Your Potential with Easy Steps
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                  Learn how our platform simplifies finding and booking top tutors to enhance
                  your skills and achieve your learning goals.
              </p>
          </section>

          {/* Steps Section */}
          <section className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-6 py-10">
              {/* Step 1 */}
              <div className="bg-white shadow-md rounded-lg p-6 text-center">
                  <div className="mb-4">
                      <p className="text-gray-500 text-sm uppercase">Step 1</p>
                  </div>
                  <div className="flex justify-center">
                      <img src="/step1-icon.png" alt="Sign Up Icon" className="h-20 w-20 mb-4" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Sign Up</h3>
                  <p className="text-gray-600 text-sm mb-4">
                      Create your account quickly to get started with our platform.
                  </p>
                  <button className="text-green-600 border border-green-600 px-4 py-2 rounded-lg hover:bg-green-600 hover:text-white">
                      Get Started
                  </button>
              </div>

              {/* Step 2 */}
              <div className="bg-white shadow-md rounded-lg p-6 text-center">
                  <div className="mb-4">
                      <p className="text-gray-500 text-sm uppercase">Step 2</p>
                  </div>
                  <div className="flex justify-center">
                      <img src="/step2-icon.png" alt="Find a Tutor Icon" className="h-20 w-20 mb-4" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Find a Tutor</h3>
                  <p className="text-gray-600 text-sm mb-4">
                      Browse and select from qualified tutors based on your needs.
                  </p>
                  <button className="text-green-600 border border-green-600 px-4 py-2 rounded-lg hover:bg-green-600 hover:text-white">
                      Search Now
                  </button>
              </div>

              {/* Step 3 */}
              <div className="bg-white shadow-md rounded-lg p-6 text-center">
                  <div className="mb-4">
                      <p className="text-gray-500 text-sm uppercase">Step 3</p>
                  </div>
                  <div className="flex justify-center">
                      <img src="/step3-icon.png" alt="Schedule Lesson Icon" className="h-20 w-20 mb-4" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Schedule a Lesson</h3>
                  <p className="text-gray-600 text-sm mb-4">
                      Book a convenient time for your lesson with ease.
                  </p>
                  <button className="text-green-600 border border-green-600 px-4 py-2 rounded-lg hover:bg-green-600 hover:text-white">
                      Let’s Begin
                  </button>
              </div>

              {/* Final Call-to-Action */}
              <div className="bg-green-700 text-white shadow-md rounded-lg p-6 text-center">
                  <div className="flex justify-center mb-4">
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-16 w-16"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                      >
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13 16h-1v-4h-1m4 0h-1V9h-1m-2 2h-1V8h-1m5 7h2V9h1m-4-2v6m-4 2H9v-4H8m2-2H8v-2m4-2V4h2v2m-6 2v6m-2-2H4v2H2"
                          />
                      </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Start Your Journey</h3>
                  <p className="text-sm mb-4">
                      Begin your educational journey with us. Find a tutor and book your
                      first session today!
                  </p>
                  <button className="bg-white text-green-700 font-semibold px-4 py-2 rounded-lg hover:bg-green-600 hover:text-white">
                      Get Started Now
                  </button>
              </div>
          </section>
      </main>
  )
}

export default SecondSection