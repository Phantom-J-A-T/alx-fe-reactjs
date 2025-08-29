import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, isAuthenticated }) {
  if (!isAuthenticated) {
    // If user not logged in, redirect to login
    return <Navigate to="/login" replace />;
  }
  return children;
}
  