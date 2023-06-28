import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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
  fotoProfile: [],
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
    Foto: (state, action) => {
      state.fotoProfile.push(action.payload);
    },
  },
});

// export const checkLogin = () => {
//   return async (dispatch) => {
//     const token = localStorage.getItem("token");

//     if (token) {
//       try {
//         const res = await axios.get(
//           "https://minpro-blog.purwadhikabootcamp.com/api/auth/",
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );
//         dispatch(setUser(res.data));
//       } catch (error) {
//         console.log(error);
//         dispatch(logoutSuccess());
//       }
//     }
//   };
// };
export const { loginSuccess, logoutSuccess, userName, Phone, Email, Foto } =
  authreducer.actions;
export default authreducer.reducer;
