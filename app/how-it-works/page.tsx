import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import FindTutor from '../../components/how-it-works/Find-Tutor';
import BookLesson from '../../components/how-it-works/Book-Lesson';
import AttendLesson from '../../components/how-it-works/AttendLesson';
import ProvideFeedback from '../../components/how-it-works/ProvideFeedback';
import VisionSection from '../../components/how-it-works/VisionSection';
import React from 'react'

const page = () => {
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
            <main className="min-h-screen bg-gray-50 text-gray-800">
                {/* Header Section */}
                <section className="bg-white py-12 text-center shadow-sm">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Let’s join our community today
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                        Join our community to either share your expertise as a tutor or enhance your
                        skills as a student. Connect, learn, and grow with us today.
                    </p>
                    <div className="mt-6 flex justify-center gap-4">
                        <button className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600">
                            As a student
                        </button>
                        <button className="px-6 py-2 bg-gray-100 text-gray-800 font-semibold rounded-lg hover:bg-gray-200">
                            As a tutor
                        </button>
                    </div>
                </section>

                {/* Sign-Up Section */}
                <section className="mx-auto max-w-4xl px-6 py-16">
                    <div className="flex flex-col items-center md:flex-row md:gap-12">
                        <div className="flex-shrink-0">
                            <div className="rounded-full bg-green-100 p-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-8 w-8 text-green-600"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 11c2.21 0 4-1.79 4-4S14.21 3 12 3 8 4.79 8 7s1.79 4 4 4zM4 21v-2c0-2.21 3.582-4 8-4s8 1.79 8 4v2"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="mt-6 text-center md:mt-0 md:text-left">
                            <h2 className="text-2xl font-bold text-gray-900">
                                Sign Up
                            </h2>
                            <p className="mt-4 text-gray-600">
                                Fill in your details and set your learning preferences to create a
                                profile tailored to your educational needs. This will help match you
                                with the most suitable tutors and optimize your learning experience.
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <main className="min-h-screen bg-gray-50 flex flex-col items-center p-8 space-y-12">
                <FindTutor />
                <BookLesson />
            </main>

            <main className="min-h-screen bg-gray-50 flex flex-col items-center p-8 space-y-12">
                <AttendLesson />
                <ProvideFeedback />
            </main>
            <main className="min-h-screen bg-white flex flex-col items-center">
                <VisionSection />
            </main>
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