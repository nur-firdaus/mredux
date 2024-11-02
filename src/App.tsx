import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { Layout } from 'antd';

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
