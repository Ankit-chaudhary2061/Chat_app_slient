import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Status } from "../../types/global-type";
import { AuthState, User } from "./auth-slice-types";
import { RegisterData } from "../../../../app/register/register-types";
import { AppDispatch } from "../store";
import api from "../../http/api";
import { LoginUserData } from "../../../../app/login/login";
import { toast } from "react-toastify";


const initialState: AuthState = {
  user: null,

  loginStatus: Status.IDLE,
  registerStatus: Status.IDLE,
  otpStatus: Status.IDLE,

  forgotPasswordStatus: Status.IDLE,
  resetPasswordStatus: Status.IDLE,

  fetchUserStatus: Status.IDLE,
}

export interface Otp {
  email: string;
  otp: string;
}
interface OnBoardData {
  username: string;
  bio: string;

  location: string;
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
reducers: {

  setUser(state: AuthState, action: PayloadAction<User>) {
    state.user = action.payload
  },

  setLoginStatus(state: AuthState, action: PayloadAction<Status>) {
    state.loginStatus = action.payload
  },

  setRegisterStatus(state: AuthState, action: PayloadAction<Status>) {
    state.registerStatus = action.payload
  },

  setOtpStatus(state: AuthState, action: PayloadAction<Status>) {
    state.otpStatus = action.payload
  },

  setForgotPasswordStatus(state: AuthState, action: PayloadAction<Status>) {
    state.forgotPasswordStatus = action.payload
  },

  setResetPasswordStatus(state: AuthState, action: PayloadAction<Status>) {
    state.resetPasswordStatus = action.payload
  },

  setFetchUserStatus(state: AuthState, action: PayloadAction<Status>) {
    state.fetchUserStatus = action.payload
  },

  setToken(state: AuthState, action: PayloadAction<string>) {
    if (state.user) {
      state.user.token = action.payload
    }
  },

  setCurrentUser(state: AuthState, action: PayloadAction<User>) {
    state.user = action.payload
  },

  clearUser(state: AuthState) {
    state.user = null
  }

}
})

export default authSlice.reducer
export const {
  setUser,
  setLoginStatus,
  setRegisterStatus,
  setOtpStatus,
  setForgotPasswordStatus,
  setResetPasswordStatus,
  setFetchUserStatus,
  setToken,
  setCurrentUser,
  clearUser
} = authSlice.actions


export function registerUser(data: RegisterData) {
  return async function registerUserThunk(dispatch: AppDispatch) {
    try {
      dispatch(setRegisterStatus(Status.LOADING));

      const response = await api.post("/register", data);

      dispatch(setUser(response.data.data));
      dispatch(setRegisterStatus(Status.SUCCESS));

    } catch (error: any) {
      toast.error(error.response?.data?.message || error.message);
      dispatch(setRegisterStatus(Status.ERROR));
    }
  };
}

export function otpVerification(data: Otp) {
  return async function otpVerificationThunk(dispatch: AppDispatch) {
    try {
      dispatch(setOtpStatus(Status.LOADING));

      await api.post("/otp-verification", data);

      dispatch(setOtpStatus(Status.SUCCESS));

    } catch (error: any) {
      toast.error(error.response?.data?.message || error.message);
      dispatch(setOtpStatus(Status.ERROR));
    }
  };
}

export function resendOtp(data: { email: string }) {
  return async function resendOtpThunk(dispatch: AppDispatch) {
    try {
      dispatch(setOtpStatus(Status.LOADING));

      await api.post("/resend-otp", data);

      dispatch(setOtpStatus(Status.SUCCESS));

    } catch (error: any) {
      toast.error(error.response?.data?.message || error.message);
      dispatch(setOtpStatus(Status.ERROR));
    }
  };
}

export function forgotPassword(data: { email: string }) {
  return async function forgotPasswordThunk(dispatch: AppDispatch) {
    try {

      dispatch(setForgotPasswordStatus(Status.LOADING));

      const response = await api.post("/forgot-password", data);

      console.log("Response:", response.data);

      dispatch(setForgotPasswordStatus(Status.SUCCESS));

    } catch (error: any) {

      console.error(error);

      toast.error(error.response?.data?.message || error.message);

      dispatch(setForgotPasswordStatus(Status.ERROR));

    }
  };
}

export function resetPassword(data: { email: string; token: string; newPassword: string }) {
  return async function resetPasswordThunk(dispatch: AppDispatch) {
    try {

      dispatch(setResetPasswordStatus(Status.LOADING));

      const response = await api.post("/reset-password", data);
      console.log('reset-password: ' , response.data)
      dispatch(setResetPasswordStatus(Status.SUCCESS));
     

      toast.success("Password reset successful!");

    } catch (error: any) {

      toast.error(error.response?.data?.message || error.message);

      dispatch(setResetPasswordStatus(Status.ERROR));

    }
  };
}

export function loginUser(data: LoginUserData) {
  return async function loginUserThunk(dispatch: AppDispatch) {
    try {

      dispatch(setLoginStatus(Status.LOADING));

      const response = await api.post("/login", data);

      dispatch(setUser(response.data.data));
      dispatch(setToken(response.data.token));

      dispatch(setLoginStatus(Status.SUCCESS));

    } catch (error: any) {

      toast.error(error.response?.data?.message || error.message);

      dispatch(setLoginStatus(Status.ERROR));

    }
  };
}

export function logoutUser() {
  return async function logoutUserThunk(dispatch: AppDispatch) {
    try {

      await api.post("/logout");

      dispatch(clearUser());

    } catch (error: any) {

      toast.error(error.response?.data?.message || error.message);

    }
  };
}

export function onBoardUser(data: OnBoardData) {
  return async function onBoardUserThunk(dispatch: AppDispatch) {
    try {

      dispatch(setRegisterStatus(Status.LOADING));

      const response = await api.post("/onboarded", data);

      dispatch(setUser(response.data.data));

      dispatch(setRegisterStatus(Status.SUCCESS));

    } catch (error: any) {

      toast.error(error.response?.data?.message || error.message);

      dispatch(setRegisterStatus(Status.ERROR));

    }
  };
}

export function fetchCurrentUser(userId: string) {
  return async function fetchCurrentUserThunk(dispatch: AppDispatch) {
    try {

      dispatch(setFetchUserStatus(Status.LOADING));

      const response = await api.get(`/users/${userId}`);

      dispatch(setCurrentUser(response.data.data));

      dispatch(setFetchUserStatus(Status.SUCCESS));

    } catch (error: any) {

      toast.error(error.response?.data?.message || error.message);

      dispatch(setFetchUserStatus(Status.ERROR));

    }
  };
}