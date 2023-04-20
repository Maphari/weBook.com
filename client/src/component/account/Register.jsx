import React from "react";
// COMPONENT IMPORTS
// IMAGES IMPORTS
import LogoImage from "../../assets/logo.png";

export const Register = () => {
  return (
    <>
      <section className="register-container">
        <div className="showcase-container__top flex items-center flex-wrap justify-between">
          <div className="flex items-center gap-[0.01rem]">
            <img
              src={LogoImage}
              alt="company logo"
              className="showcase-container__top-logo w-10 h-10 object-cover"
            />
            <h1 className="showcase-container__top-header">ental booking.</h1>
          </div>
        </div>
        <form className="register-container__form">gff</form>
      </section>
    </>
  );
};
