import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Home from "./pages/Home";
import Dashboard from "./pages/admin/DashboardAdmin";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import DataAccount from "./pages/admin/DataAccount";
import StatisticsAdmin from "./pages/admin/StatisticsAdmin";
import DataVisitor from "./pages/admin/DataVisitor";
import DashboardDivision from "./pages/division/DashboardDivision";
import DataVisitorDivision from "./pages/division/DataVisitorDivision";
import StatisticsGO from "./pages/go/StatisticsGO";

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
      <Route path="/data-visitor" element={<DataVisitor />} />
      <Route path="/statistics" element={<StatisticsAdmin />} />
      {/* Division */}
      <Route path="/division/dashboard" element={<DashboardDivision />} />
      <Route path="/division/data-visitor" element={<DataVisitorDivision />} />
      {/* GO */}
      <Route path="/go/dashboard" element={<DashboardDivision />} />
      <Route path="/go/data-visitor" element={<DataVisitorDivision />} />
      <Route path="/go/statistics" element={<StatisticsGO />} />
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
