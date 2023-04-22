import React from "react";
// COMPONENT IMPORTS
import AppShowcase from "./AppShowcase";
import { AppBankaccount } from "./AppBankaccount";
import { MoreInformation } from "./MoreInformation";

export const LandingPage = () => {
  return (
    <>
      <AppShowcase />
      <AppBankaccount />
      <MoreInformation />
    </>
  );
};


