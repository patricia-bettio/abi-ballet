import React from "react";
import { useRef, useState, useEffect } from "react";
import { BsPersonBoundingBox, BsExclamationTriangle } from "react-icons/bs";
import { Button } from "../../Button";
import "./LogIn.css";

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
  console.log("Username:", ADMIN_USER, "Password:", ADMIN_PASS);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user === ADMIN_USER && password === ADMIN_PASS) {
      setError(false);
      setLogged(true);
      localStorage.setItem("user", ADMIN_USER);
      window.location.href = "/Admin";
    } else {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <div className="loginWrapper">
        <div className="loginArea">
          <div className="restrictedArea">
            <h2>
              Restricted area
              <BsPersonBoundingBox />
            </h2>
          </div>

          <h1>Log in</h1>
          <form className="loginForm" onSubmit={handleSubmit}>
            <div className="inputArea">
              {" "}
              <label name="username">Username</label>
              <input
                type="text"
                id="username"
                ref={userRef}
                onChange={(e) => setUser(e.target.value)}
                value={user}
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
                onChange={(e) => setPass(e.target.value)}
                value={password}
                autoComplete="off"
                placeholder="Enter your password"
                required
              ></input>
            </div>

            <div className={error ? "showError" : "hideError"} ref={errorRef}>
              <p>
                <BsExclamationTriangle />
                This area is access restricted to admins.{" "}
              </p>
              <p>
                If you are an admin and still cannot login, please contact the
                Support.
              </p>
            </div>

            <Button buttonColor="greenBtn">Sign in</Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LogIn;
