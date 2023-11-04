import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Home from "./pages/Home";
import ProductCreate from "./pages/product/ProductCreate";
import ProductUpdate from "./pages/product/ProductUpdate";
import Dashboard from "./pages/admin/DashboardAdmin";
import ProductDetail from "./pages/product/ProductDetail";
import ProductList from "./pages/product/ProductList";
import UserList from "./pages/user/UserList";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import UserForm from "./pages/user/UserForm";
import { getMe } from "./states/actions/authActions";
import DataAccount from "./pages/admin/DataAccount";
import StatisticsAdmin from "./pages/admin/StatisticsAdmin";

function App() {
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.auth);

  // useEffect(() => {
  //   dispatch(getMe());
  // }, [dispatch]);

  // if (authUser.user === null && authUser.isAuthenticated === false) {
  //   return (
  //     <>
  //       <main>
  //         <Routes>
  //           <Route path="/login" element={<Login />} />
  //           <Route path="/" element={<Home />} />
  //           <Route path="/*" element={<NotFound />} />
  //         </Routes>
  //       </main>
  //     </>
  //   );
  // }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/account" element={<DataAccount />} />
      <Route path="/data-visitor" element={<DataAccount />} />
      <Route path="/statistics" element={<StatisticsAdmin />} />
      <Route path="/users" element={<UserList />} />
      <Route path="/add-user" element={<UserForm />} />
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
