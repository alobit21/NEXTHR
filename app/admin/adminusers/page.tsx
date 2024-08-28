'use client'
import React, { useEffect, useState } from 'react';
import { Card, Typography } from "@material-tailwind/react";

// Table headers
const TABLE_HEAD = ["Name", "Email", "Password", "Actions"];

const TableWithDynamicRows = () => {
  // State to store table data
  const [tableRows, setTableRows] = useState([]);

  // Fetch data from a mock API
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await fetch('/api/getTableData');
        const data = await response.json();
        setTableRows(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableRows.map(({ id, name, job, date }) => (
            <tr key={id} className="even:bg-blue-gray-50/50">
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {name}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {job}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {date}
                </Typography>
              </td>
              <td className="p-4">
                <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                  Edit
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};

export default TableWithDynamicRows;
