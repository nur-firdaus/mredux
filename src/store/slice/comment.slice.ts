import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { COMMENTS, CommentStateType, CommentType } from "../../types/Comment";

const commentsInitialState: CommentStateType = {
    listComments: {
      data: [],
      isLoading: false,
      errors: '' as unknown,
    },
};


export const commentSlice = createSlice({
    name: COMMENTS,
    initialState: commentsInitialState,
    reducers: {
      getCommentsAction: (
        state: CommentStateType,
        { payload: _ }: PayloadAction<any>
      ) => {
        state.listComments.isLoading = true;
        state.listComments.errors = '';
      },
      getCommentListSuccessAction: (
        state: CommentStateType,
        { payload: list }: PayloadAction<CommentType[]>
      ) => {
        state.listComments.isLoading = false;
        state.listComments.data = list;
      },
      getCommentListErrorAction: (
        state: CommentStateType,
        { payload: error }: PayloadAction<unknown>
      ) => {
        state.listComments.isLoading = false;
        state.listComments.errors = error;
      },
    },
});
  
export default commentSlice.reducer;
  