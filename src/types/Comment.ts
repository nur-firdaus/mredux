import { IListState } from "./Common";

export type CommentType = {
    postId: string;
    id: string;
    name: string;
    email: string;
    body: string;
};

export type CommentStateType = {
    listComments: IListState<CommentType>;
};

export const COMMENTS = 'comments';
export type COMMENTS = typeof COMMENTS;

export const GET_COMMENTS_BY_ID = `${COMMENTS}/getCommentsAction`;
export type GET_COMMENTS_BY_ID = typeof GET_COMMENTS_BY_ID;
