import React from 'react'

const FourthSection = () => {
    return (
        <section className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Card 1 */}
                <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-start">
                    <div className="mb-6">
                        <img
                            src="https://amento-bucket-poc-2.s3.amazonaws.com/optionbuilder/uploads/support.png"
                            alt="Support Illustration"
                            className="w-full max-w-[150px]"
                        />
                    </div>
                    <h4 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">24/7 Support</h4>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Comprehensive Support at Every Step</h2>
                    <p className="text-gray-600">
                        From the moment you join, we offer onboarding assistance to ensure a smooth start. Our technical support team is always ready to troubleshoot and resolve any issues.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-start">
                    <div className="mb-6">
                        <img
                            src="https://amento-bucket-poc-2.s3.amazonaws.com/optionbuilder/uploads/support.png"
                            alt="Guidance Illustration"
                            className="w-full max-w-[150px]"
                        />
                    </div>
                    <h4 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">User Guide</h4>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Experts Will Guide You to Mastery</h2>
                    <p className="text-gray-600">
                        Our expert tutors are committed to helping you achieve mastery in your chosen subjects. Experience the transformative power of expert guidance and reach your full potential with us.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default FourthSection