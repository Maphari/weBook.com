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
            <span class="material-symbols-outlined text-5xl opacity-60">
              local_shipping
            </span>
            <h1 className="appfeatures-container__cards-one__header">
              Requst for trucks
            </h1>
            <p className="appfeatures-container__cards-one__para">
              Get in touch with Elite Express Inc. today to initiate a
              personalized transportation solution that caters to your specific
              requirements.
            </p>
          </div>
          <div className="appfeatures-container__cards-one">
            <span class="material-symbols-outlined text-5xl opacity-60">
              wallet
            </span>
            <h1 className="appfeatures-container__cards-one__header">
              Easy payments
            </h1>
            <p className="appfeatures-container__cards-one__para">
              Convenient payment options make deliveries more accessible and
              stress-free, allowing you to enjoy the anticipation of your items.
            </p>
          </div>
          <div className="appfeatures-container__cards-one">
            <span class="material-symbols-outlined text-5xl opacity-60">
              credit_card
            </span>
            <h1 className="appfeatures-container__cards-one__header">
              Card benefits
            </h1>
            <p className="appfeatures-container__cards-one__para">
              Utilizing a credit card for delivery services can provide numerous
              advantages, including fraud protection, rewards points, and other
              benefits that may vary.
            </p>
          </div>
        </section>
      </section>
    </>
  );
};
