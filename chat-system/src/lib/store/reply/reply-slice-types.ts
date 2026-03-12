import { Status } from "../../types/global-type";

export interface ReplyUser {
  _id: string;
  username: string;
  profileImage?: {
    url: string;
    public_id?: string;
  };
}

export interface Reply {
  _id: string;
  comment: string;
  user: ReplyUser;
  text: string;
  createdAt: string;
  updatedAt: string;
}

export interface ReplyState {
  replies: Reply[];
  loading: Status;
}