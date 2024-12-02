import React from 'react';

interface TutorCardProps {
    name: string;
    title: string;
    price: string;
    rating: string;
    reviews: string;
    activeStudents: string;
    profileImage: string;
    videoThumbnail: string;
}

const TutorCard: React.FC<TutorCardProps> = ({
    name,
    title,
    price,
    rating,
    reviews,
    activeStudents,
    profileImage,
    videoThumbnail,
}) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Video Thumbnail */}
            <div className="relative">
                <img
                    src={videoThumbnail}
                    alt={`${name} video`}
                    className="w-full h-40 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <button className="text-white text-2xl bg-red-600 p-3 rounded-full">
                        ▶
                    </button>
                </div>
            </div>

            {/* Card Content */}
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
                <p className="text-sm text-gray-500">{title}</p>
                <p className="text-sm font-medium text-gray-800 mt-2">{price}/hr</p>
                <div className="flex items-center mt-2 text-sm text-gray-500">
                    <span>⭐ {rating}</span>
                    <span className="ml-2">({reviews} reviews)</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">{activeStudents} Active Students</p>
                <button className="mt-4 bg-blue-500 text-white text-sm py-2 px-4 rounded hover:bg-blue-600">
                    View Profile
                </button>
            </div>
        </div>
    );
};

export default TutorCard;
