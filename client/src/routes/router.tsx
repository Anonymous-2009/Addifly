import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import App from '../App';
import Signup from '../pages/SignUp';
import Login from '../pages/Login';
import Verify from '../pages/Verify';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home />,
      errorElement: <App />,
    },
    {
      path: '/signup',
      element: <Signup />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/verify',
      element: <Verify />,
    },
  ],
  {
    basename: '/',
  }
);
