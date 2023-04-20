import React from "react";
// COMPONENTS IMPORTS
import LandingPage from "./LandingPage";
// THIRD PARTY IMPORTS
import { Routes, Route } from "react-router-dom";
import { Hotels } from "./Hotels";
import { Cars } from "./Cars";
import { Register } from "./account/Register";
import { Login } from "./account/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/account/register" element={<Register/>} />
        <Route path="/account/login" element={<Login/>} />
      </Routes>
    </>
  );
}

export default App;
