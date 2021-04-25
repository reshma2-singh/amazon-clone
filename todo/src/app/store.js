import { configureStore } from '@reduxjs/toolkit';
import basketReducer from '../features/todo/basketSlice';

export default configureStore({
  reducer: {
    
    basket: basketReducer
  },
});
