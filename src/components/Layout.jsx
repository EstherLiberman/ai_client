import React from 'react';
import { Box, Button, Divider, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import ChatIcon from '@mui/icons-material/Chat';
import HistoryIcon from '@mui/icons-material/History';

const PersonalLayout = ({ children }) => {
  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          backgroundColor: 'background.default', 
          flexDirection: 'row-reverse',
        }}
      >

        <Box
          sx={{
            width: 200,
            
            p: 2,
            boxShadow: 3,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderTopLeftRadius: '12px',
            borderBottomLeftRadius: '12px',
            transition: 'width 0.3s',
          }}
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ textAlign: 'center', mb: 1 }}
          >
            תפריט אישי
          </Typography>

          <Divider />

          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/new-chat')}
            startIcon={<ChatIcon />}
            sx={{
              alignSelf: 'flex-end',
              width: '140px',
              transition: '0.3s',
              borderRadius: '20px 0 0 20px',
              '&:hover': {
                width: '180px',
              },
            }}
          >
            שיחה חדשה
          </Button>

          <Button
            variant="outlined"
            color="primary"
            onClick={() => navigate('/chat-history')}
            startIcon={<HistoryIcon />}
            sx={{
              alignSelf: 'flex-end',
              width: '140px',
              transition: '0.3s',
              borderRadius: '20px 0 0 20px',
              '&:hover': {
                width: '180px',
              },
            }}
          >
            היסטורית שיחות
          </Button>
        </Box>

        {/* Main content */}
        <Box sx={{ flexGrow: 1, p: 4 }}>{children}</Box>
      </Box>
    </>
  );
};

export default PersonalLayout;

