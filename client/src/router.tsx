import { createBrowserRouter } from "react-router-dom";
import AdminLayer from "./AdminLayer";
import App from "./App";
import AdminPage from "./pages/adminPage/AdminPage";
import HomePage from "./pages/homePage/Homepage";
import RegisterPage from "./pages/register/Register";

export const mainRouter = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    element: <AdminLayer />,
    children: [
      {
        path: "/admin",
        element: <AdminPage />,
      },
    ],
  },
]);
