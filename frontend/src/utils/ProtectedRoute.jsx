import { Outlet, Navigate } from "react-router-dom";
const isAuth = false;

const ProtectedRoute = () => {
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
