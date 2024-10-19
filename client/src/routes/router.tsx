import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import Home from '../pages/Home';
import Signup from '../pages/auth/SignUp';
import Login from '../pages/auth/Login';
import Verify from '../pages/auth/Verify';
import App from '../App';
import Get from '../pages/regular/Get';
import Add from '../pages/regular/Add';
import Delete from '../pages/regular/Delete';
import Find from '../pages/regular/Find';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'signup',
        element: <Signup />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'verify',
        element: <Verify />,
      },
      {
        path: 'getall',
        element: <Get />,
      },
      {
        path: 'add',
        element: <Add />,
      },
      {
        path: 'delete',
        element: <Delete />,
      },
      {
        path: 'find',
        element: <Find />,
      },
    ],
  },
]);
