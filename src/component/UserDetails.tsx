import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StateType } from '../store/rootReducers';
import { usersSlice } from '../store/slice/users.slice';
import { useParams } from 'react-router-dom';
import { Row, Col, Spin, Typography, Card, Empty } from 'antd';
import AppHeader from './AppHeader';

const { Title, Paragraph } = Typography;

function UserDetails() {
  const { user } = useSelector((state: StateType) => state.users);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(usersSlice.actions.getUserAction(id));
    }
  }, [dispatch, id]);

  if (!id) {
    return null;
  }

  return (<>
    <AppHeader/>
    <Row justify="center" style={{ padding: '20px' }}>
      <Col xs={24} sm={20} md={16} lg={12} xl={10}>
        {user.isLoading ? (
          <Spin tip="Loading..." style={{ display: 'block', textAlign: 'center', marginTop: '20px' }} />
        ) : user.data ? (
          <Card title="User Details" bordered>
            <Title level={4}>{user.data.name}</Title>
            <Paragraph><strong>Username:</strong> {user.data.username}</Paragraph>
            <Paragraph><strong>Email:</strong> {user.data.email}</Paragraph>
          </Card>
        ) : (
          <Empty description="No user found!" style={{ marginTop: '20px' }} />
        )}
      </Col>
    </Row>
    </>
  );
}

export default UserDetails;
