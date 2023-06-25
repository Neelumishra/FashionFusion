import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom";
import Contact from '../components/contact';
import Homepage from '../pages/Homepage';
import Login from "../pages/login";
import Cart from '../pages/cart';
import { useContext } from "react";
import {MyContext} from "../context/authContext"
import Mens from '../pages/mens';
import Womens from '../pages/womens';

function router() {
  const { isLogin } = useContext(MyContext);
  function ProtectedRoute ({children}){
    console.log("From protected Route", isLogin)
    if(isLogin){
       return children;
    }else{
     return  <Navigate to="/login" />;
     
    }
  }
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route
        path="/account"
        element={
          <ProtectedRoute>
            <Contact />
          </ProtectedRoute>
        }
      />
      <Route path="/category" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        }
      />
      <Route path="/mensection" element={<Mens />} />
      <Route path="/womensection" element={<Womens />} />
      <Route path="/cart" element={<Cart/>} />
    </Routes>
  );
}

export default router