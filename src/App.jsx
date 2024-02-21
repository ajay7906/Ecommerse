import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css'

import Order from "./Page/Order/Order"
import Cart from "./Page/cart/Cart"
import Dashboard from "./Page/admin/dashboard/Dashboard";
import Home from "./Page/home/Home";
import MyState from "./context/data/myState";
import Login from "./Page/registration/Login";
import Signup from "./Page/registration/Signup";
import NoPage from "./Page/nopage/NoPage"
import ProductInfo from "./Page/productInfo/ProductInfo";
import AddProduct from "./Page/admin/pages/AddProduct";
import UpdateProduct from "./Page/admin/pages/UpdateProduct";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <MyState>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order" element={
              <ProtectedRoutes>
                <Order />
              </ProtectedRoutes>
            } />
            <Route path="/cart" element={<Cart />} />
            <Route path="/dashboard" element={
              <ProtectedRouteForAdmin>
                <Dashboard />
              </ProtectedRouteForAdmin>
            } />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/addproduct" element={
              <ProtectedRouteForAdmin>
                <AddProduct />
              </ProtectedRouteForAdmin>
            } />
            <Route path="/updateproduct" element={
              <ProtectedRouteForAdmin>
                <UpdateProduct />
              </ProtectedRouteForAdmin>
            } />
            <Route path="/productinfo/:id" element={<ProductInfo />} />
            <Route path="/*" element={<NoPage />} />
          </Routes>
          <ToastContainer />
        </BrowserRouter>
      </MyState>

    </>
  )
}

export default App


//user file
export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem('currentUser')) {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}



// admin 

const ProtectedRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem('user'))

  if (admin.user.email === 'knupadhyay784@gmail.com') {
    return children
  }
  else {
    return <Navigate to={'/login'} />
  }

}