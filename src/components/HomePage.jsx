import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Welcome to FuturEdge College of Science and Technology
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Empowering the next generation of innovators and leaders.
        </p>
        <div className="flex justify-center space-x-6">
          <Link
            to="/register"
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Register Now
          </Link>
          <Link
            to="/login"
            className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
