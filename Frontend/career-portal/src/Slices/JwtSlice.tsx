import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

export interface JwtUser {
  sub?: string;        // email
  name?: string;
  accountType?: string;
  exp?: number;
  iat?: number;
}

interface JwtState {
  jwt: string | null;
  user: JwtUser | null;   // ✅ ADD THIS
}

const initialState: JwtState = {
  jwt: localStorage.getItem("token"),
  user: null,             // ✅ ADD THIS
};

const jwtSlice = createSlice({
  name: "jwt",
  initialState,
  reducers: {
    setJwt: (state, action: PayloadAction<string>) => {
      localStorage.setItem("token", action.payload);
      state.jwt = action.payload;
       state.user = jwtDecode<JwtUser>(action.payload);
    },

    removeJwt: (state) => {
      localStorage.removeItem("token");
      state.jwt = null;
      state.user = null;
    },

    setUser: (state, action: PayloadAction<JwtUser>) => {
      state.user = action.payload;   // ✅ NOW VALID
    },

    logout: (state) => {
      localStorage.removeItem("token");
      state.jwt = null;
      state.user = null;
    },
  },
});

export const { setJwt, removeJwt, setUser, logout } = jwtSlice.actions;
export default jwtSlice.reducer;
