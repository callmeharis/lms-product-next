const VisionSection = () => {
    return (
        <section className="flex flex-col md:flex-row items-center bg-gray-50 p-8 rounded-lg shadow-md space-y-6 md:space-y-0 md:space-x-8">
            {/* Left Side: Video or Image */}
            <div className="relative w-full md:w-1/2">
                <img
                    src="/images/vision-video-placeholder.jpg" // Replace with your actual image or video path
                    alt="Vision Video"
                    className="w-full h-auto rounded-lg"
                />
                <button className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-gray-800 text-white w-16 h-16 flex items-center justify-center rounded-full opacity-75 hover:opacity-100">
                        ▶
                    </div>
                </button>
            </div>

            {/* Right Side: Vision Content */}
            <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
                <h2 className="text-3xl font-bold text-gray-800">Our Vision. Drive Learning Growth</h2>
                <p className="text-gray-600">
                    To be the leading global platform for personalized education, where every student has access to the
                    highest quality tutoring and every tutor can reach and impact learners across the globe, creating
                    a future where education is tailored, accessible, and transformative for all.
                </p>

                <ul className="space-y-2 text-gray-800">
                    <li className="flex items-start">
                        <span className="text-orange-500 mr-2">★</span> Accessible Education for All
                    </li>
                    <li className="flex items-start">
                        <span className="text-orange-500 mr-2">★</span> Empowering Tutors Globally
                    </li>
                    <li className="flex items-start">
                        <span className="text-orange-500 mr-2">★</span> Transformative Learning Experiences
                    </li>
                </ul>

                <button className="px-6 py-2 bg-orange-500 text-white rounded-full font-medium hover:bg-orange-600">
                    Discover More
                </button>
            </div>
        </section>
    );
};

export default VisionSection;
