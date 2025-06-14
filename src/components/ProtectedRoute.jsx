// src/components/ProtectedRoute.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.user.user); // או לפי המבנה שלך
  if (!user) {
    return <Navigate to="/register" />;
  }
  return children;
};

export default ProtectedRoute;