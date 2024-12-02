const BookLesson = () => {
    return (
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
            <div className="text-center md:text-left">
                <h2 className="text-xl font-semibold mb-2">Book a Lesson</h2>
                <p className="text-gray-600 mb-4">
                    Choose a convenient time and book your lesson instantly.
                </p>
                <ul className="list-disc list-inside text-gray-600">
                    <li>Select an Available Time Slot</li>
                    <li>Click on the Desired Slot</li>
                    <li>Choose Session Type</li>
                </ul>
            </div>
            <div className="flex-shrink-0">
                <img
                    src="/images/calendar.png" // Replace with your image
                    alt="Calendar Illustration"
                    className="w-64 h-64"
                />
            </div>
        </div>
    );
};

export default BookLesson;
