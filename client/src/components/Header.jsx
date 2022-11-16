import "../styles/Header.css";
import LOGO from "../assets/images/logo.png";

const Header = (props) => {
  return (
    <nav className="navbar position-relative navbar-dark bg-primary fixed-top">
      <div
        className={`${
          props.showMobile
            ? "d-flex justify-content-start align-items-center"
            : "container-fluid"
        }`}
      >
        <div
          className="navbar-toggler"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </div>
        <a className="navbar-brand mx-5" href="/dashboard">
          <img src={LOGO} width="180" alt="LOGO" srcset="" />
        </a>
        <div
          className="offcanvas offcanvas-start text-bg-dark"
          tabindex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header">
            <div className="nav-item dropdown">
              <a
                className="nav-link offcanvas-title dropdown-toggle"
                id="offcanvasDarkNavbarLabel"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Administrator
              </a>
              <ul className="dropdown-menu dropdown-menu-light overflow-hidden">
                <li>
                  <a
                    className="dropdown-item"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                    href="#"
                    onClick={props.handleShow}
                  >
                    Manage Account
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/dashboard"
                >
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/classes">
                  Classes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/subjects">
                  Subjects
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Students
                </a>
                <ul className="dropdown-menu dropdown-menu-light overflow-hidden">
                  <li>
                    <a className="dropdown-item" href="/add_new">
                      Add New
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/list">
                      List
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/results">
                  Results
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
