import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { POSTS, PostsStateType, PostType } from "../../types/PostType";

const postsInitialState: PostsStateType = {
  post: {
    data: null,
    isLoading: false,
    errors: "" as unknown,
  },
  list: {
    data: [],
    isLoading: false,
    errors: "" as unknown,
  },
};

export const postsSlice = createSlice({
  name: POSTS,
  initialState: postsInitialState,
  reducers: {
    getPostAction: (
      state: PostsStateType,
      { payload: _ }: PayloadAction<string>
    ) => {
      state.post.isLoading = true;
      state.post.errors = "";
    },
    getPostSuccessAction: (
      state: PostsStateType,
      { payload: post }: PayloadAction<PostType>
    ) => {
      state.post.isLoading = false;
      state.post.data = post;
    },
    getPostErrorAction: (
      state: PostsStateType,
      { payload: error }: PayloadAction<unknown>
    ) => {
      state.post.isLoading = false;
      state.post.errors = error;
    },
    getPostListAction: (state: PostsStateType) => {
      state.list.isLoading = true;
      state.list.errors = "";
    },
    getPostListSuccessAction: (
      state: PostsStateType,
      { payload: list }: PayloadAction<PostType[]>
    ) => {
      state.list.isLoading = false;
      state.list.data = list;
    },
    getPostListErrorAction: (
      state: PostsStateType,
      { payload: error }: PayloadAction<unknown>
    ) => {
      state.list.isLoading = false;
      state.list.errors = error;
    },
  },
});

export default postsSlice.reducer;
