import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { USERS, UsersStateType, UserType } from "../../types/Usertype";

const usersInitialState: UsersStateType = {
  user: {
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

export const usersSlice = createSlice({
  name: USERS,
  initialState: usersInitialState,
  reducers: {
    getUserAction: (
      state: UsersStateType,
      { payload: _ }: PayloadAction<string>
    ) => {
      state.user.isLoading = true;
      state.user.errors = "";
    },
    getUserSuccessAction: (
      state: UsersStateType,
      { payload: user }: PayloadAction<UserType>
    ) => {
      state.user.isLoading = false;
      state.user.data = user;
    },
    getUserErrorAction: (
      state: UsersStateType,
      { payload: error }: PayloadAction<unknown>
    ) => {
      state.user.isLoading = false;
      state.user.errors = error;
    },
    getUserListAction: (state: UsersStateType) => {
      state.list.isLoading = true;
      state.list.errors = "";
    },
    getUserListSuccessAction: (
      state: UsersStateType,
      { payload: list }: PayloadAction<UserType[]>
    ) => {
      state.list.isLoading = false;
      state.list.data = list;
    },
    getUserListErrorAction: (
      state: UsersStateType,
      { payload: error }: PayloadAction<unknown>
    ) => {
      state.list.isLoading = false;
      state.list.errors = error;
    },
  },
});

export default usersSlice.reducer;
