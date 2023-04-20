import React from "react";

export const AppFeatures = () => {
  return (
    <>
      <section className="appfeatures-container">
        <div className="appfeatures-container__top">
          <h1 className="appfeatures-container__top-header">
            Some of the offered services
          </h1>
          <p className="appfeatures-container__top-para">
            We provide exceptional services that prioritize your comfort and
            ease of use
          </p>
        </div>
        <section className="appfeatures-container__cards">
          <div className="appfeatures-container__cards-one">
            <i className="fa-solid fa-car"></i>
            <h1 className="appfeatures-container__cards-one__header">
              Rent cars
            </h1>
            <p className="appfeatures-container__cards-one__para">
              Renting a car can provide convenience and flexibility for your
              travels, allowing you to explore new destinations at your own
              pace.
            </p>
          </div>
          <div className="appfeatures-container__cards-one">
            <i className="fa-solid fa-hotel"></i>
            <h1 className="appfeatures-container__cards-one__header">
              Rent hotels
            </h1>
            <p className="appfeatures-container__cards-one__para">
              Renting a hotel room can provide a comfortable and convenient
              accommodation option while traveling, allowing you to relax.
            </p>
          </div>
          <div className="appfeatures-container__cards-one">
            <i className="fa-solid fa-wallet"></i>
            <h1 className="appfeatures-container__cards-one__header">
              Easy payments
            </h1>
            <p className="appfeatures-container__cards-one__para">
              Easy payment options make renting more accessible and hassle-free,
              allowing you to enjoy your trip without worrying about complicated
              payment processes.
            </p>
          </div>
          <div className="appfeatures-container__cards-one">
            <i className="fa-solid fa-credit-card"></i>
            <h1 className="appfeatures-container__cards-one__header">
              Card benefits
            </h1>
            <p className="appfeatures-container__cards-one__para">
              Using a credit card to rent can offer various benefits such as
              rental car insurance, rewards points, and fraud protection, making
              it a smart choice.
            </p>
          </div>
        </section>
      </section>
    </>
  );
};
