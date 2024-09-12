import { Link, Outlet, useLoaderData, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const UserDashboardNav = () => {
  const user = useLoaderData();
  const navigate = useNavigate();
  console.log(user);
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand">Welcome, {user.firstname}</span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/shorten">
                  URL Shortener
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="view">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/logout">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default UserDashboardNav;
