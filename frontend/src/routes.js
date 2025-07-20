// src/routes.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import UserTablePage from './pages/UserTablePage';
import ProtectedRoute from './utils/ProtectedRoute';

export default function AppRoutes({ toggleMode, mode }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard toggleMode={toggleMode} mode={mode} />
          </ProtectedRoute>
        } />
        <Route path="/user-list" element={
          <ProtectedRoute>
            <UserTablePage />
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}
