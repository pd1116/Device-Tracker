// src/components/Header.jsx
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export default function Header({ toggleMode, mode }) {
  const navigate = useNavigate();
  const role = localStorage.getItem('role');

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <AppBar
      position="static"
      elevation={2}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6">📱 Device Tracker</Typography>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <IconButton color="inherit" onClick={toggleMode}>
            {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          <Typography variant="body2">Role: {role?.toUpperCase()}</Typography>
          <Button color="inherit" onClick={handleLogout}>Logout</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}
