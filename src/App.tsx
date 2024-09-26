import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Page404 from './pages/404';
import UsersPage from './pages/UsersPage';

function App() {
  // initialize a browser router
  const router = createBrowserRouter([
    {
      // parent route component
      element: <Layout />,
      errorElement: <Page404 />,
      // child route components
      children: [
        {
          path: '/',
          element: <UsersPage />
        }
      ]
    }
  ]);
  return <RouterProvider router={router} />;
}

export default App;
