import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  MenuItem,
  Paper,
} from '@mui/material';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const NewChat = () => {
  const user = useSelector((state) => state.user.user);
  const [categoryId, setCategoryId] = useState('');
  const [subCategoryId, setSubCategoryId] = useState('');
  const [promptText, setPromptText] = useState('');
  const [responseText, setResponseText] = useState('');

  const handleSubmit = async () => {
    try {
      const payload = {
        id: uuidv4(),
        userId: user?.id,
        categoryId,
        subCategoryId,
        promptText,
        generatedContent: '',
        dateCreated: new Date().toISOString(),
      };

      const response = await axios.post('/api/Prompts', payload);

      setResponseText(response.data.generatedContent || 'השיחה נשלחה בהצלחה!');
    } catch (error) {
      console.error('שגיאה בשליחת השיחה:', error);
      setResponseText('אירעה שגיאה בשליחת השיחה');
    }
  };

  return (
    <Paper sx={{ maxWidth: 600, m: 'auto', mt: 5, p: 4 }}>
      <Typography variant="h5" gutterBottom>
        שיחה חדשה
      </Typography>

      <TextField
          fullWidth
           label="קטגוריה"
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
        margin="normal"
      >
        {/* החלף בדאטה אמיתי מהשרת בעתיד */}
        <MenuItem value="cat1">קטגוריה 1</MenuItem>
        <MenuItem value="cat2">קטגוריה 2</MenuItem>
      </TextField>

      <TextField
        fullWidth
        label="תת קטגוריה"
        value={subCategoryId}
        onChange={(e) => setSubCategoryId(e.target.value)}
        select
        margin="normal"
      >
        <MenuItem value="sub1">תת קטגוריה 1</MenuItem>
        <MenuItem value="sub2">תת קטגוריה 2</MenuItem>
      </TextField>

      <TextField
        fullWidth
        label="תוכן השיחה"
        value={promptText}
        onChange={(e) => setPromptText(e.target.value)}
        multiline
        rows={4}
        margin="normal"
      />

      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleSubmit}
        disabled={!promptText || !categoryId || !subCategoryId}
      >
        שלח שיחה
      </Button>

      {responseText && (
        <Typography variant="body2" color="success.main" mt={2}>
          {responseText}
        </Typography>
      )}
    </Paper>
  );
};

export default NewChat;
