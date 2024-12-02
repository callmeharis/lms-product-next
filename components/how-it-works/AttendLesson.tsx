const AttendLesson = () => {
    return (
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex-shrink-0">
                <img
                    src="/images/attend-lesson.png" // Replace with your actual image path
                    alt="Attend Lesson Illustration"
                    className="w-64 h-64"
                />
            </div>
            <div className="text-center md:text-left">
                <h2 className="text-xl font-semibold mb-2">Attend the Lesson</h2>
                <p className="text-gray-600">
                    Log in at your scheduled time and join the session to start learning. Connect with your tutor
                    through Zoom for an engaging and interactive lesson.
                </p>
            </div>
        </div>
    );
};

export default AttendLesson;
