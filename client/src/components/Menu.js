import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsPerson, BsPersonX, BsList, BsX } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import "./Menu.css";

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
        <div className="menuWrapper">
          <div className="menuContainer">
            <div className="menuIconMobile" onClick={handleClick}>
              <Link to="/" className="menuLogoMobile" onClick={closeMenu}>
                ABI | Rosa Gomes
              </Link>
              {click ? <BsX /> : <BsList />}
            </div>

            <ul className={click ? "menuItems active" : "menuItems"}>
              <div className="menuItemsMain">
                <Link to="/" className="menuLogo">
                  ABI | Rosa Gomes
                </Link>

                <li className="menuItem">
                  <Link
                    to="/"
                    className="menuLink"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.replace("/#about");
                      closeMenu();
                    }}
                  >
                    About us
                  </Link>
                </li>
                <li className="menuItem">
                  <Link
                    to="/"
                    className="menuLink"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.replace("/#register");
                      closeMenu();
                    }}
                  >
                    Register
                  </Link>
                </li>
                <li className="menuItem">
                  <Link
                    to="/"
                    className="menuLink"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.replace("/#gallery");
                      closeMenu();
                    }}
                  >
                    Gallery
                  </Link>
                </li>
                <li className="menuItem">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.vakinha.com.br/2892353"
                    className="menuLink"
                  >
                    Donate
                  </a>
                </li>
                <li className="menuItem">
                  {localStorage &&
                    localStorage.getItem("user") ===
                      process.env.REACT_APP_ADMIN_USER && (
                      <Link to="/Admin" className="menuLink">
                        Admin Panel
                      </Link>
                    )}
                </li>
              </div>

              <div className="menuItemsRight menuLink">
                <div>
                  {localStorage.getItem("user") ===
                  process.env.REACT_APP_ADMIN_USER ? (
                    <BsPersonX onClick={handleLogOut} />
                  ) : (
                    <Link
                      to={"/Login"}
                      className="menuLink"
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
