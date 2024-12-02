// components/DashboardPage.tsx
import React from 'react';

interface MetricCardProps {
    title: string;
    value: string | number;
    bgColor?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, bgColor }) => (
    <div className={`p-4 rounded-md ${bgColor || 'bg-white'} shadow-md`}>
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-xl mt-2">{value}</p>
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
        <div className='flex justify-between'>

        <h2>Insights</h2>
        <img className='rounded-xl w-10' src="https://amento-bucket-poc-2.s3.amazonaws.com/thumbnails/profile_images/Msbqe1728390739-34x34.png" alt="" />
        </div>
        <div className="mt-10 p-6 md:p-10 shadow-inner">
            <section>
                <h2 className="text-xl font-bold">Revenue & Payment Metrics</h2>
                <p className="mb-8">Track and manage your income effortlessly.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <MetricCard title="Platform Earnings" value="$4,317.82" bgColor="bg-purple-100" />
                    <MetricCard title="Tutor Payouts" value="$3,598.32" bgColor="bg-green-100" />
                    <MetricCard title="Platform Commission" value="$82.00" bgColor="bg-yellow-100" />
                    <MetricCard title="Pending Payouts" value="$641.25" bgColor="bg-blue-200" />
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

