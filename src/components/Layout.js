import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const location = useLocation();
  const isCartPage = location.pathname === "/cart";

  return (
    <>
      {!isCartPage && <Header />}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
