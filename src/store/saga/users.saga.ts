import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import { usersSlice } from '../slice/users.slice';
import apiClient from '../../library/apiClient';
import { ApiEndpoints } from '../../constant/ApiEndpoints';
import {
  GET_USER_BY_ID,
  GET_USER_LIST,
  UserType,
} from '../../types/Usertype';

function* getUserSaga({ payload: id }: PayloadAction<string>) {
  try {
    const response: AxiosResponse<UserType> = yield apiClient.get(
      `${ApiEndpoints.USERS}/${id}`
    );
    yield put(usersSlice.actions.getUserSuccessAction(response.data));
  } catch (error) {
    yield put(usersSlice.actions.getUserErrorAction(error as string));
  }
}

function* getUserListSaga() {
  try {
    const response: AxiosResponse<UserType[]> = yield apiClient.get(
      `${ApiEndpoints.USERS}`
    );
    yield put(usersSlice.actions.getUserListSuccessAction(response.data));
  } catch (error) {
    yield put(usersSlice.actions.getUserListErrorAction(error as string));
  }
}

export function* watchGetUser() {
  yield takeLatest(GET_USER_BY_ID, getUserSaga);
  yield takeLatest(GET_USER_LIST, getUserListSaga);
}
