import { configureStore } from '@reduxjs/toolkit';
import { formReducer } from './formSlice';

const store = configureStore({
  reducer: {
    formData: formReducer,
  },
});

export default store;
