import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StateType } from "../store/rootReducers";
import { postsSlice } from "../store/slice/posts.slice";
import { Spin, Card, Empty } from "antd";
import AppHeader from "./AppHeader";
import { postInnitType, PostType } from "../types/PostType";
import PostModal from "./PostModal";

function Posts() {
  const { list } = useSelector((state: StateType) => state.posts);

  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedPost, setSelectedPost] = useState<PostType>();

  useEffect(() => {
    setSelectedPost(postInnitType)
    dispatch(postsSlice.actions.getPostListAction());
    //dispatch(issSlice.actions.getIssAction());
  }, [dispatch]);

  const openModal = (post: PostType) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPost(postInnitType);
  };

  return (
    <>
      <AppHeader />
      <div style={{ padding: "20px" }}>
        {list.isLoading ? (
          <Spin tip="Loading..." />
        ) : list.data && list.data.length > 0 ? (
          <div style={{ display: "grid", gap: "16px" }}>
            {list.data.map((post: PostType) => (
              <Card
                key={post.id}
                title={post.title}
                bordered={false}
                style={{ width: "100%" }}
                onClick={() => openModal(post)}
              >
                <p>{post.body}</p>
              </Card>
            ))}
          </div>
        ) : (
          <Empty description="No post found!" />
        )}
      </div>

      {/* PostModal Component */}
      <PostModal
        isVisible={isModalOpen}
        post={selectedPost==null?postInnitType:selectedPost}
        onClose={closeModal}
      />
    </>
  );
}

export default Posts;
