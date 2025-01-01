import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isAdmin, setIsAdmin] = useState(false);

  // Check the stored userRole in localStorage on mount
  useEffect(() => {
    const userRole = localStorage.getItem('userRole');
    if (userRole === 'Admin') {
      setIsAdmin(true);
    }
  }, []);

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          FuturEdge College
        </div>
        <div>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-white hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/register" className="text-white hover:text-gray-300">
                Register
              </Link>
            </li>
            <li>
              <Link to="/login" className="text-white hover:text-gray-300">
                Login
              </Link>
            </li>
            <li>
            <Link to="/status" className="text-white hover:text-gray-300">
                Admission Status
              </Link>
            </li>
            <li>
              <Link to="/admin" className="text-white hover:text-gray-300">
                Admin Dashboard
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}