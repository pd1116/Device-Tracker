import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addUser } from '../features/users/usersSlice';
import { TextField, Button, Paper, Box, Typography, Alert } from '@mui/material';

const UserForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ name: '', email: '', deviceName: '', emp_id: '', location: '', seriesNo: '', platform: '' });
  const [success, setSuccess] = useState(false); // ✅ new state for success message
  const [errors, setErrors] = useState({}); // ✅ new state for error messages

  const validate = () => {
    const newErrors = {};
    Object.keys(form).forEach((field) => {
      if (!form[field].trim()) {
        newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    dispatch(addUser({ ...form, id: Date.now() }));
    setForm({ name: '', email: '', deviceName: '', emp_id: '', location: '', seriesNo: '', platform: '' }); // Reset form fields
    // ✅ Show success message for 1 seconds
    setErrors({});
    setSuccess(true);
    setTimeout(() => setSuccess(false), 1500);
  };
 const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };
  return (
    <Paper elevation={3}>
      <Typography variant="h6" gutterBottom>Add User</Typography>
       {/* ✅ Success Alert */}
      {success && (
        <Alert severity="success" sx={{ mb: 2 }}>
          User added successfully!
        </Alert>
      )}

      <Box component="form" onSubmit={handleSubmit} Validate autoComplete="off">
       {[
          { label: 'Emp ID', name: 'emp_id' },
          { label: 'Name', name: 'name' },
          { label: 'Email', name: 'email' },
          { label: 'Device', name: 'deviceName' },
          { label: 'Location', name: 'location' },
          { label: 'Series No', name: 'seriesNo' },
          { label: 'Platform', name: 'platform' }
        ].map((field) => (
          <TextField
            key={field.name}
            fullWidth
            label={field.label}
            name={field.name}
            value={form[field.name]}
            onChange={handleChange}
            error={!!errors[field.name]}
            helperText={errors[field.name]}
            size="small"
            sx={{ mb: 1 }}
          />
        ))}
        <Button variant="contained" type="submit" >Add</Button>
      </Box>
    </Paper>
  );
};

export default UserForm;
