import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CreatePostData, Post,  PostState } from "./post-slice-types";
import { Status } from "../../types/global-type";
import { AppDispatch } from "../store";
import api from "../../http/api";



const initialState: PostState = {
  posts: [],
  myPosts: [],
  status:Status.IDLE,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {

    setPosts: (state:PostState, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
    },

    setMyPosts: (state:PostState, action: PayloadAction<Post[]>) => {
      state.myPosts = action.payload;
    },

    addPost: (state:PostState, action: PayloadAction<Post>) => {
      state.posts.unshift(action.payload);
    },

    removePost: (state:PostState, action: PayloadAction<string>) => {
      state.posts = state.posts.filter(
        (post) => post._id !== action.payload
      );
    },

    updatePostState: (state:PostState, action: PayloadAction<Post>) => {
      const index = state.posts.findIndex(
        (p) => p._id === action.payload._id
      );

      if (index !== -1) {
        state.posts[index] = action.payload;
      }
    },

    setLoading: (state:PostState, action: PayloadAction<Status>) => {
      state.status = action.payload;
    },
  },
});

export const {
  setPosts,
  setMyPosts,
  addPost,
  removePost,
  updatePostState,
  setLoading,
} = postSlice.actions;

export default postSlice.reducer;



export function createPost(data: CreatePostData) {
  return async function createPostThunk(dispatch: AppDispatch) {
    try {

      dispatch(setLoading(Status.SUCCESS));

      const formData = new FormData();

      if (data.text) {
        formData.append("text", data.text);
      }

      if (data.images) {
        data.images.forEach((file) => {
          formData.append("images", file);
        });
      }

      const response = await api.post("/create", formData);

      dispatch(addPost(response.data.data));

    } catch (error) {

      console.log("Create post error", error);

    } finally {

      dispatch(setLoading(Status.ERROR));

    }
  };
}
export function fetchFeedPosts() {
  return async function fetchFeedPostsThunk(dispatch: AppDispatch) {
    try {
       dispatch(setLoading(Status.SUCCESS));

      const response = await api.get("/feed");

      dispatch(setPosts(response.data.data));

    } catch (error) {
      console.log(error);
    } finally {
        dispatch(setLoading(Status.SUCCESS));
    }
  };
}
export function fetchMyPosts() {
  return async function fetchMyPostsThunk(dispatch: AppDispatch) {
    try {

      const response = await api.get("/my-posts");

      dispatch(setMyPosts(response.data.data));
         dispatch(setLoading(Status.SUCCESS));
    } catch (error) {
      console.log(error);
        dispatch(setLoading(Status.SUCCESS));
    }
  };
}


export function fetchFriendPosts(id: string) {
  return async function fetchFriendPostsThunk(dispatch: AppDispatch) {
    try {

      const response = await api.get(`/friend/${id}`);

      dispatch(setPosts(response.data.data));
 dispatch(setLoading(Status.SUCCESS));
    } catch (error) {
      console.log(error);
        dispatch(setLoading(Status.SUCCESS));
    }
  };
}
export function deletePost(id: string) {
  return async function deletePostThunk(dispatch: AppDispatch) {
    try {
 dispatch(setLoading(Status.SUCCESS));
      await api.delete(`/delete/${id}`);

      dispatch(removePost(id));

    } catch (error) {
      console.log(error);
        dispatch(setLoading(Status.SUCCESS));
    }
  };
}
export function likePost(id: string) {
  return async function likePostThunk(dispatch: AppDispatch) {
    try {
 dispatch(setLoading(Status.SUCCESS));
      const response = await api.patch(`/like/${id}`);

      dispatch(updatePostState(response.data.data));

    } catch (error) {
      console.log(error);
        dispatch(setLoading(Status.SUCCESS));
        
    }
  };
}