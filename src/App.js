import React from "react";
import Topbar from "./components/topbar/Topbar.js";
import Sidebar from "./components/sidebar/Sidebar.js";
import "./App.scss";
import Home from "./pages/Home.js";
import UserList from "./pages/userlist/UserList.js";
import { Routes, Route } from "react-router-dom";
import User from "./pages/user/User.js";
import NewUser from "./pages/newuser/NewUser.js";
import ProductList from "./pages/productList/ProductList.js";
import Product from "./pages/product/Product.js";

const App = () => {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newuser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<Product />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
