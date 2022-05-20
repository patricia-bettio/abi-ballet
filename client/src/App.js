import React from "react";
import "./App.css";
import Menu from "./components/Menu";
import Admin from "./components/pages/Admin";
import Footer from "./components/pages/footer/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Link
} from "react-router-dom";
import Home from "./components/pages/home/Home";
// import { render } from '../api/app';

// class App extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = { apiResponse:""};
//   }

//   callAPI(){
//     fetch('http://localhost:9000/testAPI')
//     .then(res => res.text())
//     .then(res => this.setState({apiResponse: res}));
//   }

//   componentWillMount(){
//     this.callAPI();
//   }

class App extends React.Component {
  render() {
    return (
      <Router>
        <Menu />
        <div className="body-wrapper">
          <Routes>
            {/* <Route path='/' exact component={Home}/> */}
            <Route path="/" element={<Home />} />
            <Route path="/Admin" element={<Admin />} />
            {/* <Route path="/">
            <Home />
          </Route> */}
          </Routes>
        </div>
        {/* <Route path="/about">
            <About />
            </Route>
            <Route path="/users">
            <Users />
          </Route> */}
        <Footer />
      </Router>
    );
  }
}

export default App;
