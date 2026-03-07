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
  status: Status.IDLE   
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
    setStatus(state: AuthState, action: PayloadAction<Status>) {
      state.status = action.payload
    },
    setToken(state: AuthState, action: PayloadAction<string>) {
      if (state.user) {
        state.user.token = action.payload;
      }
    },
    setCurrentUser(state: AuthState, action: PayloadAction<User>) {
      state.user = action.payload
    },
    clearUser(state: AuthState) {  
      state.user = null;
      state.status = Status.IDLE;
    }
  }
})

export default authSlice.reducer
export const { setUser, setStatus, setToken, setCurrentUser, clearUser } = authSlice.actions


export function registerUser(data: RegisterData) {
  return async function registerUserThunk(dispatch: AppDispatch) {
    try {
      dispatch(setStatus(Status.LOADING));
      const response = await api.post("/register", data);
      if (response.status >= 200 && response.status < 300) {
        dispatch(setUser(response.data.data));
        dispatch(setStatus(Status.SUCCESS));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || error.message);
      dispatch(setStatus(Status.ERROR));
    }
  };
}

export function otpVerification(data: Otp) {
  return async function otpVerificationThunk(dispatch: AppDispatch) {
    try {
      dispatch(setStatus(Status.LOADING));
      const response = await api.post("/otp-verification", data);
      if (response.status >= 200 && response.status < 300) {
        dispatch(setStatus(Status.SUCCESS));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || error.message);
      dispatch(setStatus(Status.ERROR));
    }
  };
}

export function resendOtp(data: { email: string }) {
  return async function resendOtpThunk(dispatch: AppDispatch) {
    try {
      dispatch(setStatus(Status.LOADING));
      const response = await api.post("/resend-otp", data);
      if (response.status >= 200 && response.status < 300) {
        dispatch(setStatus(Status.SUCCESS));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || error.message);
      dispatch(setStatus(Status.ERROR));
    }
  }
}

export function forgotPassword(data: { email: string }) {
  return async function forgotPasswordThunk(dispatch: AppDispatch) {
    try {
      dispatch(setStatus(Status.LOADING));
      const response = await api.post("/forgot-password", data);
      if (response.status >= 200 && response.status < 300) {
        dispatch(setStatus(Status.SUCCESS));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || error.message);
      dispatch(setStatus(Status.ERROR));
    }
  }
}

export function resetPassword(data: { email: string, token: string, newPassword: string }) {
  return async function resetPasswordThunk(dispatch: AppDispatch) {
    try {
      dispatch(setStatus(Status.LOADING));
      const response = await api.post("/reset-password", data);
      if (response.status >= 200 && response.status < 300) {
        dispatch(setStatus(Status.SUCCESS));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || error.message);
      dispatch(setStatus(Status.ERROR));
    }
  }
}

export function loginUser(data: LoginUserData) {
  return async function loginUserThunk(dispatch: AppDispatch) {
    try {
      dispatch(setStatus(Status.LOADING));
      const response = await api.post("/login", data);
      if (response.status >= 200 && response.status < 300) {
        dispatch(setUser(response.data.data));
        dispatch(setToken(response.data.token));
        dispatch(setStatus(Status.SUCCESS));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || error.message);
      dispatch(setStatus(Status.ERROR));
    }
  }
}

export function logoutUser() {
  return async function logoutUserThunk(dispatch: AppDispatch) {
    try {
      const response = await api.post('/logout')
      if (response.status >= 200 && response.status < 300) {
        dispatch(clearUser());   // ✅ clearUser instead of setUser({} as User)
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || error.message);
      dispatch(setStatus(Status.ERROR));
    }
  }
}

export function onBoardUser(data: OnBoardData) {
  return async function onBoardUserThunk(dispatch: AppDispatch) {
    try {
      dispatch(setStatus(Status.LOADING));
      const response = await api.post("/onboarded", data);
      if (response.status >= 200 && response.status < 300) {
        dispatch(setUser(response.data.data));
        dispatch(setStatus(Status.SUCCESS));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || error.message);
      dispatch(setStatus(Status.ERROR));
    }
  };
}

export function fetchCurrentUser(userId: string) {
  return async function fetchCurrentUserThunk(dispatch: AppDispatch) {
    try {
      dispatch(setStatus(Status.LOADING));
      const response = await api.get(`/users/${userId}`);
      if (response.status >= 200 && response.status < 300) {
        dispatch(setCurrentUser(response.data.data));
        dispatch(setStatus(Status.SUCCESS));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || error.message);
      dispatch(setStatus(Status.ERROR));
    }
  };
}