// src/features/users/Users.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./userSlice";

const Users = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p>טוען משתמשים...</p>;
  if (error) return <p>שגיאה: {error}</p>;

  return (
    <div>
      <h2>רשימת משתמשים</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
