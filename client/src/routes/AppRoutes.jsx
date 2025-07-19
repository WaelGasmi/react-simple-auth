import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "../components/PrivateRoute";
import SignupPage from "../pages/SingupPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <HomePage />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  { path: "/signup", element: <SignupPage /> },
]);
