import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
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
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./context/FirebaseContext";
import { login } from "./features/userSlice";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
          
        );
        setIsAuth(true)
      } else {
        setIsAuth(false)
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  return (
    <main>
      <Routes>
        {isAuth ? (
          <>
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
          </>
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<NotFound />} />
          </>
        )}
      </Routes>
    </main>
  );
}

export default App;
