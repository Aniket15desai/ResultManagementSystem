import React from "react";
import { toast } from "react-toastify";

const Login = () => {
  const onSubmitLogin = () => {
    toast.success("Signing In...");
  };
  return (
    <div>
      <div className="bg-dark align-self-center w-100 vh-100">
        <h4 className="text-white text-center py-5">
          <b>Admin Login</b>
        </h4>
        <div id="login-center" className="d-flex justify-content-center">
          <div className="card col-md-4 p-5">
            <div className="card-body">
              <form id="login-form">
                <div className="form-group">
                  <label for="username" className="control-label text-dark">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="form-control form-control-sm"
                  />
                </div>
                <div className="form-group">
                  <label for="password" className="control-label text-dark">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control form-control-sm"
                  />
                </div>
                <div className="w-100 d-flex justify-content-between align-items-center mt-3">
                  <a
                    href="/dashboard"
                    className="btn btn-success m-0 mr-1"
                    onClick={(e) => {
                      onSubmitLogin();
                    }}
                  >
                    Login
                  </a>
                  <button
                    className="btn btn-primary m-0"
                    type="button"
                    id="view_result"
                  >
                    View Result
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
