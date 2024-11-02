import usersReducer from './slice/users.slice';
import postsReducer from './slice/posts.slice';
import { UsersStateType } from '../types/Usertype';
import { PostsStateType } from '../types/PostType';

export type StateType = {
  users: UsersStateType;
  posts: PostsStateType;
};

const rootReducers = {
  users: usersReducer,
  posts: postsReducer,
};

export default rootReducers;
