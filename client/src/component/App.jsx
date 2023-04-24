import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { Home } from "./authenticatedPages/Home";
import { LandingPage } from "./LandingPageComponents/LandingPage";
import { ToastContainer } from "react-toastify";
import { Signup } from "./account/Signup";
import { Signin } from "./account/Signin";
import { HelperAccount } from "./account/HelperAccount";
import { HeleperHome } from "./helper/HelperHome";
import Loader from "./animation/Loader";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const sessionID = localStorage.getItem("sessionID");
  const googleToken = localStorage.getItem("google-Token");
  const spotifyToken = localStorage.getItem("spotify-Token");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  function RenderRoutes() {
    return (
      <Routes>
        <Route
          path="/"
          element={
            sessionID || googleToken || spotifyToken ? (
              <Navigate to="/home" replace={true} />
            ) : (
              <LandingPage />
            )
          }
        />
        <Route
          path="/home"
          element={
            sessionID || googleToken || spotifyToken ? <Home /> : <Signin />
          }
        />
        <Route
          path="/account/signin"
          element={
            !sessionID || !googleToken || !spotifyToken ? <Signin /> : <Home />
          }
        />
        <Route
          path="/account/signup"
          element={
            !sessionID || !googleToken || !spotifyToken ? <Signup /> : <Home />
          }
        />
        <Route
          path="/account/helper/signup"
          element={
            !sessionID || !googleToken || !spotifyToken ? (
              <HelperAccount />
            ) : (
              <HeleperHome />
            )
          }
        />
        <Route
          path="/account/helper/home"
          element={
            sessionID || googleToken || spotifyToken ? (
              <HeleperHome />
            ) : (
              <HelperAccount />
            )
          }
        />
      </Routes>
    );
  }

  useEffect(() => {
    if (sessionID || googleToken || spotifyToken) {
      navigate("/home", { replace: true });
    }
  }, []);

  useEffect(() => {
    const loader = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(loader);
  }, []);

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {loading ? <Loader /> : <RenderRoutes />}
    </>
  );
}

export default App;
