import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

import Order from "./Page/Order/Order"
import Cart from "./Page/cart/Cart"
import Dashboard from "./Page/admin/dashboard/Dashboard";
import Home from "./Page/home/Home";
import MyState from "./context/data/myState";

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
          </Routes>
        </BrowserRouter>
      </MyState>

    </>
  )
}

export default App
