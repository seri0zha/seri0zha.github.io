import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "normalize.css";
import "./assets/index.scss";
import Wishlist from "./wishlist";
import Home from "./home";

const router = createBrowserRouter([
  {
    path: "/wishlist",
    element: <Wishlist/>
  },
  {
    path: "*",
    element: <Home/>,
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
