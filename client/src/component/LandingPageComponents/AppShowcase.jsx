import React, { useState } from "react";
import { ScrollReveal } from "reveal-on-scroll-react";
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
      <ScrollReveal.div
        animation="fade-in"
        easing="backOut"
        duration="1"
        delay="0"
        className="showcase-container"
      >
        <div className="showcase-container__top flex items-center flex-wrap justify-between">
          <div className="flex items-center gap-[0.01rem]">
            <h1 className="showcase-container__top-header">
              Elite Express Inc.
            </h1>
          </div>
          <div className="menu flex items-center flex-wrap gap-2">
            <Link
              to="/account/helper/signup"
              className={`active-hover p-2 flex items-center gap-2 opacity-80 hover:opacity-100 mr-4 hover:text-white`}
            >
              <i className="fa-solid fa-truck-fast"></i>{" "}
              <span>Become a helper</span>
            </Link>

            <Link
              to="/account/signup"
              className={`sign-button p-2 flex w-20 items-center justify-center gap-2 opacity-80 hover:opacity-100 hover:text-white`}
            >
              Register
            </Link>
            <Link
              to="/account/signin"
              className={`sign-button w-20 p-2 flex items-center justify-center gap-2 opacity-80 hover:opacity-100 hover:text-white`}
            >
              Log in
            </Link>
          </div>
        </div>
        <div className="showcase-container__center flex justify-between items-center">
          <div>
            <ScrollReveal.h1
              animation="fade-in"
              easing="backOut"
              duration="1"
              delay="0"
              className="showcase-container__center-header drop-shadow-2xl"
            >
              Elite Express Inc. delivers excellence <br />
              through efficient and reliable <br />
              transportation solutions
            </ScrollReveal.h1>
            <ScrollReveal.p
              animation="fade-in"
              easing="backOut"
              duration="1"
              delay="0"
              className="showcase-container__center-para"
            >
              With a commitment to excellence, Elite Express Inc. provides fast
              and cost-effective transportation
              <br /> services to businesses across the nation.
            </ScrollReveal.p>
            <div className="mt-4">
              <h1 className="news-header">Subcribe to our news letter</h1>
              <p className="news-para">
                Subcribing will benefit you when we have delivery promotion.
              </p>
              <form
                onSubmit={handleBrowserBehaviour}
                className="flex form items-center h-10 mt-3 bg-[#050505] w-[70%]"
              >
                <input
                  type="email"
                  className="bg-[#050505] flex flex-1 p-3 drop-shadow-2xl font-normal outline-none"
                  placeholder="example@gmail.com"
                  onChange={(e) => setSubscribeEmail(e.target.value)}
                  value={subscribeEmail}
                />
                <button className="p-3 bg-white text-[#050505]">
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
        <section className="flex items-center mt-6 relative">
          <div className="showcase-container__bottom drop-shadow-2xl relative">
            <div className="inner">
              <div className="inner-div relative">
                <div className="inner-inner">
                  <h1 className="inner-div__header">Pickup point</h1>
                  <div className="inner-innerr flex items-center">
                    <span class="material-symbols-outlined opacity-60">
                      map
                    </span>
                    <input
                      type="text"
                      placeholder="Where are you going?"
                      className="button-dates"
                    />
                  </div>
                </div>
                <div className="div-border ml-2"></div>
              </div>
              <div className="inner-div">
                <div className="inner-inner">
                  <h1 className="inner-div__header">Destination</h1>
                  <div className="inner-innerr flex items-center">
                    <span class="material-symbols-outlined opacity-60">
                      distance
                    </span>
                    <input
                      type="text"
                      placeholder="where to be delivered?"
                      className="button-dates"
                    />
                  </div>
                </div>
                <div className="div-border ml-2"></div>
              </div>
              <div className="inner-div">
                <div className="inner-inner">
                  <h1 className="inner-div__header">Choose truck</h1>
                  <div className="inner-innerr flex items-center">
                    <span class="material-symbols-outlined opacity-60">
                      local_shipping
                    </span>
                    <select className="button-dates select-wrapper">
                      <option value="select-option" selected>
                        Select truck
                      </option>
                      <option value="small-van">Small van</option>
                      <option value="medium-van">Medium van</option>
                      <option value="large-van">Large van</option>
                      <option value="extra-larger-van">Extra large van</option>
                      <option value="xx-larger-van">XX-Extralarge van</option>
                    </select>
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
      </ScrollReveal.div>
    </>
  );
};

export default AppShowcase;
