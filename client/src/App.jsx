import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Cart from "./pages/Cart";
import Admin from "./Admin/AdminDashboard";
import AdminProducts from "./Admin/AdminProducts";
import AddProduct from "./Admin/AddProduct";
import EditProduct from "./Admin/EditProduct";
import UserQuery from "./pages/UserQuery";
import AdminQuery from "./Admin/AdminQuery";
import ReplyQuery from "./Admin/ReplyQuery";
import DetailedProduct from "./pages/DetailedProduct";
import SearchItems from "./components/SearchItems";
import UnAuthorized from "./components/UnAuthorized";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/query" element={<UserQuery />} />
          <Route path="/product/:id" element={<DetailedProduct />} />
          <Route path="/search/:id" element={<SearchItems />} />
          <Route path="/unknown" element={<UnAuthorized />} />

          <Route path="/admin/dashboard" element={<Admin />} />
          <Route path="/admin/products" element={<AdminProducts />} />
          <Route path="/admin/add-product" element={<AddProduct />} />
          <Route path="/admin/edit-product/:id" element={<EditProduct />} />
          <Route path="/admin/query" element={<AdminQuery />} />
          <Route path="/admin/reply-query/:id" element={<ReplyQuery />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
