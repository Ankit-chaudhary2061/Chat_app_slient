import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Status } from "../../types/global-type";
import { FriendRequest, UpdateProfilePayload, User, UserState } from "./user-slice-types";
import { AppDispatch } from "../store";
import api from "../../http/api";

const initialState: UserState = {
  currentUser: null,
  friends: [],
  recommendedUsers: [],
  friendRequests: [],
  loading: Status.IDLE,
  activeUsers: [],   // ✅ new
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser(state: UserState, action: PayloadAction<User>) {
      state.currentUser = action.payload;
    },

    setFriends(state: UserState, action: PayloadAction<User[]>) {
      state.friends = action.payload;
    },

    setRecommendedUsers(state: UserState, action: PayloadAction<User[]>) {
      state.recommendedUsers = action.payload;
    },

    setFriendRequests(state: UserState, action: PayloadAction<FriendRequest[]>) {
      state.friendRequests = action.payload;
    },

    setLoading(state: UserState, action: PayloadAction<Status>) {
      state.loading = action.payload;
    },
    setActiveUsers(state: UserState, action: PayloadAction<string[]>) {
  state.activeUsers = action.payload;
}
  },
});

export const {
  setCurrentUser,
  setLoading,
  setFriends,
  setRecommendedUsers,
  setFriendRequests,
} = userSlice.actions;

export default userSlice.reducer;


// fetch friends
export function fetchFriends() {
  return async function fetchFriendsThunk(dispatch: AppDispatch) {
    try {
      dispatch(setLoading(Status.LOADING));

      const response = await api.get("/friends");

      dispatch(setFriends(response.data.data));
      dispatch(setLoading(Status.SUCCESS));

    } catch (error) {
      dispatch(setLoading(Status.ERROR));
    }
  };
}


// fetch recommended users
export function fetchRecommendedUser() {
  return async function fetchRecommendedUserThunk(dispatch: AppDispatch) {
    try {
      dispatch(setLoading(Status.LOADING));

      const response = await api.get("/recommended-friends");

      dispatch(setRecommendedUsers(response.data.recommendedUsers));
      dispatch(setLoading(Status.SUCCESS));

    } catch (error) {
      dispatch(setLoading(Status.ERROR));
    }
  };
}


// fetch friend requests
export function fetchFriendRequest() {
  return async function fetchFriendRequestThunk(dispatch: AppDispatch) {
    try {
      dispatch(setLoading(Status.LOADING));

      const response = await api.get("/friends-request");

      dispatch(setFriendRequests(response.data.data));
      dispatch(setLoading(Status.SUCCESS));

    } catch (error) {
      dispatch(setLoading(Status.ERROR));
    }
  };
}


// send friend request
export function sendFriendRequest(recipientId: string) {
  return async function sendFriendRequestThunk(dispatch: AppDispatch) {
    try {
      dispatch(setLoading(Status.LOADING));

      await api.post(`/friends-request/${recipientId}`);

      dispatch(setLoading(Status.SUCCESS));

    } catch (error) {
      dispatch(setLoading(Status.ERROR));
    }
  };
}


// accept friend request
export function acceptFriendRequest(requestId: string) {
  return async function acceptFriendRequestThunk(dispatch: AppDispatch) {
    try {
      dispatch(setLoading(Status.LOADING));

      await api.patch(`/friends-request/${requestId}/accept`);

      dispatch(fetchFriendRequest());
      dispatch(fetchFriends());

      dispatch(setLoading(Status.SUCCESS));

    } catch (error) {
      dispatch(setLoading(Status.ERROR));
    }
  };
}


// reject friend request
export function rejectFriendRequest(requestId: string) {
  return async function rejectFriendRequestThunk(dispatch: AppDispatch) {
    try {
      dispatch(setLoading(Status.LOADING));

      await api.patch(`/friends-request/${requestId}/reject`);

      dispatch(fetchFriendRequest());

      dispatch(setLoading(Status.SUCCESS));

    } catch (error) {
      dispatch(setLoading(Status.ERROR));
    }
  };
}


// update profile
export function updateProfile(data: UpdateProfilePayload) {
  return async function updateProfileThunk(dispatch: AppDispatch) {
    try {
      dispatch(setLoading(Status.LOADING));

      const formData = new FormData();

      if (data.username) formData.append("username", data.username);
      if (data.bio) formData.append("bio", data.bio);
      if (data.location) formData.append("location", data.location);
      if (data.phoneNumber) formData.append("phoneNumber", data.phoneNumber);
      if (data.image) formData.append("image", data.image);

      const response = await api.patch("/profile/update", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      dispatch(setCurrentUser(response.data.data));
      dispatch(setLoading(Status.SUCCESS));

    } catch (error) {
      dispatch(setLoading(Status.ERROR));
    }
  };
}
export function fetchMyProfile() {
  return async function fetchMyProfileThunk(dispatch: AppDispatch) {
    try {

      const response = await api.get("/me");

      dispatch(setCurrentUser(response.data.data));

    } catch (error) {
      console.error(error);
    }
  };
}