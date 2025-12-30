import { jwtDecode } from "jwt-decode";
import type { JSX } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Header from "../Header/Header";

interface ProtectedRouteProps {
  children: JSX.Element;
  allowedRoles?: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  allowedRoles,
}) => {
  const token = useSelector((state: any) => state.jwt.jwt);

  // 🔐 Not logged in
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  const decoded: any = jwtDecode(token);

  // 🚫 Role not allowed
  if (
    allowedRoles &&
    !allowedRoles.includes(decoded.accountType)
  ) {
    return <Navigate to="/unauthorized" replace />;
  }

  // ✅ Allowed
  return children;
};

export default ProtectedRoute;
