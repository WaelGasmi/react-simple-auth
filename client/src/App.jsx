import { RouterProvider } from "react-router-dom";
import { router } from "./routes/AppRoutes";

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
