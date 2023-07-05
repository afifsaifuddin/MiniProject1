import { Alert, AlertIcon } from "@chakra-ui/react";
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
    },
    logoutSuccess: (state) => {
      state.login = false;
      localStorage.removeItem("token");
    },
    keepLoginSuccess: (state) => {
      state.login = true;
    },
    Foto: (state, action) => {
      state.fotoProfile.push(action.payload);
    },
  },
});
export const signIn = (values) => {
  return async (dispatch) => {
    try {
      console.log(values);
      const login = await axios.post(
        `https://minpro-blog.purwadhikabootcamp.com/api/auth/login`,
        {
          username: values.identifier,
          email: values.identifier,
          phone: values.identifier,
          password: values.password,
        }
      );
      console.log("ini respon", login);
      const token = login.data.token;
      localStorage.setItem("token", token);
      dispatch(loginSuccess());
      dispatch(setUser(login.data.isAccountExist));
      <Alert status="success" variant="solid">
        <AlertIcon />
        Login Success!
      </Alert>;
    } catch (error) {
      console.log(error);
    }
  };
};
export const keepLogin = () => {
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
        dispatch(keepLoginSuccess());
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const changePicture = (photo) => {
  return async () => {
    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("file", photo);
    try {
      const respon = await axios.post(
        "https://minpro-blog.purwadhikabootcamp.com/api/profile/single-uploaded",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log(respon.data);
      alert("Your avatar is changed");
      document.location.href = "/Accountprofile";
    } catch (error) {
      console.log(error);
      alert("Failed change your avatar");
    }
  };
};

export const likeArticle = (idArticle) => {
  return async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.post(
        "https://minpro-blog.purwadhikabootcamp.com/api/blog/like",
        {
          BlogId: idArticle,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
};
export const disLikeArticle = (idBlog) => {
  return async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.delete(
        `https://minpro-blog.purwadhikabootcamp.com/api/blog/unlike/${idBlog}`,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      console.log("ini yang mau didislike ", res);
    } catch (error) {
      console.log(error);
    }
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
  keepLoginSuccess,
} = authreducer.actions;
export default authreducer.reducer;
