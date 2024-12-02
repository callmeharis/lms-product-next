const FindTutor = () => {
    return (
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex-shrink-0">
                <img
                    src="/images/tutor-illustration.png" // Replace with your image
                    alt="Tutor Illustration"
                    className="w-64 h-64"
                />
            </div>
            <div className="text-center md:text-left">
                <h2 className="text-xl font-semibold mb-2">Find a Tutor</h2>
                <p className="text-gray-600">
                    Use filters to refine your search based on subject, level, pricing, location, and availability.
                    This allows you to view detailed tutor profiles that best match your learning needs.
                </p>
            </div>
        </div>
    );
};

export default FindTutor;
