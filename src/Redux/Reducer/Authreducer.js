import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: {
    id: null,
    username: "",
    email: "",
    phone: "",
    password: "",
    isVerified: false,
    role: false,
  },
  login: false,
  fotoProfile: [],
};
export const authreducer = createSlice({
  name: "authreducer",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { id, username, email, phone, imgProfile, isVerified, role } =
        action.payload;
      state.user = {
        id,
        username,
        email,
        phone,
        imgProfile,
        isVerified,
        role,
      };
    },
    loginSuccess: (state) => {
      state.login = true;
      // localStorage.setItem("token", action.payload);
    },
    logoutSuccess: (state) => {
      state.login = false;
      localStorage.removeItem("token");
    },
    KeepLogin: (state) => {
      state.login = true;
    },
    Foto: (state, action) => {
      state.fotoProfile.push(action.payload);
    },
  },
});
export const fetchUser = (values) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(
        "https://minpro-blog.purwadhikabootcamp.com/api/auth/login",
        {
          username: values.identifier,
          phone: values.identifier,
          email: values.identifier,
          password: values.password,
        }
      );
      console.log(res);
      const token = res.data.token;
      localStorage.setItem("token", token);
      dispatch(loginSuccess());
      dispatch(setUser(res.data.isAccountExist));
    } catch (error) {
      console.log("ini error ", error);
    }
  };
};
export const KeeploginSucces = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    try {
      if (token) {
        const respon = await axios.get(
          "https://minpro-blog.purwadhikabootcamp.com/api/auth/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        dispatch(setUser(respon.data));
        dispatch(KeepLogin());
      }
    } catch (error) {}
  };
};
export const {
  loginSuccess,
  logoutSuccess,
  userName,
  Phone,
  Email,
  Foto,
  setUser,
  KeepLogin,
} = authreducer.actions;
export default authreducer.reducer;
