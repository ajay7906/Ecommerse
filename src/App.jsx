import { BrowserRouter, Routes, Route } from "react-router-dom";
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

function App() {

  return (
    <>
      <MyState>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order" element={<Order />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/addproduct" element={<AddProduct/>} />
            <Route path="/updateproduct" element={<UpdateProduct/>} />
            <Route path="/productinfo/:id" element={<ProductInfo/>} />
            <Route path="/*" element={<NoPage/>} />
          </Routes>
        </BrowserRouter>
      </MyState>

    </>
  )
}

export default App
