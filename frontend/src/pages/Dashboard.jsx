// src/pages/Dashboard.jsx
import Header from '../components/Header';
import UserForm from '../components/UserForm';
import UserTable from '../components/UserTable';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../features/users/usersSlice';
import { useNavigate } from 'react-router-dom';
import { Button, Box } from '@mui/material';
import UserTablePage from './UserTablePage';


export default function Dashboard({ toggleMode, mode }) {
  const role = localStorage.getItem('role');
  const dispatch = useDispatch();
    const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <Header toggleMode={toggleMode} mode={mode} />
      
      {role === 'admin' && (
        <>
        <h2 style={{ textAlign: 'center'}}>Welcome to Admin Dashboard</h2>
          <UserForm />
          {/* View User List Button */}
          <Box mt={2} textAlign="center">
            <Button variant="contained" onClick={() => navigate('/user-list')}>
              View User List
            </Button>
          </Box>
        </>
      )}
      {role === 'user' && (
        <>
        {/* <h2 style={{ textAlign: 'center'}}>Welcome to User Dashboard</h2> */}
          <UserTablePage/>
         </>
      )}
    </div>
  );
}
