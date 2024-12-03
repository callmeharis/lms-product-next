import React from 'react'

const FirstSection = () => {
    return (
        <section className="container mx-auto py-12 flex flex-col md:flex-row items-center">
            {/* Left Section */}
            <div className="md:w-1/2 text-center md:text-left">
                <p className="text-sm text-green-600 mb-2">👍 100% Brighter Learning Platform</p>
                <h2 className="text-4xl font-bold mb-4">
                    Empower Your Future: <br />
                    <span className="text-green-700">Learning Today for a Brighter Tomorrow</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                    Achieve your goals with personalized tutoring from top experts.
                    Connect with dedicated tutors for success.
                </p>
                <div className="relative max-w-md mx-auto md:mx-0">
                    <input
                        type="text"
                        placeholder="Search for tutors by subject..."
                        className="w-full p-3 border rounded-lg focus:outline-green-600"
                    />
                    <button className="absolute right-2 top-2 bg-green-600 text-white p-2 rounded-lg">
                        🔍
                    </button>
                </div>
            </div>

            {/* Right Section */}
            <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
                <div className="bg-green-700 rounded-lg p-4">
                    <img
                        src="/tutor-video-call.jpg"
                        alt="Tutor Video Call"
                        width={400}
                        height={300}
                        className="rounded-lg"
                    />
                    <p className="text-white mt-4">
                        Begin your learning journey today and experience the transformative power of personalized education.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default FirstSection