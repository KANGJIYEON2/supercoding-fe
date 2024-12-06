import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Homepage";
import User from "../pages/User/Login";
import Detail from "../pages/DetailPage";
import Layout from "../components/Layout";
import CartPage from "../pages/Cart/Cart";

const AppRouter = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;
