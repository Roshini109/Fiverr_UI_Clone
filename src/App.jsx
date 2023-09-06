import React from "react";
import './app.scss'
import Home from './pages/home/Home';
import Add from './pages/add/Add'
import Gig from './pages/gig/Gig'
import Gigs from './pages/gigs/Gigs'
import Login from './pages/login/Login'
import Orders from './pages/orders/Orders'
import MyGigs from './pages/myGigs/MyGigs'
import Message from './pages/message/Message'
import Messages from './pages/messages/Messages'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from './components/footer/Footer'

function App() {

  const Layout = () => {
    return (
      <>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children :[
        {
          path : "/",
          element : <Home/>
        },
        {
          path : "/gigs",
          element : <Gigs/>
        },
        {
          path : "/gig/:id",
          element : <Gig/>
        },
        {
          path : "/login",
          element : <Login/>
        },
        {
          path : "/orders",
          element : <Orders/>
        },
        {
          path : "/myGigs",
          element : <MyGigs/>
        },
        {
          path : "/add",
          element : <Add/>
        },
        {
          path : "/message/:id",
          element : <Message/>
        },
        {
          path : "/messages",
          element : <Messages/>
        },
      ]
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
