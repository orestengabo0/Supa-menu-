import React from "react";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from "./components/WelcomePage/WelcomePage";
import Clients from "./components/Clients/Clients";
import AddClientForm from "./components/AddClientForm/AddClientForm";
import Steps from "./components/AppUsageSteps/Steps";
import Overview from "./components/Overview/Overview";
import { Scrollbars } from 'react-custom-scrollbars-2';

const App = () => {
  return (
    <Scrollbars style={{ width: '100%', height: '100vh' }}>
      <Router>
        <Routes>
          <Route path="/" element={<Overview />}></Route>
           <Route path="/signup" element={<SignUp />}></Route>
           {/*
          <Route path="/clientTable" element={<Clients />}></Route>
          <Route path="/addClientForm" element={<AddClientForm />}></Route> */}
          <Route path="/signin" element={<SignIn />}></Route>
        </Routes>
      </Router>
    </Scrollbars>
  );
};

export default App;
