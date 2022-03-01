import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardApp from './pages/DashboardApp';
import Products from './pages/Products';
import Blog from './pages/Blog';
import User from './pages/User';
import NotFound from './pages/Page404';

// ----------------------------------------------------------------------

export default function Router() {
  // const isLoggedIn = localStorage.getItem('login');
  const isLoggedIn = true;

  return useRoutes([
    {
      path: '/',
      element: isLoggedIn ? <DashboardLayout /> : <Navigate to="/login" />,
      children: [
        { path: '/', element: <Navigate to="dashboard" /> },
        { path: 'dashboard', element: <DashboardApp /> },
        { path: 'catch', element: <User /> },
        { path: 'mypoke', element: <Products /> },
        { path: 'profile', element: <Blog /> },
        { path: 'shop', element: <Products /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    {
      path: '/login',
      element: <Login />
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
