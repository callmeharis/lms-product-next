import React from 'react';
import TutorCard from './TutorCard';

const TutorSection = () => {
    const tutors = [
        {
            name: 'Cynthia Hunter',
            title: 'Bachelor of Computer Science',
            price: '$40',
            rating: '5.0',
            reviews: '1',
            activeStudents: '0',
            profileImage: '/cynthia.jpg',
            videoThumbnail: '/video1.jpg',
        },
        {
            name: 'Steven Ford',
            title: 'Bachelor of Computer Science',
            price: '$20',
            rating: '3.9',
            reviews: '100',
            activeStudents: '0',
            profileImage: '/steven.jpg',
            videoThumbnail: '/video2.jpg',
        },
        {
            name: 'Swinney Swinney',
            title: 'Bachelor of Computer Science',
            price: '$40',
            rating: '4.0',
            reviews: '1',
            activeStudents: '0',
            profileImage: '/swinney.jpg',
            videoThumbnail: '/video3.jpg',
        },
        {
            name: 'Beau Simard',
            title: 'Bachelor of Computer Science',
            price: '$20',
            rating: '4.0',
            reviews: '1',
            activeStudents: '0',
            profileImage: '/beau.jpg',
            videoThumbnail: '/video4.jpg',
        },
        {
            name: 'Simonth Chapman',
            title: 'Bachelor of Computer Science',
            price: '$20',
            rating: '4.0',
            reviews: '1',
            activeStudents: '0',
            profileImage: '/simonth.jpg',
            videoThumbnail: '/video5.jpg',
        },
    ];

    return (
        <section className="bg-green-900 py-16 text-white">
            <div className="max-w-7xl mx-auto px-6">
                <header className="text-center mb-12">
                    <h4 className="text-sm font-semibold uppercase tracking-wide">Feature Tutors</h4>
                    <h2 className="text-3xl font-bold">Explore Our Handpicked Tutors</h2>
                    <p className="text-gray-300 mt-4">
                        Explore a wealth of articles, guides, tutorials, and more, curated by our experts to
                        enhance your learning experience.
                    </p>
                    <button className="mt-4 bg-orange-500 text-white text-sm py-2 px-6 rounded hover:bg-orange-600">
                        View All Tutors
                    </button>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {tutors.map((tutor, index) => (
                        <TutorCard key={index} {...tutor} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TutorSection;
