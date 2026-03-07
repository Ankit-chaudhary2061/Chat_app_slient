import { Status } from "../../types/global-type";


export interface User {
  username: string;
  email: string;
  bio?: string;
  nativeLanguage?: string;
  learningLanguage?: string;
  location?: string;
  profileImage?: { url: string; public_id?: string };
  role?: string;
  isOnBoarded?: boolean;
  token?: string;
}

export interface AuthState {
  user: User | null;
  status: Status;
}