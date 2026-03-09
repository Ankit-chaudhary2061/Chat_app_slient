import { Status } from "../../types/global-type";

export interface ProfileImage {
  url: string;
}

export interface Author {
  _id: string;
  username: string;
  profileImage?: ProfileImage;
}

export interface Image {
  url: string;
  public_id?: string;
}

export interface Post {
  _id: string;
  author: Author;
  text: string;
  images: Image[];
  likes: string[];
  createdAt: string;
  updatedAt: string;
}
export interface CreatePostData {
  text?: string;
  images?: File[];
}
export interface PostState {
  posts: Post[];
  myPosts: Post[];
  status:Status;
}