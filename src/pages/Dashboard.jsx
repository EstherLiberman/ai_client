import React, { useEffect } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Grid,
  Button,
  Divider,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Dashboard = () => {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.id) {
      navigate('/register');
    }
  }, [user, navigate]);

  return (
    <>
      <NavBar />
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          backgroundColor: '#f3f6f9',
        }}
      >
        {/* Sidebar */}
        <Box
          sx={{
            width: 240,
            backgroundColor: '#ffffff',
            p: 2,
            boxShadow: 3,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            תפריט אישי
          </Typography>
          <Divider />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => navigate('/new-chat')}
          >
            שיחה חדשה
          </Button>
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            onClick={() => navigate('/chat-history')}
          >
            היסטורית שיחות
          </Button>
        </Box>

        {/* Main content */}
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            p: 4,
          }}
        >
          <Card
            sx={{
              maxWidth: 500,
              width: '100%',
              borderRadius: 4,
              boxShadow: 3,
            }}
          >
            <CardContent>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <Avatar sx={{ bgcolor: 'primary.main', width: 64, height: 64 }}>
                    <AccountCircleIcon sx={{ fontSize: 40 }} />
                  </Avatar>
                </Grid>
                <Grid item xs>
                  <Typography variant="h5" gutterBottom>
                    שלום, {user ? user.name : 'אורח'}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    טלפון: {user ? user.phone : ''}
                  </Typography>
                </Grid>
              </Grid>

              <Box mt={4}>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                  ברוך הבא לאזור האישי שלך!
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  כאן תוכל לגשת לשירותים האישיים שלך, לעקוב אחרי הפעילויות שלך, ולערוך את הפרטים שלך.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
