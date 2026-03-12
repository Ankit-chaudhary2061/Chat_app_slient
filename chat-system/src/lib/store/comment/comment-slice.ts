import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddCommentPayload, Comment, CommentState, UpdateCommentPayload } from "./comment-slice-types";
import { Status } from "../../types/global-type";
import { AppDispatch } from "../store";
import api from "../../http/api";

const initialState:CommentState = {
    comments: [],
    loading:Status.IDLE,
    error:null
    

}


const commentSlice =  createSlice({
    name: 'comment',
    initialState,
    reducers:{
         setComments(state, action: PayloadAction<Comment[]>) {
      state.comments = action.payload;
    },

    addComment(state, action: PayloadAction<Comment>) {
      state.comments.unshift(action.payload);
    },

    removeComment(state, action: PayloadAction<string>) {
      state.comments = state.comments.filter(
        (comment) => comment._id !== action.payload
      );
    },
     setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },

    updateComment(state, action: PayloadAction<Comment>) {
      const index = state.comments.findIndex(
        (comment) => comment._id === action.payload._id
      );

      if (index !== -1) {
        state.comments[index] = action.payload;
      }
    },
    setLoading(state:CommentState, action:PayloadAction<Status>){
        state.loading = action.payload
    }
  }
    }
)

export const{updateComment , removeComment , setLoading, addComment , setComments ,setError}= commentSlice.actions
export default commentSlice.reducer


export function getComments (postId :string){
    return async function getCommentsThunk(dispatch:AppDispatch){
        try {
            dispatch(setLoading(Status.LOADING))
            const response = await api.get(`/comments/${postId}`)
            dispatch(setComments(response.data.data));
            dispatch(setLoading(Status.SUCCESS))

        } catch (error:any) {
       
      dispatch(setError(error.response?.data?.message || "Failed to fetch comments"));

    } finally {
      dispatch(setLoading(Status.ERROR));
    }
    }
}
// ADD COMMENT
export function createComment(data: AddCommentPayload) {
  return async function createCommentThunk(dispatch: AppDispatch) {
    try {

      dispatch(setLoading(Status.LOADING));

      const response = await api.post(`/comments/${data.postId}`, {
        text: data.text
      });

      dispatch(addComment(response.data.data));
      dispatch(setLoading(Status.SUCCESS));

    } catch (error: any) {

      dispatch(setError(error.response?.data?.message || "Failed to add comment"));

    } finally {
            dispatch(setLoading(Status.ERROR));

    }
  };
}

// DELETE COMMENT
export function deleteComment(commentId: string) {
  return async function deleteCommentThunk(dispatch: AppDispatch) {
    try {

    dispatch(setLoading(Status.LOADING));


      await api.delete(`/comments/${commentId}`);

      dispatch(removeComment(commentId));
    dispatch(setLoading(Status.SUCCESS));

    } catch (error: any) {

      dispatch(setError(error.response?.data?.message || "Failed to delete comment"));

    } finally {
    dispatch(setLoading(Status.ERROR));

    }
  };
}
export function editComment(data: UpdateCommentPayload) {
  return async function editCommentThunk(dispatch: AppDispatch) {
    try {

      dispatch(setLoading(Status.LOADING));

      const response = await api.patch(`/comments/${data.commentId}`, {
        text: data.text
      });

      dispatch(updateComment(response.data.data));
      dispatch(setLoading(Status.SUCCESS));


    } catch (error: any) {

      dispatch(setError(error.response?.data?.message || "Failed to update comment"));

    } finally {
      dispatch(setLoading(Status.ERROR));
    }
  };
}