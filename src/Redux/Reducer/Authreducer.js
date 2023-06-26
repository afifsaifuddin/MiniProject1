import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    id: null,
    username: "",
    phone: "",
    email: "",
    password: "",
  },
  login: false,
  username: [],
  phone: [],
  email: [],
};
export const authreducer = createSlice({
  name: "authreducer",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.login = true;
      localStorage.setItem("token", action.payload);
    },
    logoutSuccess: (state) => {
      state.login = false;
      localStorage.removeItem("token");
    },
    userName: (state, action) => {
      state.username.push(action.payload);
    },
    Phone: (state, action) => {
      state.phone.push(action.payload);
    },
    Email: (state, action) => {
      state.email.push(action.payload);
    },
  },
});

export const { loginSuccess, logoutSuccess, userName, Phone, Email } =
  authreducer.actions;
export default authreducer.reducer;
