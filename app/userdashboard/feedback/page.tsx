import React from 'react';

const applications = [
  {
    ApplicationID: 'A001',
    ApplicationDate: '2024-08-01',
    ApplicationPosition: 'Frontend Developer',
    Status: 'Pending',
  },
  {
    ApplicationID: 'A002',
    ApplicationDate: '2024-08-15',
    ApplicationPosition: 'Backend Developer',
    Status: 'Approved',
  },
  // Add more data as needed
];

const ApplicationTable = () => {
  return (
    <div className="overflow-x-auto bg-gray-300 md:space-y-2 text-black mt-4">
      <table className="min-w-full hidden md:table text-black border-separate border-spacing-0 border border-gray-300">
        <thead>
          <tr className="bg-gray-100 border-b text-xl text-black border-gray-300">
            <th className="px-4 py-2 text-left  text-black">ApplicationID</th>
            <th className="px-4 py-2 text-left">ApplicationDate</th>
            <th className="px-4 py-2 text-left">ApplicationPosition</th>
            <th className="px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app, index) => (
            <tr key={index} className="border-b text-black border-gray-300">
              <td className="px-4 py-2">{app.ApplicationID}</td>
              <td className="px-4 py-2">{app.ApplicationDate}</td>
              <td className="px-4 py-2">{app.ApplicationPosition}</td>
              <td className="px-4 py-2">{app.Status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile view */}
      <div className="md:hidden">
        {applications.map((app, index) => (
          <div key={index} className="mb-4 border border-gray-300 rounded-lg p-4">
            <div className="flex justify-between mb-2">
              <span className="font-bold">ApplicationID:</span>
              <span>{app.ApplicationID}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-bold">ApplicationDate:</span>
              <span>{app.ApplicationDate}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-bold">ApplicationPosition:</span>
              <span>{app.ApplicationPosition}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold">Status:</span>
              <span>{app.Status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicationTable;
