import ReactDOM from 'react-dom/client';
import Home from './pages/HomePage';
import Join from './pages/JoinPage';
import User from './pages/UserPage';
import FundDetail from './pages/FundDetailPage';
import ErrorPage from './pages/ErrorPage';
import Create from './pages/CreateFundPage';
import Login from './pages/LoginPage';
import App from './App';
import Stripe from './pages/Stripe';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/join',
        element: <Join />,
      },
      {
        path: '/create',
        element: <Create />,
      },
      {
        path: '/user',
        element: <User />,
      },
      {
        path: '/fundDetail/:id',
        element: <FundDetail />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/donate',
        element: <Stripe />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
