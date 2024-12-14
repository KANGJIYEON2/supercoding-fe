import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Homepage";
import User from "../pages/User/Login";
import Detail from "../pages/Detail/DetailPage";
import Layout from "../components/Layout";
import CartPage from "../pages/Cart/Cart";
import ProductListPage from "../pages/ProductListPage";
import Login from "../components/Login";
import SignUp from "../components/SignUp"; // SignUp 컴포넌트를 가져옵니다.

const AppRouter = () => {
  return (
    <Router>
      {/* Layout 컴포넌트를 최상위에서 한번만 감싸고, 내부에서 페이지를 렌더링 */}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          {/* 회원가입 페이지 경로 추가 */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;
