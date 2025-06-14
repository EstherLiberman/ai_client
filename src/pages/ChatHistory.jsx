import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  CircularProgress,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { loginUser } from "../redux/userThunk";


const ChatHistory = () => {
  const user = useSelector((state) => state.user.user);
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchChats = async () => {
      if (!user?.name || !user?.phone) {
        setError('חסרים פרטי משתמש');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get('/api/Prompts', {
          params: {
            name: user.name,
            phone: user.phone,
          },
        });

        setChats(response.data);
      } catch (err) {
        console.error('שגיאה בקבלת השיחות:', err);
        setError('אירעה שגיאה בקבלת השיחות');
      } finally {
        setLoading(false);
      }
    };

    fetchChats();
  }, [user]);

  return (
    <Paper style={{ maxWidth: 700, margin: 'auto', marginTop: 40, padding: 30 }}>
      <Typography variant="h5" gutterBottom>
        היסטוריית שיחות של {user?.name}
      </Typography>

      {loading ? (
        <CircularProgress style={{ display: 'block', margin: '30px auto' }} />
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : chats.length === 0 ? (
        <Typography>לא נמצאו שיחות.</Typography>
      ) : (
        <List>
          {chats.map((chat, index) => (
            <React.Fragment key={chat.id || index}>
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary={`שיחה מ־ ${new Date(chat.dateCreated).toLocaleString()}`}
                  secondary={
                    <>
                      <Typography variant="body2" color="textPrimary">
                        שאלה: {chat.promptText}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        תשובה: {chat.generatedContent}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      )}
    </Paper>
  );
};

export default ChatHistory;
