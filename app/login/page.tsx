import React from 'react';

const LoginPage = () => {
    return (
        <div className="flex h-screen">
            <div className="w-1/2 bg-green-700 text-white flex flex-col items-center justify-center p-8">
                <h1 className="text-4xl font-bold">Yes! we're making progress!</h1>
                <p className="text-lg mt-4">every minute & every second</p>
                <img src="/laptop-video.png" alt="Video Preview" className="mt-8 rounded-md shadow-md" />
                <p className="mt-4 text-center">
                    Begin your learning journey today and experience the transformative power of personalized education.
                </p>
            </div>
            <div className="w-1/2 bg-white flex flex-col items-center justify-center p-8">
                <h2 className="text-2xl font-semibold">Welcome back!</h2>
                <form className="mt-4 w-80 space-y-4">
                    <input
                        type="email"
                        placeholder="Email address"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2"
                    />
                    <div className="flex items-center justify-between">
                        <label>
                            <input type="checkbox" className="mr-2" />
                            Remember Me
                        </label>
                        <a href="/forgot-password" className="text-blue-500">Forgot Password?</a>
                    </div>
                    <button className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700">
                        Login
                    </button>
                </form>
                <p className="mt-4">
                    Don’t have an Account?{' '}
                    <a href="/signup" className="text-blue-500">
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
