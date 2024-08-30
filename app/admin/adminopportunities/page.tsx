'use client'
import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

const Page = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [currentOpportunity, setCurrentOpportunity] = useState<number | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<boolean>(false);
  const [opportunityToDelete, setOpportunityToDelete] = useState<number | null>(null);

  const openModal = (opportunityId: number) => {
    setCurrentOpportunity(opportunityId);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setFeedback('');
    setCurrentOpportunity(null);
  };

  const handleFeedbackChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle the feedback submission logic here
    console.log('Feedback submitted for opportunity:', currentOpportunity, 'Feedback:', feedback);
    closeModal();
  };

  const handleDelete = (id: number) => {
    setOpportunityToDelete(id);
    setConfirmDelete(true);
  };

  const confirmDeleteAction = () => {
    // Handle the delete logic here
    console.log('Opportunity deleted with id:', opportunityToDelete);
    setConfirmDelete(false);
    setOpportunityToDelete(null);
  };

  const cancelDeleteAction = () => {
    setConfirmDelete(false);
    setOpportunityToDelete(null);
  };

  return (
    <div className="p-4 text-black">
      {/* Opportunity Table */}
      <div className="overflow-x-auto">
        <table className="table w-full min-w-full">
          {/* head */}
          <thead className='text-black'>
            <tr>
              <th>Opportunity ID</th>
              <th>Opportunity Name</th>
              <th>Deadline</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>1</td>
              <td>Opportunity One</td>
              <td>2024-09-01</td>
              <td>Open</td>
              <td>
                <button onClick={() => handleDelete(1)} className="btn btn-link p-0">
                  <FaTrash className="text-red-500 hover:text-red-700" />
                </button>
              </td>
            </tr>
            {/* row 2 */}
            <tr>
              <td>2</td>
              <td>Opportunity Two</td>
              <td>2024-10-15</td>
              <td>Closed</td>
              <td>
                <button onClick={() => handleDelete(2)} className="btn btn-link p-0">
                  <FaTrash className="text-red-500 hover:text-red-700" />
                </button>
              </td>
            </tr>
            {/* row 3 */}
            <tr>
              <td>3</td>
              <td>Opportunity Three</td>
              <td>2024-11-30</td>
              <td>Pending</td>
              <td>
                <button onClick={() => handleDelete(3)} className="btn btn-link p-0">
                  <FaTrash className="text-red-500 hover:text-red-700" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* DaisyUI Modal for Feedback */}
      <input type="checkbox" id="feedback-modal" className="modal-toggle" checked={modalIsOpen} readOnly />

      <div className={`modal ${modalIsOpen ? 'modal-open' : ''}`}>
        <div className="modal-box max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto p-4">
          <h2 className="text-lg font-bold mb-4">Edit Feedback for Opportunity {currentOpportunity}</h2>
          <form onSubmit={handleSubmit}>
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
              <label htmlFor="feedback-modal" className="btn" onClick={closeModal}>Close</label>
            </div>
          </form>
        </div>
      </div>

      {/* DaisyUI Modal for Delete Confirmation */}
      <input type="checkbox" id="delete-modal" className="modal-toggle" checked={confirmDelete} readOnly />

      <div className={`modal ${confirmDelete ? 'modal-open' : ''}`}>
        <div className="modal-box max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto p-4">
          <h2 className="text-lg font-bold mb-4">Confirm Deletion</h2>
          <p className="mb-4">Are you sure you want to delete this opportunity?</p>
          <div className="modal-action">
            <button className="btn btn-primary" onClick={confirmDeleteAction}>Yes, Delete</button>
            <label htmlFor="delete-modal" className="btn" onClick={cancelDeleteAction}>Cancel</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
