import { useDispatch, useSelector } from "react-redux";

function Header({ sidebarOpen, setSidebarOpen }) {
  return (
    <header className="sticky top-0 bg-white dark:bg-[#182235] border-b border-slate-200 dark:border-slate-700 z-30">
      <div className="px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start h-16 -mb-px space-x-8">
          <div className="flex">
            <button
              className="text-slate-500 hover:text-slate-600 lg:hidden"
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={(e) => {
                e.stopPropagation();
                setSidebarOpen(!sidebarOpen);
              }}
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="4" y="5" width="16" height="2" />
                <rect x="4" y="11" width="16" height="2" />
                <rect x="4" y="17" width="16" height="2" />
              </svg>
            </button>
          </div>
          <div className="font-bold ">
            <h4 className="uppercase">Selamat Datang Lusia</h4>
            <h5 className="uppercase">Anda Masuk Sebagai Admin</h5>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
