import React, { useState } from 'react';

export default function AdmissionStatus() {
  const [status, setStatus] = useState(null);

  // Sample function to simulate checking the admission status
  const checkStatus = (email) => {
    // Example logic: This should be replaced by actual backend logic.
    if (email === 'john.doe@example.com') {
      setStatus('Approved');
    } else if (email === 'jane.smith@example.com') {
      setStatus('Pending');
    } else {
      setStatus('Not Found');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Check Admission Status
        </h2>
        
        <div className="mb-4">
          <label className="block text-gray-700">Enter your Email Address</label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => checkStatus(e.target.value)}
            placeholder="Enter Email"
          />
        </div>

        <div className="mt-4 text-center">
          {status && (
            <p className={`text-lg font-semibold ${status === 'Approved' ? 'text-green-500' : status === 'Pending' ? 'text-yellow-500' : 'text-red-500'}`}>
              {status}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
