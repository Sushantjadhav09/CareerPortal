// store.ts
import { configureStore } from '@reduxjs/toolkit';
import jwtReducer from "./src/Slices/JwtSlice";

export default configureStore({
  reducer: {
    jwt:jwtReducer
  }
});


