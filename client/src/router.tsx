import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/homePage/Homepage";

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
]);
