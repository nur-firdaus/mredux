import { all, fork } from 'redux-saga/effects';
import { watchGetUser } from './saga/users.saga';
import { watchGetPost } from './saga/posts.saga';
import { watchGetIss } from './saga/iss.saga';

const rootSaga = function* () {
  yield all([fork(watchGetUser), fork(watchGetPost), fork(watchGetIss)]);
};

export default rootSaga;
