import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsSearch, BsPerson, BsPersonX, BsList, BsX } from "react-icons/bs";
import "./Menu.css";
import { IconContext } from "react-icons/lib";

function Menu() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const handleLogOut = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <>
      <IconContext.Provider value={{ color: "black" }}>
        <div className="menu-wrapper">
          <div className="menu-container">
            <div className="menu-icon-mobile" onClick={handleClick}>
              <Link to="/" className="menu-logo-mobile" onClick={closeMenu}>
                ABI | Rosa Gomes
              </Link>
              {click ? <BsX /> : <BsList />}
            </div>

            <ul className={click ? "menu-items active" : "menu-items"}>
              <div className="menu-items-main">
                <Link to="/" className="menu-logo">
                  ABI Rosa Gomes
                </Link>
                <li className="menu-item">
                  <Link
                    to="/"
                    className="menu-link"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.replace("/#home");
                    }}
                  >
                    Home
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    to="/"
                    className="menu-link"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.replace("/#about");
                    }}
                  >
                    Classes
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    to="/"
                    className="menu-link"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.replace("/#register");
                    }}
                  >
                    Register
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    to="/"
                    className="menu-link"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.replace("/#gallery");
                    }}
                  >
                    Gallery
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    to="/"
                    className="menu-link"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.replace("/#contact");
                    }}
                  >
                    Contact
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/" className="menu-link">
                    Donate
                  </Link>
                </li>
              </div>

              <div className="menu-items-right menu-link">
                <div>
                  <BsSearch />
                </div>
                <div>
                  {console.log(
                    localStorage.getItem("user") ===
                      process.env.REACT_APP_ADMIN_USER
                  )}
                  {localStorage.getItem("user") ===
                  process.env.REACT_APP_ADMIN_USER ? (
                    <BsPersonX onClick={handleLogOut} />
                  ) : (
                    <Link to={"/Login"} className="menu-link">
                      <BsPerson />
                    </Link>
                  )}
                </div>
                <div>
                  <p>English</p>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Menu;
