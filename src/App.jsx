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
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
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
    path: "/shorten",
    element: <ShortenURL></ShortenURL>,
  },
  {
    path: "/shorts/:code",
    element: <Shorts></Shorts>,
    loader:codeLoader
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

function tokenLoader({ params }) {
  return params.token;
}
function codeLoader({ params }) {
  return params.code;
}

export default App;
