import React from "react";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import WelcomePage from "./components/WelcomePage/WelcomePage";
import Clients from "./components/Clients/Clients";
import AddClientForm from "./components/AddClientForm/AddClientForm";
import Steps from "./components/AppUsageSteps/Steps";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Steps />}></Route>
        {/* <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/clientTable" element={<Clients />}></Route>
        <Route path="/addClientForm" element={<AddClientForm />}></Route> */}
      </Routes>
    </Router>
  );
};

export default App;
