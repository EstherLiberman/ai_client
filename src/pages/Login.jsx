"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  CircularProgress,
  Alert,
} from "@mui/material";
import NavBar from "../components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../redux/userThunk";

export default function Login() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { status, error } = useSelector((state) => state.user);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !phone) {
      alert("נא למלא את כל השדות");
      return;
    }

    try {
      const resultAction = await dispatch(loginUser({ name, phone }));

      if (loginUser.fulfilled.match(resultAction)) {
        const user = resultAction.payload;
        localStorage.setItem("user", JSON.stringify(user));
        navigate('/dashboard'); 
      }
    } catch (err) {
      console.error("שגיאה לא צפויה:", err);
    }
  };

  return (
    <>
      <NavBar />
      <Container maxWidth="sm">
        <Paper elevation={4} sx={{ padding: 4, marginTop: 8, borderRadius: 3 }}>
          <Typography variant="h5" gutterBottom align="center">
            התחברות
          </Typography>

          {status === "failed" && error && (
            <Alert severity="error">{error}</Alert>
          )}

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <TextField
              label="שם מלא"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              required
            />
            <TextField
              label="מספר טלפון"
              variant="outlined"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              fullWidth
              required
              inputProps={{ inputMode: "tel", pattern: "[0-9]*" }}
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={status === "loading"}
              startIcon={
                status === "loading" ? <CircularProgress size={20} /> : null
              }
            >
              {status === "loading" ? "מתחבר..." : "התחבר"}
            </Button>
          </Box>
        </Paper>
      </Container>
    </>
  );
}
