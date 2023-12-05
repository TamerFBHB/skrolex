import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from './pages/MainPage/MainPage.jsx';
import React from "react";
import "./index.scss"  ;

const router =createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement : <h1> Sorry .........................</h1>
  },
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


