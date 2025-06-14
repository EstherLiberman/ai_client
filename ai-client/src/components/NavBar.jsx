// import React from 'react';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   IconButton,
//   useScrollTrigger,
//   Slide,
// } from '@mui/material';
// import { Link, useNavigate } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { logout } from '../redux/userSlice';
// import LoginIcon from '@mui/icons-material/Login';
// import HowToRegIcon from '@mui/icons-material/HowToReg';
// import HomeIcon from '@mui/icons-material/Home';
// import DashboardIcon from '@mui/icons-material/Dashboard';

// function HideOnScroll({ children }) {
//   const trigger = useScrollTrigger();
//   return (
//     <Slide appear={false} direction="down" in={!trigger}>
//       {children}
//     </Slide>
//   );
// }

// const NavBar = () => {
//   const user = useSelector((state) => state.user.user);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     dispatch(logout());
//     navigate('/login');
//   };

//   return (
//     <HideOnScroll>
//       <AppBar position="sticky" color="primary">
//         <Toolbar>
          
//           <Typography variant="h6" sx={{ flexGrow: 1, color: 'primary.contrastText' }}>
//             פלטפורמת לימוד
//           </Typography>

//           <IconButton component={Link} to="/" color="secondary">
//             <HomeIcon />
//           </IconButton>

//           {!user && (
//             <>
//               <Button
//                 startIcon={<HowToRegIcon />}
//                 component={Link}
//                 to="/register"
//                 color="secondary"
//                 sx={{ ml: 1 }}
//               >
//                 הרשמה
//               </Button>
//               <Button
//                 startIcon={<LoginIcon />}
//                 component={Link}
//                 to="/login"
//                 color="secondary"
//                 sx={{ ml: 1 }}
//               >
//                 כניסה
//               </Button>
//             </>
//           )}

//           {user && (
//             <>
//               <Button
//                 startIcon={<DashboardIcon />}
//                 component={Link}
//                 to="/dashboard"
//                 color="secondary"
//                 sx={{ ml: 1 }}
//               >
//                 איזור אישי
//               </Button>
//               <Button onClick={handleLogout} color="secondary" sx={{ ml: 1 }}>
//                 התנתקות
//               </Button>
//             </>
//           )}
//         </Toolbar>
//       </AppBar>
//     </HideOnScroll>
//   );
// };

// export default NavBar;
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
      <AppBar position="sticky" color="primary">
        <Toolbar>

          <Box display="flex" alignItems="center" sx={{ flexGrow: 1 }}>
            <Avatar
              alt="Logo"
              src="./img/ai.webp" 
              sx={{ width: 40, height: 40, mr: 1 }}
            />
            <Typography variant="h6" sx={{ color: 'primary.contrastText' }}>
              פלטפורמת לימוד
            </Typography>
          </Box>

          <IconButton component={Link} to="/" color="secondary">
            <HomeIcon />
          </IconButton>

          {!user && (
            <>
              <Button
                startIcon={<HowToRegIcon />}
                component={Link}
                to="/register"
                color="secondary"
                sx={{ ml: 1 }}
              >
                הרשמה
              </Button>
              <Button
                startIcon={<LoginIcon />}
                component={Link}
                to="/login"
                color="secondary"
                sx={{ ml: 1 }}
              >
                כניסה
              </Button>
            </>
          )}

          {user && (
            <>
              <Button
                startIcon={<DashboardIcon />}
                component={Link}
                to="/dashboard"
                color="secondary"
                sx={{ ml: 1 }}
              >
                איזור אישי
              </Button>
              <Button onClick={handleLogout} color="secondary" sx={{ ml: 1 }}>
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
