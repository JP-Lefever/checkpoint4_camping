import { createBrowserRouter } from "react-router-dom";
import AdminLayer from "./AdminLayer";
import App from "./App";
import AdminPage from "./pages/adminPage/AdminPage";
import DetailPage from "./pages/detailPage/DetailPage";
import HomePage from "./pages/homePage/Homepage";
import ProfilPage from "./pages/profilPage/ProfilPage";
import RegisterPage from "./pages/register/Register";

export const mainRouter = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: () =>
          Promise.all([
            fetch(`${import.meta.env.VITE_API_URL}/camping/all/5`).then((res) =>
              res.json(),
            ),
            fetch(`${import.meta.env.VITE_API_URL}/camping/all/4`).then((res) =>
              res.json(),
            ),
          ]),
      },
      {
        path: "/camping/:id",
        element: <DetailPage />,
      },
      {
        path: "/profil",
        element: <ProfilPage />,
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
