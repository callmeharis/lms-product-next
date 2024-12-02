import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-green-900 text-white py-10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:justify-between">
                    {/* Company Info */}
                    <div className="mb-6 md:mb-0">
                        <h1 className="text-2xl font-bold">Lernen</h1>
                        <p className="mt-4 text-gray-300">
                            Lernen is the top online tutoring platform for children, dedicated to connecting each student with their perfect tutor. With a network of over 1 million qualified tutors, we provide exceptional tutoring in every school subject.
                        </p>
                        <div className="mt-4 text-sm text-gray-400">
                            <p><span className="font-medium">📞</span> (316) 555-0116</p>
                            <p><span className="font-medium">📧</span> hello@gmail.com</p>
                            <p><span className="font-medium">📍</span> 4517 Washington Ave. Manchester, Kentucky 39495</p>
                        </div>
                    </div>

                    {/* Links Section */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div>
                            <h3 className="font-bold">Our Company</h3>
                            <ul className="mt-2 space-y-2 text-sm text-gray-300">
                                <li><a href="#">About</a></li>
                                <li><a href="#">Terms and Conditions</a></li>
                                <li><a href="#">Find Tutor</a></li>
                                <li><a href="#">Common FAQs</a></li>
                                <li><a href="#">How it Works</a></li>
                                <li><a href="#">Blogs</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold">Tutors Near You</h3>
                            <ul className="mt-2 space-y-2 text-sm text-gray-300">
                                <li><a href="#">Tutors in Afghanistan</a></li>
                                <li><a href="#">Tutors in Albania</a></li>
                                <li><a href="#">Tutors in Algeria</a></li>
                                <li><a href="#">Tutors in American Samoa</a></li>
                                <li><a href="#">Tutors in Andorra</a></li>
                                <li><a href="#">Tutors in Angola</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold">Our Services</h3>
                            <ul className="mt-2 space-y-2 text-sm text-gray-300">
                                <li><a href="#">Online English Classes</a></li>
                                <li><a href="#">Online Math Classes</a></li>
                                <li><a href="#">Online Physics Classes</a></li>
                                <li><a href="#">Online Chemistry Classes</a></li>
                                <li><a href="#">Online Science Classes</a></li>
                                <li><a href="#">Online Computer Classes</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold">Get Mobile Apps</h3>
                            <p className="mt-2 text-sm text-gray-300">
                                Take education on the go. Get our mobile app for FREE on your Apple and Android devices.
                            </p>
                            <div className="mt-4">
                                <img src="/images/app-store.png" alt="App Store" className="h-8 mb-2" />
                                <img src="/images/google-play.png" alt="Google Play" className="h-8" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-gray-400">Copyright © 2024, All Rights Reserved.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" className="text-gray-400 hover:text-white">Terms of Use</a>
                        <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
