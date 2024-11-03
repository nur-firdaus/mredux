import React, { useEffect } from "react";
import { Card, Empty, Modal, Spin } from "antd";
import { PostType } from "../types/PostType";
import { useDispatch, useSelector } from "react-redux";
import { commentSlice } from "../store/slice/comment.slice";
import { StateType } from "../store/rootReducers";
import { CommentType } from "../types/Comment";

type PostModalProps = {
  isVisible: boolean;
  post: PostType;
  onClose: () => void;
};

function PostModal({ isVisible, post, onClose }: PostModalProps) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(commentSlice.actions.getCommentsAction(post.id));
    //dispatch(issSlice.actions.getIssAction());
  }, [dispatch, post, isVisible]);

  return (
    <Modal
      title={post?.title}
      visible={isVisible}
      onOk={onClose}
      onCancel={onClose}
    >
      <p>{post?.body}</p>
    </Modal>
  );
}

export default PostModal;
