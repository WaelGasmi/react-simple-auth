import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function PrivateRoute({ children }) {
  const { user } = useAuth();

  return user ? <div>{children}</div> : <Navigate to={"/login"} />;
}
