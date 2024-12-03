import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
    const educators = [
        {
            name: 'Cynthia Hunter',
            hourlyRate: '$40.00/hr',
            rating: '5.0/5.0',
            reviews: '1 review',
            activeStudents: '0 Active Students',
            image: '/educator1.jpg', // Replace with the actual image file in the public folder
        },
        {
            name: 'Dewayne Beaudreau',
            hourlyRate: '$40.00/hr',
            rating: '4.0/5.0',
            reviews: '1 review',
            activeStudents: '0 Active Students',
            image: '/educator2.jpg',
        },
        {
            name: 'Arianne Kearns',
            hourlyRate: '$40.00/hr',
            rating: '4.0/5.0',
            reviews: '1 review',
            activeStudents: '0 Active Students',
            image: '/educator3.jpg',
        },
        {
            name: 'Steven Ford',
            hourlyRate: '$20.00/hr',
            rating: '3.9/5.0',
            reviews: '100 reviews',
            activeStudents: '0 Active Students',
            image: '/educator4.jpg',
        },
    ];

    const reviews = [
        {
            name: "Arlene M",
            role: "Agile District",
            text: "We have tried several tutoring platforms, but none compare to Lernen. The tutors are top-notch, and the booking process is incredibly easy.",
            stars: 5,
            image: "/path-to-image1.jpg", // Replace with actual image path
        },
        {
            name: "Marvin M",
            role: "Tutoring Specialist",
            text: "Lernen has been a game-changer for our students. The variety of tutors and the ease of booking sessions make it a breeze for parents and students alike.",
            stars: 5,
            image: "/path-to-image2.jpg", // Replace with actual image path
        },
        {
            name: "Devon L",
            role: "Classroom Teacher",
            text: "Lernen is a fantastic resource for our students. The diverse range of tutors ensures that we can find the perfect match for each student.",
            stars: 5,
            image: "/path-to-image3.jpg", // Replace with actual image path
        },
        {
            name: "Ronald R",
            role: "Educational Consultant",
            text: "Lernen is a dependable and effective tool for our agency, offering knowledgeable and dedicated tutors.",
            stars: 5,
            image: "/path-to-image4.jpg", // Replace with actual image path
        },
        {
            name: "Courtney H",
            role: "School Counselor",
            text: "We’re delighted with Lernen. Its top-notch tutors and user-friendly platform have greatly boosted our students.",
            stars: 5,
            image: "/path-to-image5.jpg", // Replace with actual image path
        },
        {
            name: "Darlene R",
            role: "Academic Advisor",
            text: "Our experience with Lernen has been outstanding. The platform is user-friendly, and the tutors are highly qualified.",
            stars: 5,
            image: "/path-to-image6.jpg", // Replace with actual image path
        },
    ];
    return (
        <>
            <Navbar />
            <main className="bg-gray-50 min-h-screen text-gray-800">
                {/* Hero Section */}
                <section className="py-10 text-center">
                    <h1 className="text-4xl font-bold">Empowering learners worldwide</h1>
                    <p className="text-lg mt-4">
                        We are dedicated to providing personalized online tutoring experiences that unlock every learner's potential.
                    </p>
                </section>

                {/* Commitment Section */}
                <section className="bg-white py-16 px-6">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-2xl font-semibold text-center mb-8">Our Commitment: Empowering Learners</h2>
                        <p className="text-center mb-10 text-gray-600">
                            To empower learners of all ages and backgrounds by connecting them with expert tutors worldwide, fostering personalized
                            and effective learning experiences that inspire growth, confidence, and lifelong success.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {/* Feature Cards */}
                            <div className="flex flex-col items-center text-center bg-gray-100 p-6 rounded-lg shadow">
                                <span className="text-xl font-bold text-blue-500">Global Reach and Inclusivity</span>
                                <p className="mt-2 text-sm text-gray-500">
                                    Connecting learners with expert tutors for equal education access.
                                </p>
                            </div>
                            <div className="flex flex-col items-center text-center bg-gray-100 p-6 rounded-lg shadow">
                                <span className="text-xl font-bold text-blue-500">Personalized Learning Journeys</span>
                                <p className="mt-2 text-sm text-gray-500">
                                    Creating customized learning experiences tailored to each student&apos;s needs.
                                </p>
                            </div>
                            <div className="flex flex-col items-center text-center bg-gray-100 p-6 rounded-lg shadow">
                                <span className="text-xl font-bold text-blue-500">Building a Community of Excellence</span>
                                <p className="mt-2 text-sm text-gray-500">
                                    Fostering a vibrant community of learners and educators for lifelong growth.
                                </p>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="mt-10 flex justify-center gap-8">
                            <div className="text-center">
                                <span className="text-4xl font-bold text-green-600">40+</span>
                                <p className="mt-2 text-gray-600">Active Courses</p>
                            </div>
                        </div>

                        {/* Image and Badge */}
                        <div className="mt-16 relative flex justify-center">
                            <img
                                src="/group-learning.jpg" // Replace with your image URL
                                alt="Group learning"
                                width={400}
                                height={250}
                                className="rounded-lg"
                            />
                            <div className="absolute -top-6 right-10 bg-blue-100 text-blue-500 text-xs px-3 py-1 rounded-full">
                                World&apos;s Largest Online Learning Platform
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <section className="bg-gray-50 py-16 px-6">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
                    {/* Video/Image Section */}
                    <div className="relative w-full md:w-1/2 h-64 md:h-auto">
                        {/* Placeholder for video or image */}
                        <img
                            src="/online-tutor.jpg" // Replace with your image path in the public folder
                            alt="Online Tutor"
                            width={600}
                            height={400}
                            className="rounded-lg object-cover"
                        />
                        {/* Play button overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-lg">
                            <button
                                className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition"
                                aria-label="Play Video"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-8 h-8 text-orange-500"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v18l15-9L5 3z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Text Section */}
                    <div className="mt-10 md:mt-0 md:ml-10 w-full md:w-1/2">
                        <h2 className="text-2xl font-semibold text-gray-800">Our Vision. Drive Learning Growth</h2>
                        <p className="mt-4 text-gray-600">
                            To be the leading global platform for personalized education, where every student has access to the highest quality
                            tutoring and every tutor can reach and impact learners across the globe, creating a future where education is tailored,
                            accessible, and transformative for all.
                        </p>

                        <ul className="mt-6 space-y-4">
                            <li className="flex items-start">
                                <span className="text-orange-500 font-bold text-lg mr-2">✦</span>
                                <p className="text-gray-600">
                                    <strong>Accessible Education for All:</strong> Empowering students to learn from the best, anywhere.
                                </p>
                            </li>
                            <li className="flex items-start">
                                <span className="text-orange-500 font-bold text-lg mr-2">✦</span>
                                <p className="text-gray-600">
                                    <strong>Empowering Tutors Globally:</strong> Enabling tutors to reach and inspire students across the globe.
                                </p>
                            </li>
                            <li className="flex items-start">
                                <span className="text-orange-500 font-bold text-lg mr-2">✦</span>
                                <p className="text-gray-600">
                                    <strong>Transformative Learning Experiences:</strong> Shaping a future of personalized, impactful education for all.
                                </p>
                            </li>
                        </ul>

                        <button
                            className="mt-8 px-6 py-3 bg-orange-500 text-white font-medium rounded-lg shadow hover:bg-orange-600 transition"
                            aria-label="Discover More"
                        >
                            Discover More
                        </button>
                    </div>
                </div>
            </section>
            <section className="bg-gray-50 py-16 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-lg text-green-600 font-semibold">Experienced Tutors</h2>
                    <h3 className="mt-2 text-2xl font-bold text-gray-800">Meet Our Top Educators</h3>
                    <p className="mt-4 text-gray-600">
                        Discover how Lernen is making a difference in the lives of students and educational institutions. Hear from our satisfied
                        users:
                    </p>

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {educators.map((educator, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
                            >
                                <img
                                    src={educator.image}
                                    alt={educator.name}
                                    width={300}
                                    height={300}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4 text-left">
                                    <h4 className="text-lg font-bold text-gray-800">{educator.name}</h4>
                                    <p className="text-gray-600">{educator.hourlyRate}</p>
                                    <div className="mt-2 flex items-center text-yellow-500">
                                        <span className="font-semibold">{educator.rating}</span>
                                        <span className="ml-1 text-sm text-gray-500">({educator.reviews})</span>
                                    </div>
                                    <p className="mt-2 text-sm text-gray-500">{educator.activeStudents}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <div className="min-h-screen bg-green-900 flex items-center justify-center">
                <div className="text-center text-white p-8">
                    <h2 className="text-3xl font-bold mb-4">Our Commitment to Excellence</h2>
                    <p className="text-lg mb-8">
                        These figures highlight our ongoing efforts to maintain high standards
                        and continuous improvement in all we do.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="bg-green-700 p-6 rounded-lg text-center">
                            <div className="text-2xl font-semibold">40+</div>
                            <p>Active subjects</p>
                        </div>
                        <div className="bg-green-700 p-6 rounded-lg text-center">
                            <div className="text-2xl font-semibold">124,234</div>
                            <p>Students enrolled</p>
                        </div>
                        <div className="bg-green-700 p-6 rounded-lg text-center">
                            <div className="text-2xl font-semibold">500+</div>
                            <p>Tutors available</p>
                        </div>
                        <div className="bg-green-700 p-6 rounded-lg text-center">
                            <div className="text-2xl font-semibold">56,234</div>
                            <p>5 star reviews</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-light-cream min-h-screen flex flex-col items-center px-4 md:px-16 py-16">
                <h3 className="text-center text-sm text-green-700 font-semibold">
                    Real Feedback from Our Clients
                </h3>
                <h1 className="text-center text-2xl md:text-4xl font-bold mt-2">
                    What Our Users Are Saying
                </h1>
                <p className="text-center text-gray-600 mt-4 max-w-3xl">
                    Discover how Lernen is making a difference in the lives of students and
                    educational institutions. Hear from our satisfied users.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-full">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-start"
                        >
                            <p className="text-gray-700 text-sm">{review.text}</p>
                            <div className="mt-4 flex items-center gap-2">
                                {Array.from({ length: review.stars }, (_, i) => (
                                    <span key={i} className="text-yellow-500 text-xl">★</span>
                                ))}
                            </div>
                            <div className="mt-6 flex items-center gap-4">
                                <img
                                    src={review.image}
                                    alt={review.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <h4 className="text-md font-semibold">{review.name}</h4>
                                    <p className="text-sm text-gray-500">{review.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </>
    )
}

export default page