import React from 'react';
import { FaChartBar, FaUser, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
    const menuItems = [
        { name: 'Insights', icon: <FaChartBar />, path: '#' },
        { name: 'Site Management', icon: <FaChartBar />, path: '#' },
        { name: 'Taxonomies', icon: <FaChartBar />, path: '#' },
        { name: 'Language Translations', icon: <FaChartBar />, path: '#' },
        { name: 'Manage Addons', icon: <FaChartBar />, path: '#' },
        { name: 'Upgrade', icon: <FaChartBar />, path: '#' },
        { name: 'Users', icon: <FaUser />, path: '#' },
        { name: 'Identity Verification', icon: <FaChartBar />, path: '#' },
        { name: 'Invoices', icon: <FaChartBar />, path: '#' },
        { name: 'Bookings', icon: <FaChartBar />, path: '#' },
        { name: 'Transaction & Payments', icon: <FaChartBar />, path: '#' },
        { name: 'Manage Blogs', icon: <FaChartBar />, path: '#' },
        { name: 'Community', icon: <FaChartBar />, path: '#' },
        { name: 'Manage Courses', icon: <FaChartBar />, path: '#' },
        { name: 'Badges', icon: <FaChartBar />, path: '#' },
        { name: 'Disputes', icon: <FaChartBar />, path: '#' },
    ];

    return (
        <aside className="w-64 bg-white h-screen flex flex-col ml-2">
            <div className='  w-34 mt-6'><img src="https://amento-bucket-poc-2.s3.amazonaws.com/optionbuilder/uploads/logo-default.svg" alt="Lernen" /></div>
            <nav className="flex-grow mt-5">
                <ul className="space-y-1">
                    {menuItems.map((item, index) => (
                        <li key={index} className="flex items-center p-3 hover:bg-green-800  cursor-pointer hover:text-white">
                            {item.icon && <span className="mr-3">{item.icon}</span>}
                            <span className="text-gray-700 w-full hover:text-white">{item.name}</span>
                        </li>
                    ))}
                </ul>
            </nav>
            <div>
                <div className="bg-gray-100 rounded-md p-3 mb-4 shadow-md">
                    <span className="block text-gray-700 text-sm">Total Earned Commission</span>
                    <span className="block text-lg font-bold text-brand">$202.76</span>
                </div>
                <button className="mb-4 w-full flex items-center justify-center bg-red-200 text-red-600 font-bold py-2 rounded-md hover:bg-red-600 hover:text-white">
                    <FaSignOutAlt className="mr-2" />
                    Logout
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;

