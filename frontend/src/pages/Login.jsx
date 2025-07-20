// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Box
} from '@mui/material';

const users = [
  { username: 'admin', password: 'admin123', role: 'admin' },
  { username: 'user', password: 'user123', role: 'user' }
];

export default function Login() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const matchedUser = users.find(
      (u) => u.username === form.username && u.password === form.password
    );

    if (matchedUser) {
      localStorage.setItem('role', matchedUser.role);
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <>
    {/* Header at the very top */}
      <Box
        sx={{
          width: '100%',
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
          py: 2,
          mb: 4,
          textAlign: 'center',
          borderRadius: 1,
        }}
      >
        <Typography variant="h4">
          Welcome to Device Tracker System
        </Typography>
      </Box>
    <Container maxWidth="md">
      
      <Paper elevation={3} sx={{ p: 4, mt: 8 }}>
        <Typography variant="h5" gutterBottom>Login</Typography>
        <form onSubmit={handleLogin}>
          <TextField
            fullWidth
            margin="normal"
            label="Username"
            name="username"
            value={form.username}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
          {error && (
            <Typography color="error" variant="body2">{error}</Typography>
          )}
          <Box mt={2}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Login
            </Button>
          </Box>
        </form>
        {/* <Box mt={2}>
          <Typography variant="caption">
            Admin: admin/admin123 | User: user/user123
          </Typography>
        </Box> */}
      </Paper>
    </Container>
    </>
  );
}
