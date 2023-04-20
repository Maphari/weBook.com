import React from "react";
// COMPONENTS IMPORTS
import { AppFeatures } from "./AppFeatures";
import { AppShowcaseServices } from "./AppShowcaseServices";
import { Mobile } from "./Mobile";
import { Fotter } from "./Fotter";

export const MoreInformation = () => {
  return (
    <>
      <AppFeatures />
      <AppShowcaseServices />
      <Mobile />
      <Fotter />
    </>
  );
};
