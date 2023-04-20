import React, { useState } from "react";
// IMAGES IMPORTS
import LogoImage from "../../assets/Logo.png";
// THIRD PARTY IMPORTS
import { Link, useLocation } from "react-router-dom";

const AppShowcase = () => {
  const location = useLocation();
  const [subscribeEmail, setSubscribeEmail] = useState("");
  const [userLocation, setUserLocation] = useState("");
  const [isUserLocation, setIsUserLocation] = useState(false);
  const [isDateClicked, setIsDateClicked] = useState(false);
  const [isPeopleClicked, setIsPeopleClicked] = useState(false);

  const handleBrowserBehaviour = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <section className="showcase-container">
        <div className="showcase-container__top flex items-center flex-wrap justify-between">
          <div className="flex items-center gap-[0.01rem]">
            <img
              src={LogoImage}
              alt="company logo"
              className="showcase-container__top-logo w-10 h-10 object-cover"
            />
            <h1 className="showcase-container__top-header">ental booking.</h1>
          </div>
          <div className="menu flex items-center flex-wrap gap-2">
            <Link
              to="/hotels"
              className={`${
                location.pathname === "/hotel" ? "active" : ""
              } active-hover p-2 flex items-center gap-2 opacity-80 hover:opacity-100`}
            >
              <i className="fa-solid fa-hotel"></i> <span>Hotels</span>
            </Link>

            <Link
              to="/cars"
              className={`${
                location.pathname === "/car-rental" ? "active" : ""
              } active-hover p-2 flex items-center gap-2 opacity-80 hover:opacity-100 mr-4`}
            >
              <i className="fa-solid fa-car"></i> <span>Car rental</span>
            </Link>

            <Link
              to="/account/register"
              className={`sign-button p-2 flex w-20 items-center justify-center gap-2 opacity-80 hover:opacity-100`}
            >
              Register
            </Link>
            <Link
              to="/account/login"
              className={`sign-button w-20 p-2 flex items-center justify-center gap-2 opacity-80 hover:opacity-100`}
            >
              Log in
            </Link>
          </div>
        </div>
        <div className="showcase-container__center flex justify-between items-center">
          <div>
            <h1 className="showcase-container__center-header drop-shadow-2xl">
              Easy way to find the place
              <br /> you've been looking for.
            </h1>
            <p className="showcase-container__center-para">
              We are here for you so that you get your desired place to stay. We
              dont want you to
              <br /> worry more we want you to feel the comfort of what you
              paied for isn't that amazing?
            </p>
            <div className="mt-4">
              <h1 className="news-header">Subcribe to our news letter</h1>
              <p className="news-para">
                Subcribing will benefit you when we have promotions
              </p>
              <form
                onSubmit={handleBrowserBehaviour}
                className="flex form items-center bg-[#050505] w-full]"
              >
                <input
                  type="email"
                  className="bg-[#050505] flex flex-1 p-4 drop-shadow-2xl font-normal outline-none"
                  placeholder="example@gmail.com"
                  onChange={(e) => setSubscribeEmail(e.target.value)}
                  value={subscribeEmail}
                />
                <button className="p-4 bg-white text-[#050505]">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="showcase-container__bottom-socials">
            <i className="fa-brands fa-facebook text-xl py-1 px-3"></i>
            <i className="fa-brands fa-instagram text-xl py-1 px-3"></i>
            <i className="fa-brands fa-twitter text-xl py-1 px-3"></i>
            <i className="fa-brands fa-youtube text-xl py-1 px-3"></i>
          </div>
        </div>
        <section className="flex items-centr relative">
          <div className="showcase-container__bottom drop-shadow-2xl relative">
            <div className="inner">
              <div className="inner-div relative">
                <div className="inner-inner">
                  <h1 className="inner-div__header">Location</h1>
                  <div className="inner-innerr">
                    <i className="fa-solid fa-bed opacity-60 text-xl"></i>
                    <button type="submit" className="button-dates">
                      Where are you going?
                    </button>
                  </div>
                </div>
                <div className="div-border ml-2"></div>
              </div>
              <div className="inner-div">
                <div className="inner-inner">
                  <h1 className="inner-div__header">Dates</h1>
                  <div className="inner-innerr">
                    <i className="fa-solid fa-calendar-days opacity-60 text-xl"></i>
                    <button type="submit" className="button-dates">
                      Check in - Check out
                    </button>
                  </div>
                </div>
                <div className="div-border ml-2"></div>
              </div>
              <div className="inner-div">
                <div className="inner-inner">
                  <h1 className="inner-div__header">People in number</h1>
                  <div className="inner-innerr">
                    <i className="fa-solid fa-user opacity-60 text-xl"></i>
                    <button type="submit" className="button-dates">
                      0 adults - 0 childern - 0 room
                    </button>
                  </div>
                </div>
                <div className="div-border ml-2"></div>
              </div>
            </div>
            <button className="showcase-container__bottom-search bg-[#050505] text-white">
              <i className="fa-solid fa-search text-2xl"></i>
            </button>
          </div>
        </section>
        {/* <section className="showcase-container__form-trip">
          <div></div>
          <button>done</button>
        </section> */}
      </section>
    </>
  );
};

export default AppShowcase;
