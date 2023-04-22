import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const AuthContext = createContext({});
export const AutProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const emailPasswordSession = localStorage.getItem("sessionID");
  const googleSession = localStorage.getItem("google-token");
  const spotifySession = localStorage.getItem("spotify-token");

  useEffect(() => {
    const getData = async () => {
      const passportResponse = await axios.get("/api/auth/passport_success");
      const emailPasswordResponse = await axios.get(
        "/api/auth/account_success"
      );
      const isDataEmailAndPassword =
        emailPasswordResponse.data.session === emailPasswordSession;
      const isDataGoogle = googleSession === passportResponse?.data?.session;
      const isDataSpotify = spotifySession === passportResponse?.data?.session;

      if (isDataEmailAndPassword) {
        setData(emailPasswordResponse.data);
      } else if (isDataGoogle || isDataSpotify) {
        setData(passportResponse.data);
      } else {
        setData("");
      }
    };

    return () => getData();
  }, []);

  return (
    <AuthContext.Provider value={{ data }}>{children}</AuthContext.Provider>
  );
};
