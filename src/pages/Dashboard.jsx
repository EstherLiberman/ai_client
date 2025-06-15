import React, { useEffect } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Grid,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonalLayout from '../components/Layout';

const Dashboard = () => {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.id) {
      navigate('/register');
    }
  }, [user, navigate]);

  return (
    <PersonalLayout>
      <Box
        sx={{
          minHeight: 'calc(100vh - 64px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(to right, #e3f2fd, #fce4ec)',
          p: 2,
        }}
      >
        <Card
          sx={{
            maxWidth: 500,
            width: '100%',
            borderRadius: 6,
            boxShadow: 6,
            backgroundColor: '#fff',
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
                ברוך הבא לאזור האישי שלך!!!!
              </Typography>
              <Typography variant="body2" color="text.secondary">
                     כאן תוכל לגשת לשירותים האישיים שלך, לעקוב אחרי הפעילויות שלך, ולערוך את הפרטים שלך.
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </PersonalLayout>
  );
};

export default Dashboard;
