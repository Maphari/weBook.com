import React from "react";
// IMAGES IMPORTS
import MobileImage from "../../assets/mobile.png";

export const Mobile = () => {
  return (
    <>
      <section className="mobile-container">
        <div>
          <h1 className="mobile-header">Mobile applicattion coming<br/> SOON</h1>
          <p>with this mobile youll achieve greate things everywhere you are</p>
          <button>Eplore mobile app</button>
        </div>
        <img src={MobileImage} alt="mobile app" />
      </section>
    </>
  );
};
