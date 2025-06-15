import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  useScrollTrigger,
  Slide,
  Avatar,
  Box,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const NavBar = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <HideOnScroll>
      <AppBar position="sticky" color="primary" sx={{ px: 2 }}>
        <Toolbar>

          <Box display="flex" alignItems="center" sx={{ flexGrow: 1 }}>
            <Avatar
              alt="Logo"
              src="./img/ai.webp"
              sx={{ width: 40, height: 40, mr: 1 }}
            />
            <Typography variant="h6" sx={{ color: 'white' }}>
              פלטפורמת לימוד
            </Typography>
          </Box>

          <IconButton component={Link} to="/" sx={{ color: '#FFFFFF' }}>
            <HomeIcon />
          </IconButton>

          {!user ? (
            <>
              <Button
                startIcon={<HowToRegIcon />}
                component={Link}
                to="/register"
                sx={{ color: '#FFFFFF', ml: 1 }}
              >
                הרשמה
              </Button>
              <Button
                startIcon={<LoginIcon />}
                component={Link}
                to="/login"
                sx={{ color: '#FFFFFF', ml: 1 }}
              >
                כניסה
              </Button>
            </>
          ) : (
            <>
              <Button
                startIcon={<DashboardIcon />}
                component={Link}
                to="/dashboard"
                sx={{ color: '#FFFFFF', ml: 1 }}
              >
                איזור אישי
              </Button>
              <Button onClick={handleLogout} sx={{ color: '#FFFFFF', ml: 1 }}>
                התנתקות
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default NavBar;
