import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
type UserProps = {
  id: number;
  email: string;
  role: string;
};

type ProtectedRouteProps = {
  user: UserProps | null;
  allowedRoles: string[];
  children: ReactNode;
};

export default function ProtectedRoute({
  user,
  allowedRoles,
  children,
}: { user: UserProps; allowedRoles: string[]; children: ProtectedRouteProps }) {
  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return children;
}
