import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISS, IssStateType, IssType } from "../../types/IssType";


const issInnitialState: IssStateType={
    post: {
      data: null,
      isLoading: false,
      errors: '' as unknown,
    },
    list: {
      data: [],
      isLoading: false,
      errors: '' as unknown,
    },
}

export const issSlice = createSlice({
    name: ISS,
    initialState: issInnitialState,
    reducers: {
      getIssAction: (
        state: IssStateType
      ) => {
        state.post.isLoading = true;
        state.post.errors = '';
      },
      getIssSuccessAction: (
        state: IssStateType,
        { payload: post }: PayloadAction<IssType>
      ) => {
        state.post.isLoading = false;
        state.post.data = post;
      },
      getIssErrorAction: (
        state: IssStateType,
        { payload: error }: PayloadAction<unknown>
      ) => {
        state.post.isLoading = false;
        state.post.errors = error;
      },
      getIssListAction: (state: IssStateType) => {
        state.list.isLoading = true;
        state.list.errors = '';
      },
      getIssListSuccessAction: (
        state: IssStateType,
        { payload: list }: PayloadAction<IssType[]>
      ) => {
        state.list.isLoading = false;
        state.list.data = list;
      },
      getIssListErrorAction: (
        state: IssStateType,
        { payload: error }: PayloadAction<unknown>
      ) => {
        state.list.isLoading = false;
        state.list.errors = error;
      },
    },
  })

  export default issSlice.reducer;