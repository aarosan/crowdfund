import ReactDOM from 'react-dom/client';
import Home from './pages/HomePage';
import Join from './pages/JoinPage';
import User from './pages/UserPage';
import FundDetail from './pages/FundDetailPage';
import Search from './pages/SearchPage';
import ErrorPage from './pages/ErrorPage';
import HowItWorks from './pages/HowItWorksPage';
import App from './App';

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
        path: '/how-it-works',
        element: <HowItWorks />,
      },
      {
        path: '/user',
        element: <User />,
      },
      {
        path: '/detail',
        element: <FundDetail />,
      },
      {
        path: '/search',
        element: <Search />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);