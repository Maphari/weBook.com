import React from "react";
import LogoImage from "../../assets/logo.png";

export const Fotter = () => {
  const UserLanguage = navigator.language;
  const currentYear = new Date().getFullYear();
  return (
    <>
      <section className="text-white flex flex-wrap items-center justify-between fotter-container">
        <div className="flex items-center flex-wrap">
          <div className="flex items-center flex-wrap mr-1">
            <h1 className="text-md">Elite Express Inc.</h1>
          </div>
          <p className="text-md">copyrigth &copy; {currentYear}</p>
        </div>
        <p className="text-md">{UserLanguage}</p>
      </section>
    </>
  );
};
