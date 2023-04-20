import React from "react";
// THIRD PARTY IMPORTS
import { Link, useLocation } from "react-router-dom";
// COMPONENTS IMPORTS
import { Card } from "./Card";

export const AppBankaccount = () => {
  const location = useLocation();
  return (
    <>
      <section className="bankaccount-container">
        <div className="bankaccount-container__top">
          <div className="bankaccount-container__top-nav rounded-3xl">
            <Link
              to=""
              className={`py-4 nav-links px-3 rounded-2xl ${(location.pathname =
                "/rental-account" ? "active-nav" : "")}`}
            >
              Rental booking account
            </Link>
            <Link to="" className="py-4 nav-links px-3 rounded-2xl ">
              Rental booking hotels
            </Link>
            <Link to="" className="py-4 nav-links px-3 rounded-2xl ">
              Rental booking cars
            </Link>
          </div>
        </div>

        <section className="bankaccount-container__center flex items-center justify-between flex-wrap">
          <div>
            <h1 className="bankaccount-container__center-header">
              Obtain a rental agency account to alleviate
              <br /> concerns and enjoy all the perks offered
              <br /> by this card.
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
