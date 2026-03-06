import { Status } from "../../types/global-type";


export interface User {
  username: string;
  email: string;
  password: string;
  token: string;
}

export interface AuthState {
  user: User;
  status: Status;
}