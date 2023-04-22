import React from "react";
import { useNavigate } from "react-router-dom";
// COMPONENT IMPORTS
import { Maps } from "./map/Maps";

export const Home = () => {
  const navigation = useNavigate();
  return (
    <>
      <section className="bg-white w-screen h-screen">
        <Maps />
      </section>
    </>
  );
};
