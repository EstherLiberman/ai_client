import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  prompts: [],
};

const promptsSlice = createSlice({
  name: 'prompts',
  initialState,
  reducers: {
    setPrompts: (state, action) => {
      state.prompts = action.payload;
    },
    addPrompt: (state, action) => {
      state.prompts.push(action.payload);
    },
  },
});

export const { setPrompts, addPrompt } = promptsSlice.actions;
export default promptsSlice.reducer;
