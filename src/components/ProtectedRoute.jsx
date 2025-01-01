import React from 'react';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ isAdmin, children }) {
  if (!isAdmin) {
    // Redirect to the login page if not an admin
    return <Navigate to="/login" replace />;
  }

  // Render the children if admin is authenticated
  return children;
}
