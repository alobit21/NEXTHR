import React from 'react';

const StatsCard = ({ value, description }) => (
  <div className="w-fit rounded-[25px] bg-white p-8">
    <div className="h-12">
      <svg
        className="h-full fill-white stroke-blue-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
        />
      </svg>
    </div>
    <div className="my-2">
      <h2 className="text-4xl font-bold"><span>{value}</span></h2>
    </div>
    <div>
      <p className="mt-2 font-sans text-base font-medium text-gray-500">{description}</p>
    </div>
  </div>
);

const Page = () => {
  return (
    <div className="bg-blue-500 p-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      <StatsCard value="2680" description="Put The Client First" />
      <StatsCard value="2680" description="Put The Client First" />
      <StatsCard value="2680" description="Put The Client First" />
    </div>
  );
};

export default Page;
