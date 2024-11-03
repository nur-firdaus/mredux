import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { CommentType, GET_COMMENTS_BY_ID } from "../../types/Comment";
import apiClient from "../../library/apiClient";
import { ApiEndpoints } from "../../constant/ApiEndpoints";
import { commentSlice } from "../slice/comment.slice";
import { put, takeLatest } from "redux-saga/effects";

function* getPostSaga({ payload: id }: PayloadAction<string>) {
    try {
        console.log("SAMPAI")
      const response: AxiosResponse<CommentType[]> = yield apiClient.get(
        `${ApiEndpoints.COMMENTS}=${id}`
      );
      yield put(commentSlice.actions.getCommentListSuccessAction(response.data));
    } catch (error) {
      yield put(commentSlice.actions.getCommentListErrorAction(error as string));
    }
}

export function* watchGetComment() {
    yield takeLatest(GET_COMMENTS_BY_ID, getPostSaga);
}
  