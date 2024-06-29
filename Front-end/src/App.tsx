import React from "react";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import WelcomePage from "./components/WelcomePage/WelcomePage";
import Clients from "./components/Clients/Clients";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<WelcomePage />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/signin" element={<SignIn />}></Route> */}
        <Route path="/" element={<Clients />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
