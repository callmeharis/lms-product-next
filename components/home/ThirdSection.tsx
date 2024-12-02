import React from 'react'

const ThirdSection = () => {
  return (
      <main className="min-h-screen bg-gray-50">
          {/* Why Choose Us Section */}
          <section className="bg-green-800 text-white py-16">
              <div className="container mx-auto px-6 lg:px-16 flex flex-col md:flex-row items-center justify-between">
                  {/* Text Content */}
                  <div className="max-w-lg">
                      <div className="mb-6">
                          <div className="flex items-center gap-2">
                              <div className="bg-green-600 p-2 rounded-full">
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-6 w-6 text-white"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                  >
                                      <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          d="M8 16l2.4 2.4L16 8"
                                      />
                                  </svg>
                              </div>
                              <p className="text-sm font-semibold uppercase">Why Choose Us</p>
                          </div>
                      </div>
                      <h2 className="text-3xl font-bold mb-6">
                          Why Our Marketplace Stands Out
                      </h2>
                      <p className="text-gray-200 mb-6 leading-relaxed">
                          Explore a wealth of articles, guides, tutorials, and more, curated
                          by our experts to enhance your learning experience.
                      </p>
                      <ul className="mb-8 space-y-2">
                          <li className="flex items-start">
                              <span className="text-green-400 mr-2">⭐</span>
                              Flexible Scheduling
                          </li>
                          <li className="flex items-start">
                              <span className="text-green-400 mr-2">⭐</span>
                              Expert Tutors
                          </li>
                          <li className="flex items-start">
                              <span className="text-green-400 mr-2">⭐</span>
                              Affordable Rates
                          </li>
                          <li className="flex items-start">
                              <span className="text-green-400 mr-2">⭐</span>
                              Personalized Learning Plans
                          </li>
                          <li className="flex items-start">
                              <span className="text-green-400 mr-2">⭐</span>
                              Wide Range of Subjects
                          </li>
                          <li className="flex items-start">
                              <span className="text-green-400 mr-2">⭐</span>
                              Learner’s community and access to infinite educational resources
                          </li>
                      </ul>
                      <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold text-sm">
                          Get Started Now
                      </button>
                  </div>

                  {/* Image Content */}
                  <div className="relative mt-12 md:mt-0">
                      <div className="relative z-10">
                          <img
                              src="/laptop-mockup.png"
                              alt="Laptop Mockup"
                              className="rounded-lg shadow-md"
                          />
                      </div>
                      {/* Overlay Features */}
                      <div className="absolute top-6 left-6 bg-white p-3 rounded-lg shadow-md">
                          <div className="flex items-center gap-2">
                              <img
                                  src="/tutor-avatar-group.png"
                                  alt="Tutors"
                                  className="w-10 h-10 rounded-full"
                              />
                              <p className="text-sm text-gray-700 font-medium">
                                  43k+ Tutors onboard
                              </p>
                          </div>
                      </div>
                      <div className="absolute bottom-6 right-6 bg-white p-3 rounded-lg shadow-md flex items-center gap-2">
                          <div className="bg-green-400 p-1 rounded-full">
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4 text-white"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                              >
                                  <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M5 13l4 4L19 7"
                                  />
                              </svg>
                          </div>
                          <p className="text-sm font-medium text-gray-700">Liked</p>
                      </div>
                  </div>
              </div>
          </section>
      </main>
  )
}

export default ThirdSection