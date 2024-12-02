const ProvideFeedback = () => {
    return (
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
            <div className="text-center md:text-left">
                <h2 className="text-xl font-semibold mb-2">Provide Feedback</h2>
                <p className="text-gray-600 mb-4">
                    After your lesson, complete a quick feedback form to share your thoughts and rate your experience.
                    Your feedback helps us improve and ensures the best learning environment for everyone.
                </p>
            </div>
            <div className="flex-shrink-0">
                <img
                    src="/images/feedback.png" // Replace with your actual image path
                    alt="Provide Feedback Illustration"
                    className="w-64 h-64"
                />
            </div>
        </div>
    );
};

export default ProvideFeedback;
