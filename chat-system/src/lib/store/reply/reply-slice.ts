import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Status } from "../../types/global-type";
import { Reply, ReplyState } from "./reply-slice-types";
import { AppDispatch } from "../store";
import api from "../../http/api";

const initialState: ReplyState = {
  replies: [],
  loading: Status.IDLE,
};

const replySlice = createSlice({
  name: "reply",
  initialState,
  reducers: {
    setReplies(state: ReplyState, action: PayloadAction<Reply[]>) {
      state.replies = action.payload;
    },

    addReply(state: ReplyState, action: PayloadAction<Reply>) {
      state.replies.unshift(action.payload);
    },

    updateReply(state: ReplyState, action: PayloadAction<Reply>) {
      const index = state.replies.findIndex(
        (reply) => reply._id === action.payload._id
      );

      if (index !== -1) {
        state.replies[index] = action.payload;
      }
    },

    deleteReply(state: ReplyState, action: PayloadAction<string>) {
      state.replies = state.replies.filter(
        (reply) => reply._id !== action.payload
      );
    },

    setLoading(state: ReplyState, action: PayloadAction<Status>) {
      state.loading = action.payload;
    },
  },
});

export const {
  setReplies,
  addReply,
  updateReply,
  deleteReply,
  setLoading,
} = replySlice.actions;

export default replySlice.reducer;


// get replies
export function fetchReplies(commentId: string) {
  return async function fetchRepliesThunk(dispatch: AppDispatch) {
    try {
      dispatch(setLoading(Status.LOADING));

      const response = await api.get(`/reply/${commentId}`);

      dispatch(setReplies(response.data.data));
      dispatch(setLoading(Status.SUCCESS));

    } catch (error) {
      dispatch(setLoading(Status.ERROR));
    }
  };
}


// add reply
export function createReply(commentId: string, text: string) {
  return async function createReplyThunk(dispatch: AppDispatch) {
    try {
      dispatch(setLoading(Status.LOADING));

      const response = await api.post(`/reply/${commentId}`, { text });

      dispatch(addReply(response.data.data));
      dispatch(setLoading(Status.SUCCESS));

    } catch (error) {
      dispatch(setLoading(Status.ERROR));
    }
  };
}


// update reply
export function editReply(replyId: string, text: string) {
  return async function editReplyThunk(dispatch: AppDispatch) {
    try {
      dispatch(setLoading(Status.LOADING));

      const response = await api.patch(`/reply/update/${replyId}`, { text });

      dispatch(updateReply(response.data.data));
      dispatch(setLoading(Status.SUCCESS));

    } catch (error) {
      dispatch(setLoading(Status.ERROR));
    }
  };
}


// delete reply
export function removeReply(replyId: string) {
  return async function removeReplyThunk(dispatch: AppDispatch) {
    try {
      dispatch(setLoading(Status.LOADING));

      await api.delete(`/reply/delete/${replyId}`);

      dispatch(deleteReply(replyId));
      dispatch(setLoading(Status.SUCCESS));

    } catch (error) {
      dispatch(setLoading(Status.ERROR));
    }
  };
}