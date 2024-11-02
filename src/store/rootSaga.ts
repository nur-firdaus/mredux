import { all, fork } from 'redux-saga/effects';
import { watchGetUser } from './saga/users.saga';
import { watchGetPost } from './saga/posts.saga';

const rootSaga = function* () {
  yield all([fork(watchGetUser), fork(watchGetPost)]);
};

export default rootSaga;
