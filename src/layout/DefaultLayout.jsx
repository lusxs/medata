import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

function DefaultLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const authUser = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (authUser.user === null && authUser.isAuthenticated === false) {
      navigate("/login");
    }
  }, [authUser, navigate]);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          <div className="w-full px-4 py-8 mx-auto sm:px-6 lg:px-8 max-w-9xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

export default DefaultLayout;
