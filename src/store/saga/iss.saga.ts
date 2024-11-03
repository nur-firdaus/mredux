import axios, { AxiosResponse } from "axios";
import { GET_ISS, IssType } from "../../types/IssType";
import { put, takeLatest } from 'redux-saga/effects';
import { issSlice } from "../slice/iss.slice";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  });

function* getPostSaga() {
    try {
      const response: AxiosResponse<IssType> = yield axiosInstance.get<IssType>('/satellites/iss');
      yield put(issSlice.actions.getIssSuccessAction(response.data));
    } catch (error) {
      yield put(issSlice.actions.getIssErrorAction(error as string));
    }
}

export function* watchGetIss() {
    yield takeLatest(GET_ISS, getPostSaga);
}