import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../redux/userSlice';
import categoriesReducer from '../redux/categoriesSlice';
import subCategoriesReducer from '../redux/subCategoriesSlice';
import promptsReducer from '../redux/promptsSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    categories: categoriesReducer,
    subCategories: subCategoriesReducer,
    prompts: promptsReducer,
  },
});



