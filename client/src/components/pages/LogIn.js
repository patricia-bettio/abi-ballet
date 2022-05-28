import React from "react";
import { useRef, useState, useEffect } from "react";
import { Button } from "../Button";
import { BsPersonBoundingBox, BsExclamationTriangle } from "react-icons/bs";
import "./LogIn.css";
import {
  Navigate,
  // Link
} from "react-router-dom";

const LogIn = () => {
  const userRef = useRef();
  const errorRef = useRef();

  const [user, setUser] = useState("");
  const [password, setPass] = useState("");
  const [error, setError] = useState(false);
  const [logged, setLogged] = useState(false); // replace this with the admin page, upon successful login

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setError("");
  }, [user, password]);

  const ADMIN_PASS = process.env.REACT_APP_ADMIN_PASS;
  const ADMIN_USER = process.env.REACT_APP_ADMIN_USER;
  console.log(ADMIN_PASS, ADMIN_USER);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, password);

    console.log(user === ADMIN_USER);
    console.log(password === ADMIN_PASS);
    if (user === ADMIN_USER && password === ADMIN_PASS) {
      setUser("");
      setPass("");
      setError(false);
      setLogged(true);
      localStorage.setItem("user", ADMIN_USER);
    } else {
      // TODO: display error
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      {logged ? (
        <Navigate to="/Admin" />
      ) : (
        <div className="loginWrapper">
          <div className="loginArea">
            <div className="restrictedArea">
              <h2>
                Restricted access
                <BsPersonBoundingBox />
              </h2>
            </div>

            <h1>Log in area</h1>
            <form className="loginForm" onSubmit={handleSubmit}>
              <div className="inputArea">
                {" "}
                <label name="username">Username</label>
                <input
                  type="text"
                  id="username"
                  ref={userRef}
                  onChange={(e) => setUser(e.target.value)}
                  value={user} //this is used to clear inputs
                  autoComplete="off"
                  placeholder="Enter your username"
                  required
                ></input>
              </div>

              <div className="inputArea">
                <label name="password">Password</label>
                <input
                  type="password"
                  id="password"
                  // ref={userRef}
                  onChange={(e) => setPass(e.target.value)}
                  value={password} //this is used to clear inputs
                  autoComplete="off"
                  placeholder="Enter your password"
                  required
                ></input>
              </div>

              <div className={error ? "showError" : "hideError"} ref={errorRef}>
                <p>
                  <BsExclamationTriangle />
                  This area is exclusively for admins.{" "}
                </p>
                <p>
                  If you are an admin and still cannot login, please contact the
                  Support.
                </p>
              </div>

              <Button buttonSize="btn-medium" buttonColor="blue">
                Sign in
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default LogIn;
