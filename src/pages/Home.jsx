import React from 'react';
import { Box, Typography, Button, Fade } from '@mui/material';
import NavBar from '../components/NavBar';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      <Box
        sx={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 4,
          overflow: 'hidden',
        }}
      >
        <Box
          component="img"
          src="/img/ai.webp"
          alt="רקע AI"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.37,
            zIndex: 0,
          }}
        />
        <Fade in timeout={1000}>
          <Box
            sx={{
              position: 'relative',
              backgroundColor: 'rgba(255, 255, 255, 0.92)',
              borderRadius: 4,
              textAlign: 'center',
              p: { xs: 3, md: 6 },
              maxWidth: 600,
              boxShadow: 6,
              opacity: 0.37,
              zIndex: 1,
            }}
          >
            <Typography variant="h3" gutterBottom>
               AI ברוכים הבאים לפלטפורמת לימוד מבוססת 
            </Typography>
            <Typography variant="h6" mb={4}>
              הירשמו עכשיו והתחילו ללמוד נושאים שמעניינים אתכם, בצורה חכמה ואישית!
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/register')}
            >
              התחלת לימוד
            </Button>
          </Box>
        </Fade>
      </Box>
    </>
  );
};

export default Home;

