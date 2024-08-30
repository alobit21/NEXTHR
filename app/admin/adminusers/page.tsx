import React from 'react'

const page = () => {
  return (
    <div className="overflow-x-auto text-black">
  <table className="table text-black">
    {/* head */}
    <thead className='bg-gray-300 text-black'>
      <tr>
        <th>SN</th>
        <th>Name</th>
        <th>Phone</th>

        <th>Job</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>0767897456 </td>

        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>0767897456 </td>

        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>0767897456 </td>

        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
    </tbody>
  </table>
</div>
  )
}

export default page
