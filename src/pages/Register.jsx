// src/pages/Register.jsx
import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../redux/userThunk';
// import { registerUser } from '../redux/userSlice';
import NavBar from '../components/NavBar';

const Register = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  console.log('Register.jsx: user from Redux:', user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resultAction = await dispatch(registerUser({ name, phone }));
      if (resultAction.payload) {
        localStorage.setItem('user', JSON.stringify(resultAction.payload));
      }
      navigate('/dashboard');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <>
      <NavBar />
      <Box sx={{ maxWidth: 400, mx: 'auto', mt: 8 }}>
        <Typography variant="h5" mb={2}>הרשמה</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="שם"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="טלפון"
            fullWidth
            margin="normal"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
            הירשם
          </Button>
        </form>
      </Box>
    </>
  );
};

export default Register;

