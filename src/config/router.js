import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from '../views/Header/Header'
import Showdata from '../views/Cards/cards';
import Register from '../views/Auth/register';
import Login from '../views/Auth/login';


const router = createBrowserRouter([
   
    {
      path: "/header",
      element: <Header />,
    },
    {
      path: "/",
      element: <Showdata />,
    },
    {
      path: "register",
      element: <Register />,
    },
    {
      path: "login",
      element: <Login />,
    },
 
  ]);

  function Router(){

    return  <RouterProvider router={router} />
    
  }

  export default Router