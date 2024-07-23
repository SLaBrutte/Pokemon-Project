import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Signup from './pages/Signup';
import GameIndex from './pages/GameIndex';
import About from './pages/About'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Signup",
    element: <Signup />
  },
  {
    path: "/About",
    element: <About />
  },
  {
    path: "/GameIndex",
    element: <GameIndex />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />  
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
