import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  subCategories: [],
};

const subCategoriesSlice = createSlice({
  name: 'subCategories',
  initialState,
  reducers: {
    setSubCategories: (state, action) => {
      state.subCategories = action.payload;
    },
  },
});

export const { setSubCategories } = subCategoriesSlice.actions;
export default subCategoriesSlice.reducer;
