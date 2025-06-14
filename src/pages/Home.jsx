import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import NavBar from '../components/NavBar'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <>
      <NavBar />
      <Box sx={{ textAlign: 'center', mt: 10 }}>
        <Typography variant="h3" gutterBottom>
          ברוכים הבאים לפלטפורמת לימוד מבוססת AI
        </Typography>
        <Typography variant="h6" mb={4}>
          הירשמו עכשיו והתחילו ללמוד נושאים שמעניינים אתכם, בצורה חכמה ואישית!
        </Typography>
        <Button variant="contained" size="large" onClick={() => navigate('/register')}>
          התחלת לימוד
        </Button>
      </Box>
    </>
  )
}

export default Home
