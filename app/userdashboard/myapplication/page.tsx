'use client'
import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';

const Page = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentUsername, setCurrentUsername] = useState('');
  const [feedback, setFeedback] = useState('');

  const openModal = (username: string) => {
    setCurrentUsername(username);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setFeedback('');
  };

  const handleFeedbackChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle the feedback submission logic here
    console.log('Feedback submitted:', feedback);
    closeModal();
  };

  return (
    <div className="p-4 text-black">
      <div className="overflow-x-auto">
        <table className="table w-full min-w-full">
          {/* head */}
          <thead className='text-black text-xl'>
            <tr>
              <th>Username</th>
              <th>Application Category</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>2024-08-28</td>
              <td>
                <button onClick={() => openModal('Cy Ganderton')} className="btn btn-link p-0">
                  <FaEdit className="text-blue-500 text-2xl hover:text-blue-700" />
                </button>
              </td>
            </tr>
            {/* row 2 */}
            <tr>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>2024-08-27</td>
              <td>
                <button onClick={() => openModal('Hart Hagerty')} className="btn btn-link p-0">
                  <FaEdit className="text-blue-500 text-2xl hover:text-blue-700" />
                </button>
              </td>
            </tr>
            {/* row 3 */}
            <tr>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>2024-08-26</td>
              <td>
                <button onClick={() => openModal('Brice Swyre')} className="btn btn-link p-0">
                  <FaEdit className="text-blue-500 text-2xl hover:text-blue-700" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* DaisyUI Modal */}
      <input type="checkbox" id="my-modal" className="modal-toggle" checked={modalIsOpen} readOnly />
      
      <div className={`modal ${modalIsOpen ? 'modal-open' : ''}`}>
        <div className="modal-box max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto p-4">
          <h2 className="text-lg font-bold mb-4">Edit Feedback for {currentUsername}</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Username:</span>
              </label>
              <input
                type="text"
                value={currentUsername}
                readOnly
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Feedback:</span>
              </label>
              <textarea
                value={feedback}
                onChange={handleFeedbackChange}
                className="textarea textarea-bordered w-full"
                rows={4}
              />
            </div>
            <div className="modal-action">
              <button type="submit" className="btn btn-primary">Submit</button>
              <label htmlFor="my-modal" className="btn" onClick={closeModal}>Close</label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
