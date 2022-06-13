import React from "react";
import Menu from "./components/Menu";
import Admin from "./components/pages/Admin";
import LogIn from "./components/pages/LogIn";
import Footer from "./components/pages/footer/Footer";
import Home from "./components/pages/home/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Menu />
        <div className="body-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/Admin"
              element={
                localStorage &&
                localStorage.getItem("user") ===
                  process.env.REACT_APP_ADMIN_USER ? (
                  <Admin />
                ) : (
                  <Navigate to="/Login" />
                )
              }
            />
            <Route path="/Login" element={<LogIn />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
