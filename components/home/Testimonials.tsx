import React from "react";

interface Testimonial {
    name: string;
    role: string;
    companyLogo: string;
    feedback: string;
    rating: number;
    avatar: string;
}

const testimonials: Testimonial[] = [
    {
        name: "Arlene M",
        role: "Agile District",
        companyLogo: "/logos/agile.png",
        feedback:
            "We have tried several tutoring platforms, but none compare to Lernen. The tutors are top-notch, and the booking process is incredibly smooth.",
        rating: 4,
        avatar: "/avatars/arlene.png",
    },
    {
        name: "Marvin M",
        role: "Tutoring Specialist",
        companyLogo: "/logos/tutoring.png",
        feedback:
            "Lernen has been a game-changer for our students. Our students' grades have improved significantly since we started using this platform.",
        rating: 5,
        avatar: "/avatars/marvin.png",
    },
    {
        name: "Devon L",
        role: "Classroom Teacher",
        companyLogo: "/logos/teacher.png",
        feedback:
            "Lernen is a fantastic resource for our students. The diverse range of tutors ensures that we can find the perfect match for each student's needs.",
        rating: 4,
        avatar: "/avatars/devon.png",
    },
    {
        name: "Ronald R",
        role: "Educational Consultant",
        companyLogo: "/logos/consultant.png",
        feedback:
            "Lernen is a dependable and effective tool for our agency, offering knowledgeable and dedicated tutors.",
        rating: 5,
        avatar: "/avatars/ronald.png",
    },
    {
        name: "Courtney H",
        role: "School Counselor",
        companyLogo: "/logos/counselor.png",
        feedback:
            "We're delighted with Lernen; its top-notch tutors and user-friendly platform have greatly boosted our students.",
        rating: 5,
        avatar: "/avatars/courtney.png",
    },
    {
        name: "Darlene R",
        role: "Academic Advisor",
        companyLogo: "/logos/advisor.png",
        feedback:
            "Our experience with Lernen has been outstanding. The platform is user-friendly, and the tutors are highly qualified.",
        rating: 5,
        avatar: "/avatars/darlene.png",
    },
];

const Testimonials: React.FC = () => {
    return (
        <div className="py-12 bg-gray-50">
            <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
                What Our Users Are Saying
            </h2>
            <p className="text-center text-gray-500 mb-12">
                Discover how Lernen is making a difference in the lives of students
                and educational institutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center text-center"
                    >
                        <img
                            src={testimonial.avatar}
                            alt={`${testimonial.name}'s Avatar`}
                            className="w-16 h-16 rounded-full mb-4"
                        />
                        <h3 className="text-lg font-semibold text-gray-800">
                            {testimonial.name}
                        </h3>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                        <img
                            src={testimonial.companyLogo}
                            alt={`${testimonial.role} Logo`}
                            className="w-10 h-10 my-3"
                        />
                        <p className="text-gray-600 mb-4">{testimonial.feedback}</p>
                        <div className="flex space-x-1">
                            {[...Array(5)].map((_, starIndex) => (
                                <span
                                    key={starIndex}
                                    className={`text-yellow-400 ${starIndex < testimonial.rating ? "" : "opacity-50"
                                        }`}
                                >
                                    ★
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
