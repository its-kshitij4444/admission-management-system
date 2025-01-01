import React, { useState } from 'react';

export default function AdminDashboard() {
  // Sample data for registered students (you can replace this with actual backend data later)
  const [students, setStudents] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      course: 'Computer Science',
      status: 'Pending',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      course: 'Mechanical Engineering',
      status: 'Approved',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      course: 'Civil Engineering',
      status: 'Pending',
    },
  ]);

  const handleStatusChange = (id) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id
          ? { ...student, status: student.status === 'Pending' ? 'Approved' : 'Pending' }
          : student
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Admin Dashboard</h2>

        <div className="overflow-x-auto bg-white rounded-lg shadow-md">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">Course</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id} className="border-t">
                  <td className="px-4 py-2">{student.name}</td>
                  <td className="px-4 py-2">{student.email}</td>
                  <td className="px-4 py-2">{student.course}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`px-4 py-1 rounded-full ${
                        student.status === 'Approved' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-black'
                      }`}
                    >
                      {student.status}
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleStatusChange(student.id)}
                      className="px-4 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                      Toggle Status
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
