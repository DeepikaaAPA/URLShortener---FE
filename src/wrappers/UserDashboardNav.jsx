import { Link, Outlet, useLoaderData } from "react-router-dom";

const UserDashboardNav = () => {
  const user = useLoaderData();

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-warning">
       
        <div className="container-fluid">
        <div className="nav-link disabled text-success pe-5 font-italic">Welcome { user.firstname }!
        </div>
          <Link className="navbar-brand text-success " to="/shorten">
            Shorten URLs
          </Link>
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
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item  ">
                <Link
                  className="nav-link active text-success"
                  aria-current="page"
                  to="view"
                >
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-success"
                  aria-current="page"
                  to="/logout"
                >
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
