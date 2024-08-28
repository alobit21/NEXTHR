// components/ApplicationTable.js
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
    <div className="overflow-x-auto">
      <table className="table w-full border-separate border-spacing-0 border border-gray-300">
        <thead>
          <tr className="bg-gray-100 border-b border-gray-300">
            <th className="px-4 py-2">ApplicationID</th>
            <th className="px-4 py-2">ApplicationDate</th>
            <th className="px-4 py-2">ApplicationPosition</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app, index) => (
            <tr key={index} className="border-b border-gray-300">
              <td className="px-4 py-2">{app.ApplicationID}</td>
              <td className="px-4 py-2">{app.ApplicationDate}</td>
              <td className="px-4 py-2">{app.ApplicationPosition}</td>
              <td className="px-4 py-2">
                <span
                  className={`badge ${
                    app.Status === 'Approved'
                      ? 'badge-success'
                      : app.Status === 'Pending'
                      ? 'badge-warning'
                      : 'badge-error'
                  }`}
                >
                  {app.Status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicationTable;
