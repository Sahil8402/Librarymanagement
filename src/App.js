import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Dashbord from './dashbord';
import "./sass/style.css"

// const App = () => {
//   return (
//     <div>
//       <Login />
//       {/* <Header></Header>
//       <Books></Books>
//       <ScrollToTop></ScrollToTop> */}
//     </div>
//   );
// };

import { auth } from "./firebase";

// import "./App.css";

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashbord" element={<Dashbord />} />
          <Route path="/home" element={<Home name={userName} />} />
          {/* <>
            <Header></Header>
            <Books></Books>
            <ScrollToTop></ScrollToTop>
          </> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
