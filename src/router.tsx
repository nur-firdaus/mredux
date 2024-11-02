import { createBrowserRouter } from 'react-router-dom';
import { PageRoute } from './constant/PageRoute';
import Users from './component/Users';
import Posts from './component/Posts';
import { Error } from './component/Error';
import UserDetails from './component/UserDetails';


export const router = createBrowserRouter([
    {
      path: PageRoute.HOME,
      element: <Posts />,
      errorElement: <Error />,
    },
    {
       path: PageRoute.POSTS.HOME,
       element: <Posts />,
    },
    {
      path: PageRoute.USERS.HOME,
      element: <Users />,
    },
    {
      path: `${PageRoute.USERS.HOME}/:id`,
      element: <UserDetails />,
    },
  ]);
  