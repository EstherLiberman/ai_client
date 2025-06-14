import React from 'react'
import { Box, Typography } from '@mui/material'
import NavBar from '../components/NavBar'

const AdminPanel = () => {
  return (
    <>
      <NavBar />
      <Box sx={{ p: 4 }}>
        <Typography variant="h4">פאנל ניהול</Typography>
        <Typography>רשימת משתמשים והיסטוריית הלימוד שלהם.</Typography>
      </Box>
    </>
  )
}

export default AdminPanel









// // import React, { useEffect } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// //  import { fetchUsers } from '../redux/usersSlice';
// // import {
// //   Typography,
// //   Table,
// //   TableBody,
// //   TableCell,
// //   TableContainer,
// //   TableHead,
// //   TableRow,
// //   Paper,
// //   CircularProgress,
// // } from '@mui/material';

// // const AdminPanel = () => {
// //   const dispatch = useDispatch();
// //   const { users, status, error } = useSelector((state) => state.users);

// //   useEffect(() => {
// //     dispatch(fetchUsers());
// //   }, [dispatch]);

// //   return (
// //     <div style={{ padding: 20 }}>
// //       <Typography variant="h4" gutterBottom>
// //         לוח ניהול - רשימת משתמשים
// //       </Typography>

// //       {status === 'loading' && <CircularProgress />}
// //       {status === 'failed' && <Typography color="error">{error}</Typography>}

// //       {status === 'succeeded' && (
// //         <TableContainer component={Paper}>
// //           <Table>
// //             <TableHead>
// //               <TableRow>
// //                 <TableCell>מס׳</TableCell>
// //                 <TableCell>שם</TableCell>
// //                 <TableCell>טלפון</TableCell>
// //               </TableRow>
// //             </TableHead>
// //             <TableBody>
// //               {users.map((user, index) => (
// //                 <TableRow key={user.id}>
// //                   <TableCell>{index + 1}</TableCell>
// //                   <TableCell>{user.name}</TableCell>
// //                   <TableCell>{user.phone}</TableCell>
// //                 </TableRow>
// //               ))}
// //             </TableBody>
// //           </Table>
// //         </TableContainer>
// //       )}
// //     </div>
// //   );
// // };



// // export default AdminPanel;
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchUsers } from '../redux/userSlice'; // ודאי שזה הנתיב שלך
// import {
//   Typography,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   CircularProgress,
//   Box
// } from '@mui/material';
// import NavBar from '../components/NavBar';

// const AdminPanel = () => {
//   const dispatch = useDispatch();
//   const { users, status, error } = useSelector((state) => state.users);

//   useEffect(() => {
//     if (status === 'idle') {
//       dispatch(fetchUsers());
//     }
//   }, [dispatch, status]);

//   return (
//     <>
//       <NavBar />
//       <Box sx={{ p: 4 }}>
//         <Typography variant="h4" gutterBottom>
//           פאנל ניהול
//         </Typography>
//         <Typography gutterBottom>
//           רשימת משתמשים והיסטוריית הלימוד שלהם.
//         </Typography>

//         {status === 'loading' && <CircularProgress />}
//         {status === 'failed' && <Typography color="error">{error}</Typography>}

//         {status === 'succeeded' && (
//           <TableContainer component={Paper} sx={{ mt: 3 }}>
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <TableCell>מס׳</TableCell>
//                   <TableCell>שם</TableCell>
//                   <TableCell>טלפון</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {users.map((user, index) => (
//                   <TableRow key={user.id}>
//                     <TableCell>{index + 1}</TableCell>
//                     <TableCell>{user.name}</TableCell>
//                     <TableCell>{user.phone}</TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         )}
//       </Box>
//     </>
//   );
// };

// export default AdminPanel;
