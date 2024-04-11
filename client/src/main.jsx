import ReactDOM from 'react-dom/client';
import Home from './components/pages/HomePage';
import Join from './components/pages/JoinPage';
import User from './components/pages/UserPage';
import FundDetail from './components/pages/FundDetailPage';
import Search from './components/pages/SearchPage';
import ErrorPage from './components/pages/ErrorPage';
import HowItWorks from './components/pages/HowItWorksPage';
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