// components/DashboardPage.tsx

import React, {ReactNode} from 'react';
import { FaDollarSign, FaUsers, FaHandshake, FaHourglassHalf } from "react-icons/fa";

interface MetricCardProps {
    title: string;
    value: string | number;
    bgColor?: string;
    valueColor?: string;
    icon?: ReactNode;
    iconBgColor?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, bgColor, valueColor, icon, iconBgColor }) => (
    <div className={`p-10 rounded-md ${bgColor || 'bg-white'} shadow-md flex flex-col`}>
        {icon && (
            <div
                className={`w-12 h-12 flex items-center justify-center rounded-xl mr-4 ${iconBgColor || 'bg-gray-100'}`}
            >
                {icon}
            </div>
        )}
        <div>
            <p className={`text-xl mt-2  font-bold ${valueColor || ''}`}>{value}</p>
            <h2 className="text-lg text-gray-400">{title}</h2>
        </div>
    </div>
);

interface UserComparisonProps {
    label: string;
    users: string;
}

const UserComparisonCard: React.FC<UserComparisonProps> = ({ label, users }) => (
    <div className="border p-4 rounded-md">
        <p className="text-md">{label}</p>
        <p className="text-sm font-bold">{users}</p>
    </div>
);

const DashboardPage: React.FC = () => {
    return (
        <>
            <div className='flex justify-between '>

                <h2>Insights</h2>
                <img className='rounded-xl w-10' src="https://amento-bucket-poc-2.s3.amazonaws.com/thumbnails/profile_images/Msbqe1728390739-34x34.png" alt="" />
            </div>
            <div className="mt-10 p-6 md:p-10 shadow-inner">
                <section>
                    <h2 className="text-xl font-bold">Revenue & Payment Metrics</h2>
                    <p className="mb-8">Track and manage your income effortlessly.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <MetricCard title="Platform Earnings" value="$75.00" bgColor='bg-[#e8e8ff]' valueColor='text-[#9851f4]' icon={<FaDollarSign className="text-green-600 text-2xl" />}  iconBgColor='bg-[#d2d1ff]' />
                        <MetricCard title="Tutor Payouts" value="$71.25" color-blue bgColor="bg-[#e2fff2]" valueColor='text-[#43c287]' icon={<FaHandshake className="text-blue-600 text-2xl" />} iconBgColor='bg-[#c0f2db]' />
                        <MetricCard title="Platform Commission" value="$3.75" bgColor="bg-[#fff1eb]" valueColor='text-[#ff9161]' icon={<FaHourglassHalf className="text-orange-500 text-2xl" />} iconBgColor='bg-[#ffc8b0]' />
                        <MetricCard title="Pending Payouts" value="$71.25" bgColor="bg-[#e1f0ff]" valueColor='text-[#78b9ff]' icon={<FaUsers className="text-red-500 text-2xl" />} iconBgColor='bg-[#cce5fe]' />
                    </div>
                </section>

                <section className="mt-10">
                    <h2 className="text-xl font-bold">Session Engagement</h2>
                    <p className="mb-8">Track session details effectively.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <MetricCard title="Total Sessions Booked" value="23" />
                        <MetricCard title="Completed Sessions" value="15" />
                        <MetricCard title="Rescheduled Sessions" value="0" />
                    </div>
                </section>

                <section className="mt-10">
                    <h2 className="text-xl font-bold">User Metrics & Activity</h2>
                    <p className="mb-8">Monitor user engagement metrics.</p>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        <MetricCard title="Total Users" value="28" />
                        <div className="border p-4 rounded-md">
                            <p className="text-xl">Monthly User Comparison</p>
                            <div className="grid grid-cols-2 gap-4 mt-4">
                                <UserComparisonCard label="This Month" users="2 Users +100%" />
                                <UserComparisonCard label="Last Month" users="0 Users" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mt-10">
                    <h2 className="text-xl font-bold">Breakdown</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                        <MetricCard title="Tutors" value="15" />
                        <MetricCard title="Students" value="13" />
                    </div>
                </section>
            </div>
        </>
    );
};

export default DashboardPage;

