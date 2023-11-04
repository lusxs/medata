import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Home from "./pages/Home";
import ProductCreate from "./pages/product/ProductCreate";
import ProductUpdate from "./pages/product/ProductUpdate";
import Dashboard from "./pages/Dashboard";
import ProductDetail from "./pages/product/ProductDetail";
import ProductList from "./pages/product/ProductList";
import UserList from "./pages/user/UserList";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import UserForm from "./pages/user/UserForm";
import { getMe } from "./states/actions/authActions";

function App() {
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.auth);

  // useEffect(() => {
  //   dispatch(getMe());
  // }, [dispatch]);

  if (authUser.user === null && authUser.isAuthenticated === false) {
    return (
      <>
        <main>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </main>
      </>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/add-product" element={<ProductCreate />} />
      <Route path="/update-product" element={<ProductUpdate />} />
      <Route path="/detail-product" element={<ProductDetail />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/users" element={<UserList />} />
      <Route path="/add-user" element={<UserForm />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
