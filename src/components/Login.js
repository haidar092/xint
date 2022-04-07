import React, { useState } from "react";

import { toast, ToastContainer } from "react-toastify";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { LoginApi, SignupApi } from "./Api";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setshowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    LoginApi(username, password)
      .then((res) => {
        console.log("myyyres", res);
        localStorage.setItem("token", res.data.token);
        toast.success("login succcessfully");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
        toast.error("error to get response");
      })
      .catch((err) => {
        console.log("login", err);
        toast.error("ERR_CONNECTION_TIMED_OUT");
      });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    SignupApi(username, password)
      .then((res) => {
        console.log("myyyres", res);
        localStorage.setItem("token", res.data.token);

        toast.success("Register succcessfully");

        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((err) => {
        console.log("login", err);
        toast.error("Error to load data");
      });
  };
  return (
    <>
      <ToastContainer autoClose={3000} />
      <div className="container-fluid img-wrapper">
        <div className="form-login-section-container">
          <div className="form-heading  mt-3">
            <p className="text-center mt-2">xint sloution</p>
          </div>
          <div className="login-form-content  mt-1">
            <form>
              <div className="login-input-section">
                <input
                  type="email"
                  placeholder="User name / email"
                  name="username"
                  required
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="login-input-section">
                <i class="fas fa-lock"></i>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  onMouseDown={() => {
                    setshowPassword(true);
                  }}
                  onMouseUp={() => {
                    setshowPassword(false);
                  }}
                  onTouchStart={() => {
                    setshowPassword(true);
                  }}
                  ontouchend={() => {
                    setshowPassword(false);
                  }}
                >
                  {!showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                </span>
              </div>
              <div className="d-flex mt-4 justify-content-center align-items-center">
                <button type="submit" onClick={handleSignup}>
                  Register
                </button>
                <button type="submit" onClick={handleLogin}>
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
