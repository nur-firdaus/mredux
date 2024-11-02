import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import apiClient from '../../library/apiClient';
import { ApiEndpoints } from '../../constant/ApiEndpoints';
import { postsSlice } from '../slice/posts.slice';
import {
  GET_POST_BY_ID,
  GET_POST_LIST,
  PostType,
} from '../../types/PostType';

function* getPostSaga({ payload: id }: PayloadAction<string>) {
  try {
    const response: AxiosResponse<PostType> = yield apiClient.get(
      `${ApiEndpoints.POSTS}/${id}`
    );
    yield put(postsSlice.actions.getPostSuccessAction(response.data));
  } catch (error) {
    yield put(postsSlice.actions.getPostErrorAction(error as string));
  }
}

function* getPostsSaga() {
  try {
    const response: AxiosResponse<PostType[]> = yield apiClient.get(
      `${ApiEndpoints.POSTS}`
    );
    yield put(postsSlice.actions.getPostListSuccessAction(response.data));
  } catch (error) {
    yield put(postsSlice.actions.getPostListErrorAction(error as string));
  }
}

export function* watchGetPost() {
  yield takeLatest(GET_POST_BY_ID, getPostSaga);
  yield takeLatest(GET_POST_LIST, getPostsSaga);
}
