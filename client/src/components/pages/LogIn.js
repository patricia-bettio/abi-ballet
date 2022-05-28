import React from "react";
import { useRef, useState, useEffect } from "react";
import { Button } from "../Button";
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
        <>
          <div className="border">LOGIN</div>

          <h1>Sign in</h1>
          <form onSubmit={handleSubmit}>
            <label name="username">Username</label>
            <input
              type="text"
              id="username"
              ref={userRef}
              onChange={(e) => setUser(e.target.value)}
              value={user} //this is used to clear inputs
              autoComplete="off"
              required
            ></input>

            <label name="password">Password</label>
            <input
              type="password"
              id="password"
              // ref={userRef}
              onChange={(e) => setPass(e.target.value)}
              value={password} //this is used to clear inputs
              autoComplete="off"
              required
            ></input>

            <p className={error ? "showError" : "hideError"} ref={errorRef}>
              Something went wrong, try again or contact the administrator.
            </p>

            <Button>Sign in</Button>
          </form>
        </>
      )}
    </>
  );
};

export default LogIn;
