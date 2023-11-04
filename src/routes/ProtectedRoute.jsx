import { Outlet, useLocation, Navigate } from "react-router-dom";

function ProtectedRoute() {
  const location = useLocation();

  return projectAuth.currentUser ? (
    <Outlet />
  ) : (
    // keep the previous navigation stack
    <Navigate to="/authentication" state={{ from: location }} replace />
  );
}

export default ProtectedRoute;
