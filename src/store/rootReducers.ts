import usersReducer from './slice/users.slice';
import postsReducer from './slice/posts.slice';
import isssReducer from './slice/iss.slice';
import { UsersStateType } from '../types/Usertype';
import { PostsStateType } from '../types/PostType';
import { IssStateType } from '../types/IssType';

export type StateType = {
  users: UsersStateType;
  posts: PostsStateType;
  iss: IssStateType
};

const rootReducers = {
  users: usersReducer,
  posts: postsReducer,
  iss: isssReducer,
};

export default rootReducers;
