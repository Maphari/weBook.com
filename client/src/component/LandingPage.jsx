import React from "react";
// COMPONENT IMPORTS
import AppShowcase from "./LandingPageComponents/AppShowcase";
import { AppBankaccount } from "./LandingPageComponents/AppBankaccount";
import { MoreInformation } from "./LandingPageComponents/MoreInformation";

const LandingPage = () => {
  return (
    <>
      <AppShowcase />
      <AppBankaccount />
      <MoreInformation />
    </>
  );
};

export default LandingPage;
