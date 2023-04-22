import React from "react";
// THIRD PARTY IMPORTS
import { Link } from "react-router-dom";
// COMPONENTS IMPORTS
import { Card } from "./Card";

export const AppBankaccount = () => {
  return (
    <>
      <section className="bankaccount-container">
        <div className="bankaccount-container__top">
          <div className="bankaccount-container__top-nav">
            <Link to="" className={`py-3 nav-links hover:text-white px-3 `}>
              Elite Express Inc. bank account
            </Link>
          </div>
        </div>

        <section className="bankaccount-container__center flex items-center justify-between flex-wrap py-1">
          <div>
            <h1 className="bankaccount-container__center-header">
              Make payments easily and securely with
              <br /> Elite Express Inc. using the following bank
              <br /> account information:
            </h1>
            <p className="bankaccount-container__center-para">
              The purpose of this card is to empower you to take charge of your
              finances while
              <br /> experiencing the utmost comfort you deserve.
            </p>
            <div className="bankaccount-container__center-btns flex flex-wrap items-center w-full">
              <button className="bankaccount-container__center-btns__explore">
                Explore more
              </button>
              <button className="bankaccount-container__center-btns__create">
                Create account
              </button>
            </div>
          </div>
          <div className="the-card">
            <Card />
          </div>
        </section>
      </section>
    </>
  );
};
