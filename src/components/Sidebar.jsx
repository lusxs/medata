import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HiSquares2X2, HiUsers } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import ModalLogout from "./modal/ModalLogout";

import SidebarLinkGroup from "./SidebarLinkGroup";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();
  const { pathname } = location;
  const [isModalLogout, setIsModalLogout] = useState(false);
  const navigate = useNavigate();
  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector("body").classList.add("sidebar-expanded");
    } else {
      document.querySelector("body").classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  const handleLogout = () => {
    navigate("/");
  };

  const openModal = () => {
    setIsModalLogout(true);
  };

  const closeModal = () => {
    setIsModalLogout(false);
  };

  return (
    <div>
      <div
        className={`fixed flex justify-between flex-col inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex justify-between pb-16 flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-red-600 p-4 transition-all duration-200 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        <div>
          <div className="flex justify-between pr-3 mb-10 sm:px-2">
            <button
              ref={trigger}
              className="lg:hidden text-slate-500 hover:text-slate-400"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
            >
              <span className="sr-only">Close sidebar</span>
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
              </svg>
            </button>
            <NavLink end to="/" className="block">
              <h1 className="text-3xl font-bold text-white uppercase">
                Medata
              </h1>
            </NavLink>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="pl-3 text-xs font-semibold uppercase text-slate-500">
                <span
                  className="hidden w-6 text-center lg:block lg:sidebar-expanded:hidden 2xl:hidden"
                  aria-hidden="true"
                >
                  •••
                </span>
              </h3>
              <ul className="mt-3">
                <li
                  className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                    pathname.includes("dashboard") && "bg-red-900"
                  }`}
                >
                  <NavLink
                    end
                    to="/dashboard"
                    className={`block text-slate-200 truncate transition duration-150 ${
                      pathname.includes("dashboard")
                        ? "hover:text-slate-200"
                        : "hover:text-white"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center grow">
                        <HiSquares2X2
                          size={28}
                          className={`fill-current ${
                            pathname.includes("dashboard")
                              ? "text-white-500"
                              : "text-slate-600"
                          }`}
                        />
                        <span className="ml-3 text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                          Dashboard
                        </span>
                      </div>
                    </div>
                  </NavLink>
                </li>
                <li
                  className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                    pathname.includes("account") && "bg-red-900"
                  }`}
                >
                  <NavLink
                    end
                    to="/account"
                    className={`block text-slate-200 truncate transition duration-150 ${
                      pathname.includes("account")
                        ? "hover:text-slate-200"
                        : "hover:text-white"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center grow">
                        <HiSquares2X2
                          size={28}
                          className={`fill-current ${
                            pathname.includes("account")
                              ? "text-white-500"
                              : "text-slate-600"
                          }`}
                        />
                        <span className="ml-3 text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                          Kelola Akun
                        </span>
                      </div>
                    </div>
                  </NavLink>
                </li>
                <li
                  className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                    pathname.includes("data-visitor") && "bg-red-900"
                  }`}
                >
                  <NavLink
                    end
                    to="/data-visitor"
                    className={`block text-slate-200 truncate transition duration-150 ${
                      pathname.includes("data-visitor")
                        ? "hover:text-slate-200"
                        : "hover:text-white"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center grow">
                        <HiSquares2X2
                          size={28}
                          className={`fill-current ${
                            pathname.includes("data-visitor")
                              ? "text-white-500"
                              : "text-slate-600"
                          }`}
                        />
                        <span className="ml-3 text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                          Pengunjung
                        </span>
                      </div>
                    </div>
                  </NavLink>
                </li>
                <li
                  className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                    pathname.includes("statistics") && "bg-red-900"
                  }`}
                >
                  <NavLink
                    end
                    to="/statistics"
                    className={`block text-slate-200 truncate transition duration-150 ${
                      pathname.includes("statistics")
                        ? "hover:text-slate-200"
                        : "hover:text-white"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center grow">
                        <HiSquares2X2
                          size={28}
                          className={`fill-current ${
                            pathname.includes("statistics")
                              ? "text-white-500"
                              : "text-slate-600"
                          }`}
                        />
                        <span className="ml-3 text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                          Data Statistik
                        </span>
                      </div>
                    </div>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <button
          onClick={() => openModal()}
          className="flex items-center justify-center space-x-4 btn"
        >
          <BiLogOut size={28} /> <span>Keluar</span>
        </button>
      </div>
      <ModalLogout
        isOpen={isModalLogout}
        onClose={closeModal}
        logout={handleLogout}
      />
    </div>
  );
}

export default Sidebar;
