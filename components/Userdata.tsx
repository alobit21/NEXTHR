'use client'
import React, { useState } from 'react';

const Userdata = ({ user }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    Username: user.Username,
    Email: user.Email,
    Password: user.Password,
    Phone: user.Phone,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Updated user information:', formData);
    setIsModalOpen(false); // Close the modal after submitting the form
  };

  return (
    <div>
      <table className="table w-full">
        <tbody>
          <tr>
            <td className="font-bold">Username</td>
            <td>
              <input
                type="text"
                value={user.Username}
                className="input input-bordered w-full"
                readOnly
              />
            </td>
          </tr>
          <tr>
            <td className="font-bold">Email</td>
            <td>
              <input
                type="email"
                value={user.Email}
                className="input input-bordered w-full"
                readOnly
              />
            </td>
          </tr>
          <tr>
            <td className="font-bold">Password</td>
            <td>
              <input
                type="password"
                value={user.Password}
                className="input input-bordered w-full"
                readOnly
              />
            </td>
          </tr>
          <tr>
            <td className="font-bold">Phone</td>
            <td>
              <input
                type="text"
                value={user.Phone}
                className="input input-bordered w-full"
                readOnly
              />
            </td>
          </tr>
        </tbody>
      </table>

      <div className="text-right mt-4">
        <button
          className="btn btn-primary"
          onClick={() => setIsModalOpen(true)}
        >
          Update
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg mb-4">Update Information</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Username
                </label>
                <input
                  type="text"
                  name="Username"
                  value={formData.Username}
                  onChange={handleInputChange}
                  className="input input-bordered w-full"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="Email"
                  value={formData.Email}
                  onChange={handleInputChange}
                  className="input input-bordered w-full"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="Password"
                  value={formData.Password}
                  onChange={handleInputChange}
                  className="input input-bordered w-full"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Phone
                </label>
                <input
                  type="text"
                  name="Phone"
                  value={formData.Phone}
                  onChange={handleInputChange}
                  className="input input-bordered w-full"
                />
              </div>

              <div className="modal-action">
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
                <button
                  type="button"
                  className="btn"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Userdata;
