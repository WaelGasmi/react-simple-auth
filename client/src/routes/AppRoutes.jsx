import { createBrowserRouter } from "react-router-dom";
import Layouts from "../components/Layouts";
import ErrorPage from "../pages/ErrorPage";
import LoginPage from "../pages/LoginPage";
import PrivateRoute from "../components/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Layouts />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);
