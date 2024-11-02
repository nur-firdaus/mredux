import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StateType } from '../store/rootReducers';
import { postsSlice } from '../store/slice/posts.slice';
import { Spin, Card, Empty } from 'antd';
import AppHeader from './AppHeader';

function Posts() {
  const { list } = useSelector((state: StateType) => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postsSlice.actions.getPostListAction());
  }, [dispatch]);

  return (<>
    <AppHeader/>
    <div style={{ padding: '20px' }}>
      {list.isLoading ? (
        <Spin tip="Loading..." />
      ) : list.data && list.data.length > 0 ? (
        <div style={{ display: 'grid', gap: '16px' }}>
          {list.data.map((post) => (
            <Card key={post.id} title={post.title} bordered={false} style={{ width: '100%' }}>
              <p>{post.body}</p>
            </Card>
          ))}
        </div>
      ) : (
        <Empty description="No post found!" />
      )}
    </div></>
  );
}

export default Posts;
