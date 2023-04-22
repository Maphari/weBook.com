import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
// COMPONENT IMPORTS
import Loader from "../../animation/Loader";


// THIRD PARTY IMPORTS
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { toast } from "react-toastify";
// images imports
import LogoImage from "../../../assets/logo.png";


export const Maps = () => {
  const [userCoords, setUserCoords] = useState({});
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const { latitude, longitude } = userCoords;
  const userLocale = navigator.language;


  const toastNotificationSuccess = (message) => {
    toast.success(message, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const toastNotificationError = (message) => {
    toast.error(message, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setUserCoords({ latitude, longitude });
    });
  }, []);



  if (!latitude || !longitude) {
    return <Loader />;
  } else {
    return (
      <>
        <nav className="map-container border-b-2">
          <div className="flex items-center gap-[0.01rem]">
            <img
              src={LogoImage}
              alt="company logo"
              className="showcase-container__top-logo w-10 h-10 object-cover"
            />
            <h1 className="showcase-container__top-header">ental booking.</h1>
          </div>
          <section className="flex items-center gap-2">
            <Link
              to=""
              className={`${
                location.pathname === "/hotel" ? "bg-slate-200" : ""
              } py-[0.5rem] px-[0.7rem] hover:bg-slate-200 rounded-full font-medium border-2 hover:border-slate-200 border-sky-700  flex items-center justify-center gap-2`}
            >
              <i className="fa-solid fa-bed text-sm hover:bg-slate-200"></i>
              <span>Hotel</span>
            </Link>
            <Link
              to=""
              className={`${
                location.pathname === "/flight" ? "bg-slate-200" : ""
              } py-[0.5rem] px-[0.7rem] hover:bg-slate-200 rounded-full font-medium border-2 hover:border-slate-200 border-sky-700 flex items-center justify-center gap-2`}
            >
              <i className="fa-solid fa-plane hover:bg-slate-200"></i>
              <span>Flights</span>
            </Link>
            <Link
              to=""
              className={`${
                location.pathname === "/Resturant" ? "bg-slate-200" : ""
              } py-[0.5rem] px-[0.7rem] hover:bg-slate-200 rounded-full font-medium border-2 hover:border-slate-200 border-sky-700  flex items-center justify-center gap-2`}
            >
              <i className="fa-solid fa-utensils hover:bg-slate-200"></i>
              <span>Resturent</span>
            </Link>

            <div className="w-10 ml-3 h-10 bg-sky-700 flex items-center justify-center font-bold rounded-full">
              PH
            </div>
          </section>
        </nav>
        <section className="content-container flex pt-[4.3rem] w-screen h-screen">
          <section className="w-[35%] flex items-start flex-col justify-start py-3 px-4">
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className={`border flex items-center ${
                searchTerm ? "" : "rounded"
              } w-full mb-3 relative`}
            >
              <i className="fa-solid text-md fa-location-dot ml-2 opacity-70"></i>
              <input
                placeholder="Search for places, hotels and more..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="outline-none p-2 py-[0.8rem] flex items-center flex-1 rounded text-md"
              />
            </form>
            <div className="border-2 border-sky-700 flex items-center justify-between p-2 rounded gap-2 w-full">
              <div className="flex items-center">
                <i className="fa-solid fa-calendar-days mr-3 text-sm opacity-70 text-sky-700"></i>
                <h1 className="text-sm">Fri, May 23</h1>
                <div className="ml-2 flex items-center">
                  <button className="hover:bg-slate-200 p-[0.2rem] flex items-center justify-center opacity-70">
                    <i className="fa-solid fa-angle-left text-sm"></i>
                  </button>
                  <button className="hover:bg-slate-200 flex items-center p-[0.2rem] justify-center opacity-70">
                    <i className="fa-solid fa-angle-right text-sm "></i>
                  </button>
                </div>
              </div>
              <hr className="hr" />
              <div className="flex items-center">
                <h1 className="text-sm">Fri, May 23</h1>
                <div className="ml-2 flex items-center">
                  <button className="hover:bg-slate-200 p-[0.2rem] flex items-center justify-center opacity-70">
                    <i className="fa-solid fa-angle-left text-sm"></i>
                  </button>
                  <button className="hover:bg-slate-200 p-[0.2rem] flex items-center justify-center opacity-70">
                    <i className="fa-solid fa-angle-right text-sm"></i>
                  </button>
                </div>
              </div>
              <hr className="hr" />
              <div className="flex items-center justify-between gap-2 opacity-70">
                <i className="fa-solid fa-user text-sky-700"></i>
                <h1>3</h1>
                <button>
                  <i className="fa-solid fa-caret-down"></i>
                </button>
              </div>
            </div>
          </section>
          <MapContainer
            center={[latitude, longitude]}
            zoom={13}
            scrollWheelZoom={true}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
              position={[latitude, longitude]}
              interactive={true}
            ></Marker>
          </MapContainer>
        </section>
      </>
    );
  }
};
