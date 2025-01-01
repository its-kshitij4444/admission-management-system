import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import StudentRegistrationForm from './components/StudentRegistrationForm';
import AdminDashboard from './components/AdminDashboard';
import AdmissionStatus from './components/AdmissionStatus';
import Login from './components/Login';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  // Check the stored userRole in localStorage when the app loads
  useEffect(() => {
    const userRole = localStorage.getItem('userRole');
    if (userRole === 'Admin') {
      setIsAdmin(true);
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<StudentRegistrationForm />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute isAdmin={isAdmin}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/status" element={<AdmissionStatus />} />
          <Route path="/login" element={<Login setIsAdmin={setIsAdmin} />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
