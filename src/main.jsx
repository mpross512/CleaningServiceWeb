import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import Home from './pages/home/Home.jsx';
import About from './pages/about/About.jsx';
import Error from './pages/error/Error.jsx';
import Quote from './pages/quote/Quote.jsx';
import Contact from './pages/contact/Contact.jsx';
import Services from './pages/services/Services.jsx';

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/about",
        element: <About/> 
      },
      {
        path: "/contact",
        element: <Contact/> 
      },
      {
        path: "/quote",
        element: <Quote/> 
      },
      {
        path: "/services",
        element: <Services/> 
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
