import usersReducer from './slice/users.slice';
import postsReducer from './slice/posts.slice';
import isssReducer from './slice/iss.slice';
import commentReducer from './slice/comment.slice';
import { UsersStateType } from '../types/Usertype';
import { PostsStateType } from '../types/PostType';
import { IssStateType } from '../types/IssType';
import { CommentStateType } from '../types/Comment';

export type StateType = {
  users: UsersStateType;
  posts: PostsStateType;
  iss: IssStateType;
  comments: CommentStateType;
};

const rootReducers = {
  users: usersReducer,
  posts: postsReducer,
  iss: isssReducer,
  comment: commentReducer,
};

export default rootReducers;
