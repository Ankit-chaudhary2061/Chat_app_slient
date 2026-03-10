import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Story, StoryUser, CreateStoryData } from "./story-slice-types";
import { Status } from "../../types/global-type";
import { AppDispatch } from "../store";
import api from "../../http/api";

interface StoryState {
  stories: Story[];
  myStories: Story[];
  viewers: StoryUser[];
  loading: Status;
}

const initialState: StoryState = {
  stories: [],
  myStories: [],
  viewers: [],
  loading: Status.IDLE,
};

const storySlice = createSlice({
  name: "story",
  initialState,
  reducers: {

    setStories(state, action: PayloadAction<Story[]>) {
      state.stories = action.payload;
    },

    addStory(state, action: PayloadAction<Story>) {
      state.stories.unshift(action.payload);
    },

    removeStory(state, action: PayloadAction<string>) {
      state.stories = state.stories.filter(
        (story) => story._id !== action.payload
      );
    },

    // updateStory(state, action: PayloadAction<Story>) {
    //   const index = state.stories.findIndex(
    //     (story) => story._id === action.payload._id
    //   );

    //   if (index !== -1) {
    //     state.stories[index] = action.payload;
    //   }
    // },
updateStoryLikes(
  state,
  action: PayloadAction<{ storyId: string; likes: number }>
) {

  const story = state.stories.find(
    (s) => s._id === action.payload.storyId
  );

  if (story) {
    story.likes = new Array(action.payload.likes);
  }

},
    setViewers(state, action: PayloadAction<StoryUser[]>) {
      state.viewers = action.payload;
    },

    setLoading(state, action: PayloadAction<Status>) {
      state.loading = action.payload;
    }

  },
});

export const {
  setStories,
  addStory,
  removeStory,
  updateStoryLikes,
  setViewers,
  setLoading
} = storySlice.actions;

export default storySlice.reducer;


export function fetchStories() {
  return async function fetchStoriesThunk(dispatch: AppDispatch) {
    try {

      dispatch(setLoading(Status.LOADING));

      const response = await api.get("/story");

      dispatch(setStories(response.data.data));

      dispatch(setLoading(Status.SUCCESS));

    } catch (error) {

      console.log("Fetch stories error", error);
      dispatch(setLoading(Status.ERROR));

    }
  };
}
export function createStory(data: CreateStoryData) {
  return async function createStoryThunk(dispatch: AppDispatch) {
    try {
    dispatch(setLoading(Status.SUCCESS))

      const formData = new FormData();
      if (data.text) formData.append("text", data.text);
      if (data.image) formData.append("images", data.image);

      const response = await api.post("/story/create", formData);
      dispatch(addStory(response.data.data));
    } catch (error) {
      console.log("Create story error", error);
    } finally {
           dispatch(setLoading(Status.ERROR))
      
    }
  };
}

export function likeStory(storyId: string) {
  return async function likeStoryThunk(dispatch: AppDispatch) {

    try {

      dispatch(setLoading(Status.LOADING))

      const response = await api.patch(`/story/like/${storyId}`)

      dispatch(
        updateStoryLikes({
          storyId,
          likes: response.data.likes
        })
      )

      dispatch(setLoading(Status.SUCCESS))

    } catch (error) {

      console.log("Like story error", error)

      dispatch(setLoading(Status.ERROR))

    }

  }
}

// Delete story
export function deleteStory(storyId: string) {
  return async function deleteStoryThunk(dispatch: AppDispatch) {
    try {
           dispatch(setLoading(Status.SUCCESS))

      await api.delete(`/story/delete/${storyId}`);
      dispatch(removeStory(storyId));
    } catch (error) {
      console.log("Delete story error", error);
      dispatch(setLoading(Status.ERROR));

    }
  };
}
export function fetchStoryViewers(id: string) {
  return async function fetchStoryViewersThunk(dispatch: AppDispatch) {

    try {

      const res = await api.get(`/story/views/${id}`);

      dispatch(setViewers(res.data.views));

    } catch (error) {

      console.log("viewer fetch error", error);

    }

  };
}
export function viewStory(id: string) {
  return async function viewStoryThunk() {

    try {

      await api.patch(`/story/view/${id}`);

    } catch (error) {

      console.log("view story error", error);

    }

  };
}