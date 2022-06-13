import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsPerson, BsPersonX, BsList, BsX } from "react-icons/bs";
import "./Menu.css";
import { IconContext } from "react-icons/lib";

function Menu() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const handleLogOut = () => {
    localStorage.clear();
    window.location.href = "/";
    closeMenu();
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
                  ABI | Rosa Gomes
                </Link>

                <li className="menu-item">
                  <Link
                    to="/"
                    className="menu-link"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.replace("/#about");
                      closeMenu();
                    }}
                  >
                    About us
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    to="/"
                    className="menu-link"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.replace("/#register");
                      closeMenu();
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
                      closeMenu();
                    }}
                  >
                    Gallery
                  </Link>
                </li>
                <li className="menu-item">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.vakinha.com.br/2892353"
                    className="menu-link"
                  >
                    Donate
                  </a>
                </li>
                <li className="menu-item">
                  {localStorage &&
                    localStorage.getItem("user") ===
                      process.env.REACT_APP_ADMIN_USER && (
                      <Link to="/Admin" className="menu-link">
                        Admin Panel
                      </Link>
                    )}
                </li>
              </div>

              <div className="menu-items-right menu-link">
                <div>
                  {localStorage.getItem("user") ===
                  process.env.REACT_APP_ADMIN_USER ? (
                    <BsPersonX onClick={handleLogOut} />
                  ) : (
                    <Link
                      to={"/Login"}
                      className="menu-link"
                      onClick={closeMenu}
                    >
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
