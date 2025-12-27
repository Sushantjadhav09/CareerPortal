import { createSlice, type PayloadAction,  } from "@reduxjs/toolkit";

interface JwtState {
  jwt: string | null;
}

const initialState: JwtState = {
  jwt: localStorage.getItem("token"),
};

const jwtSlice = createSlice({
  name: "jwt",
  initialState,
  reducers: {
    setJwt: (state, action: PayloadAction<string>) => {
      localStorage.setItem("token", action.payload);
      state.jwt = action.payload;
    },
    removeJwt: (state) => {
      localStorage.removeItem("token");
      state.jwt = null;
    },
  },
});

export const { setJwt, removeJwt } = jwtSlice.actions;
export default jwtSlice.reducer;
