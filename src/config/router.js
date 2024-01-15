import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from '../views/Header/header'
import Showdata from '../views/Cards/cards';


const router = createBrowserRouter([
   
    {
      path: "/header",
      element: <Header />,
    },
    {
      path: "/cards",
      element: <Showdata />,
    },
 
  ]);

  function Router(){

    return  <RouterProvider router={router} />
    
  }

  export default Router