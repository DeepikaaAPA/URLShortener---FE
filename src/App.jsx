import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import ForgotPassword from "./components/ForgotPassword";
import VerifyResetPassword from "./components/VerifyResetPassword";
import VerifyResetLink from "./components/VerifyResetLink";
import Register from "./components/Register";
import Login from "./components/Login";
import ShortenURL from "./components/ShortenURL";
import Shorts from "./components/Shorts";
import {
  tokenLoader,
  codeLoader,
  shortsParamsLoader,
} from "./loaders/paramsLoader";
import userLoader from "./loaders/userLoader";
import UserDashboardNav from "./wrappers/UserDashboardNav";
import Logout from "./components/Logout";
import Views from "./components/Views";
import ActivateAccount from "./components/ActivateAccount";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    loader: userLoader,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/activate/:token",

    element: <ActivateAccount />,
    loader: tokenLoader,
  },
  {
    path: "/forgot-password",

    element: <ForgotPassword />,
  },
  {
    path: "/reset",

    element: <VerifyResetPassword />,
  },
  {
    path: "/reset/:token",

    element: <VerifyResetLink />,
    loader: tokenLoader,
  },

  {
    path: "/shorts/:code",
    element: <Shorts></Shorts>,
    loader: shortsParamsLoader,
  },
  {
    path: "/shorten",
    element: <UserDashboardNav />,
    loader: userLoader,
    children: [
      {
        path: "",
        element: <ShortenURL></ShortenURL>,
      },

      {
        path: "view",
        element: <Views></Views>,
      },
    ],
  },
  {
    path: "/logout",
    element: <Logout />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
