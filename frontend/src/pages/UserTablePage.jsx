// src/pages/UserTablePage.jsx
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import UserTable from '../components/UserTable';
import { fetchUsers } from '../features/users/usersSlice';

const UserTablePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const role= localStorage.getItem('role');

  useEffect(() => {
    dispatch(fetchUsers());
    console.log("Fetching users for role: ", role); // 👈 Debugging log
  }, [dispatch]);

  return (
    <Container>
      <Typography style={{textAlign: 'center'}} variant="h5" gutterBottom>
        Users List
      </Typography>

    {role === 'admin' && (
        <>
       <Box mb={2} display="flex" justifyContent="center">
        <Button variant="contained" onClick={() => navigate('/dashboard')}>
          Back to Dashboard
        </Button>
        </Box>
         </>
      )}
      <UserTable />
    </Container>
  );
};

export default UserTablePage;
