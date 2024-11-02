import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StateType } from '../store/rootReducers';
import { usersSlice } from '../store/slice/users.slice';
import { Link } from 'react-router-dom';
import { PageRoute } from '../constant/PageRoute';
import { Spin, Table, Empty } from 'antd';
import AppHeader from './AppHeader';

function Users() {
  const { list } = useSelector((state: StateType) => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(usersSlice.actions.getUserListAction());
  }, [dispatch]);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: string, record: { id: string }) => (
        <Link to={`${PageRoute.USERS.HOME}/${record.id}`}>{text}</Link>
      ),
    },
  ];

  return (<>
    <AppHeader/>
    <div style={{ padding: '20px' }}>
      {list.isLoading ? (
        <Spin tip="Loading..." />
      ) : list.data && list.data.length > 0 ? (
        <Table
          columns={columns}
          dataSource={list.data}
          rowKey="id"
          pagination={{ pageSize: 5 }}
        />
      ) : (
        <Empty description="No users found!" />
      )}
    </div>
    </>
  );
}

export default Users;
