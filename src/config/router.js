<<<<<<< HEAD
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
 
=======
import {createBrowserRouter,RouterProvider,} from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
>>>>>>> d7c2a723770ed9e72b58da23d5d2a4dfde19a9de
  ]);

  function Router(){

    return  <RouterProvider router={router} />
<<<<<<< HEAD
    
=======
>>>>>>> d7c2a723770ed9e72b58da23d5d2a4dfde19a9de
  }

  export default Router