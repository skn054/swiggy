import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import './index.css';
import App from './App';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';


//create router configuration

const router = createBrowserRouter([{
    path:"/",
    element:<App/>,
    errorElement:<ErrorPage/>,
    children:[{
        path:"/",
        element:<Body/>
    },
    {
        // path:"/about",  no need to add '/'  to path
        path:"about",
        element:<About/>
    },
    {
        path:"contact",
        element:<Contact/>
    },
    {
        path:"restaurant/:id",
        element:<RestaurantMenu/>
    }
]
}])
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
root.render(<RouterProvider router={router}/>);


