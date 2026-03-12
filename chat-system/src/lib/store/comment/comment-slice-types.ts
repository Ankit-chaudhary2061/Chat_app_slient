import { Status } from "../../types/global-type";

export interface CommentUser {
  _id: string;
  username: string;
  profileImage?: {
    url: string;
    public_id?: string;
  };
}

export interface Comment {
  _id: string;
  text: string;
  user: CommentUser;
  post: string;
  createdAt: string;
  updatedAt: string;
}

export interface AddCommentPayload {
  postId: string;
  text: string;
}

export interface UpdateCommentPayload {
  commentId: string;
  text: string;
}

export interface CommentState {
  comments: Comment[];
  loading: Status;
  error: string | null;
 
}