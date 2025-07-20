import { useSelector, useDispatch } from 'react-redux';
import { deleteUser } from '../features/users/usersSlice';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Button
} from '@mui/material';
import React, { useEffect } from 'react';

const UserTable = () => {
  const users = useSelector((state) => state.users.users);
  const role = localStorage.getItem('role');
  const dispatch = useDispatch();

// useEffect(() => {
//   console.log("Users Data: ", users); // 👈 Check if deviceName is coming
// }, [users]);


  return (
    <>
      {users.length > 0 ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Device</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Series No</TableCell>
                <TableCell>Platform</TableCell>
                {role === 'admin' && <TableCell>Actions</TableCell>}
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.emp_id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.deviceName}</TableCell>
                  <TableCell>{user.location}</TableCell>
                  <TableCell>{user.seriesNo}</TableCell>
                  <TableCell>{user.platform}</TableCell>
                  {role === 'admin' && (
                    <TableCell>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => dispatch(deleteUser(user.id))}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <h2 style={{ textAlign: 'center'}}>No Users Added yet, please add some users.</h2>
      )}
    </>
  );
};

export default UserTable;
