// store/user/types.ts
import { Status } from "../../types/global-type";

export interface ProfileImage {
  url: string;
  public_id?: string;
}

export type UserSummary = {
  _id: string;
  username: string;
  profileImage?: ProfileImage;
};

// Main User type
export interface User {
  _id: string;
  username: string;
  bio?: string;
  location?: string;
  phoneNumber?: string;

  profileImage?: ProfileImage;
  friends: UserSummary[]; 
}

export interface UpdateProfilePayload {
  username?: string;
  bio?: string;
  location?: string;
  phoneNumber?: string;
  image?: File;
}


export enum FriendRequestStatus {
  Pending = "pending",
  Accepted = "accepted",
  Rejected = "rejected",
}


export interface FriendRequest {
  _id: string;
  sender: UserSummary;     
  recipient: UserSummary; 
  status: FriendRequestStatus;
  createdAt: string; 
  updatedAt: string;
}


export interface UserState {
  currentUser: User | null;
  friends: UserSummary[];
  recommendedUsers: UserSummary[];
  friendRequests: FriendRequest[];
  loading: Status;
  activeUsers: string[]; // userIds that are online
}
