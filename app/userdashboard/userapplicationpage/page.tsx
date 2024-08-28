'use client'
import { useState } from 'react';
import { FaPhoneAlt, FaCalendarAlt } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

const Form = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [applicationPosition, setApplicationPosition] = useState('');
  const [date, setDate] = useState('');
  const [currentPosition, setCurrentPosition] = useState('');
  const [resume, setResume] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="container mx-auto mt-4 rounded bg-white border-2 border-green-500 p-4 max-w-lg">
      <form onSubmit={handleSubmit} className="space-y-3 bg-white">
        <div className="form-control">
          <label htmlFor="phoneNumber" className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <div className="relative">
            <FaPhoneAlt className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-500" />
            <input
              id="phoneNumber"
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter your phone number"
              className="input input-bordered w-full pl-10"
              required
            />
          </div>
        </div>

        <div className="form-control">
          <label htmlFor="applicationPosition" className="label">
            <span className="label-text">Application Position</span>
          </label>
          <select
            id="applicationPosition"
            value={applicationPosition}
            onChange={(e) => setApplicationPosition(e.target.value)}
            className="select select-bordered w-full"
            required
          >
            <option value="" disabled>Select position</option>
            <option value="internship">Internship</option>
            <option value="job">Job</option>
          </select>
        </div>

        <div className="form-control">
          <label htmlFor="date" className="label">
            <span className="label-text">Date</span>
          </label>
          <div className="relative">
            <FaCalendarAlt className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-500" />
            <input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="input input-bordered w-full pl-10"
              required
            />
          </div>
        </div>

        <div className="form-control">
          <label htmlFor="currentPosition" className="label">
            <span className="label-text">Current Position</span>
          </label>
          <select
            id="currentPosition"
            value={currentPosition}
            onChange={(e) => setCurrentPosition(e.target.value)}
            className="select select-bordered w-full"
            required
          >
            <option value="" disabled>Select your current position</option>
            <option value="employee">Employee</option>
            <option value="self-employed">Self-Employed</option>
            <option value="student">Student</option>
          </select>
        </div>

        <div className="form-control">
          <label htmlFor="resume" className="label">
            <span className="label-text">Submit Resume/Cover Letter</span>
          </label>
          <input
            id="resume"
            type="file"
            onChange={(e) => setResume(e.target.files[0])}
            className="file-input file-input-bordered w-full"
            required
          />
        </div>

        <div className="form-control">
          <button type="submit" className="btn btn-primary w-full flex items-center justify-center">
            <IoIosMail className="mr-2" />
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
