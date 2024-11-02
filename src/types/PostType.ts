import { IEntityState, IListState } from './Common';

export type PostType = {
  id: string;
  userid: string;
  title: string;
  body: string;
};

export type PostsStateType = {
  post: IEntityState<PostType>;
  list: IListState<PostType>;
};

export const POSTS = 'posts';
export type POSTS = typeof POSTS;

export const GET_POST_BY_ID = `${POSTS}/getPostAction`;
export type GET_POST_BY_ID = typeof GET_POST_BY_ID;
export const GET_POST_LIST = `${POSTS}/getPostListAction`;
export type GET_POST_LIST = typeof GET_POST_LIST;
