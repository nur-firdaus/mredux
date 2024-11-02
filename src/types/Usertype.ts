import { IEntityState, IListState } from './Common';

export type UserType = {
  id: string;
  username: string;
  name: string;
  email: string;
};

export type UsersStateType = {
  user: IEntityState<UserType>;
  list: IListState<UserType>;
};

export const USERS = 'users';
export type USERS = typeof USERS;

export const GET_USER_BY_ID = `${USERS}/getUserAction`;
export type GET_USER_BY_ID = typeof GET_USER_BY_ID;
export const GET_USER_LIST = `${USERS}/getUserListAction`;
export type GET_USER_LIST = typeof GET_USER_LIST;
