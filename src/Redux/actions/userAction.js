import { server } from "../store";
import axios from "axios";

// Login
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: "loginRequest" });

    const { data } = await axios.post(
      `${server}/login`,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    dispatch({ type: "loginSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "loginFail", payload: error.response.data.message });
  }
};

// Logout
export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: "logoutRequest" });

    const { data } = await axios.get(
      `${server}/logout`,
      {
        withCredentials: true,
      }
    );
    dispatch({ type: "logoutSuccess", payload: data.message });
  } catch (error) {
    dispatch({ type: "logoutFail", payload: error.response.data.message });
  }
};

// Get My Profile
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: "loadUserRequest" });

    const { data } = await axios.get(
      `${server}/me`,
      {
        withCredentials: true,
      }
    );
    dispatch({ type: "loadUserSuccess", payload: data.user });
  } catch (error) {
    dispatch({ type: "loadUserFail", payload: error.response.data.message });
  }
};

// Register
export const register = (formdata) => async (dispatch) => {
  try {
    dispatch({ type: "registerRequest" });

    const { data } = await axios.post(
      `${server}/register`,
      formdata,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      }
    );
    dispatch({ type: "registerSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "registerFail", payload: error.response.data.message });
  }
};

// Forget Password
export const forgetPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: "forgetPasswordRequest" });

    const { data } = await axios.post(
      `${server}/password/forgot`,
      { email },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    dispatch({ type: "forgetPasswordSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "forgetPasswordFail", payload: error.response.data.message });
  }
};

// Reset Password
export const resetPassword = (token, password, confirmPassword) => async (dispatch) => {
  try {
    dispatch({ type: "resetPasswordRequest" });

    const { data } = await axios.put(
      `${server}/password/reset/${token}`,
      { password, confirmPassword },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    dispatch({ type: "resetPasswordSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "resetPasswordFail", payload: error.response.data.message });
  }
};

// Update Profile
export const updateProfile = (name, mobileNumber) => async (dispatch) => {
  try {
    dispatch({ type: "updateProfileRequest" });

    const { data } = await axios.put(
      `${server}/me/update`,
      { name, mobileNumber },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    dispatch({ type: "updateProfileSuccess", payload: data.message });
  } catch (error) {
    dispatch({ type: "updateProfileFail", payload: error.response.data.message });
  }
};

// Change Password
export const changePassword = (oldPassword, newPassword) => async (dispatch) => {
  try {
    dispatch({ type: "changePasswordRequest" });

    const { data } = await axios.put(
      `${server}/password/update`,
      { oldPassword, newPassword },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    dispatch({ type: "changePasswordSuccess", payload: data.message });
  } catch (error) {
    dispatch({ type: "changePasswordFail", payload: error.response.data.message });
  }
};

// Update Avatar
export const updateAvatar = (formdata) => async (dispatch) => {
  try {
    dispatch({ type: "updateAvatarRequest" });

    const { data } = await axios.put(
      `${server}/update/avatar`,
      formdata,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      }
    );
    dispatch({ type: "updateAvatarSuccess", payload: data.message });
  } catch (error) {
    dispatch({ type: "updateAvatarFail", payload: error.response.data.message });
  }
};