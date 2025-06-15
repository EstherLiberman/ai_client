import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import Register from './pages/Register'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import AdminPanel from './pages/AdminPanel'
import Login from './pages/Login';
import { setUser } from './redux/userSlice';
import NewChat from './pages/NewChat'; 
import ChatHistory from './pages/ChatHistory';



const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      dispatch(setUser(user));
    }
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="/login" element={<Login />} />
      <Route path="/chat-history" element={<ChatHistory />} />
      <Route path="/new-chat" element={<NewChat />} />
      
    </Routes>
  )
}

export default App


