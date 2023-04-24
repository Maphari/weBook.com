import React, { useEffect, useState } from "react";
import Loader from "../../animation/Loader";
import { Nav } from "../Nav";
import { toast } from "react-toastify";
import axios from "axios";
import MapboxMap from "./MapboxMap";

export const Maps = () => {
  const [userCoords, setUserCoords] = useState({});
  const [pickUp, setPickUp] = useState("");
  const [destination, setDestination] = useState("");
  const [showCurrentLocation, setShowCurrentLocation] = useState({});

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

      if (latitude && longitude) {
        setUserCoords({ latitude, longitude });
      } else {
        toastNotificationError("Your browser does not support geolocation");
      }
    });
  }, []);

  // decoding user location
  useEffect(() => {
    const getCurrentPosition = async () => {
      try {
        const currentLocation = await axios.get(
          `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${userCoords.latitude}&lon=${userCoords.longitude}`
        );
        setShowCurrentLocation(currentLocation.data);
      } catch (error) {
        toastNotificationError("Error fetching location data");
      }
    };

    if (userCoords.latitude && userCoords.longitude) {
      getCurrentPosition();
    }
  }, [userCoords]);

  if (!userCoords.latitude || !userCoords.longitude) {
    return <Loader />;
  } else {
    return (
      <>
        <Nav />
        <section className="content-container flex pt-[4.3rem] w-screen h-screen ">
          <section className="w-[35%] flex items-start flex-col justify-start py-3 px-4 overflow-auto">
            <div className="w-full">
              <h1 className="font-bold text-lg mb-2">Pickup point</h1>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
                className={`border flex items-center ${
                  pickUp ? "" : "rounded"
                } w-full mb-3 relative`}
              >
                <i className="fa-solid text-md fa-map ml-2 opacity-70"></i>
                <input
                  placeholder="Search for places, hotels and more..."
                  value={
                    !pickUp
                      ? `${showCurrentLocation?.address?.road}, ${showCurrentLocation?.address?.suburb}`
                      : pickUp
                  }
                  onChange={(e) => setPickUp(e.target.value)}
                  className="outline-none p-2 py-[0.8rem] flex items-center flex-1 rounded text-md"
                />
              </form>
            </div>
            <div className="w-full">
              <h1 className="font-bold text-lg mb-2">Destination</h1>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
                className={`border flex items-center ${
                  destination ? "" : "rounded"
                } w-full mb-3 relative`}
              >
                <i className="fa-solid text-md fa-location-dot ml-2 opacity-70"></i>
                <input
                  placeholder="Destination Location"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="outline-none p-2 py-[0.8rem] flex items-center flex-1 rounded text-md"
                />
              </form>
            </div>
            <section className="data-cards-container w-full">
              <div className="flex items-center mt-3 justify-between w-full mb-2">
                <h1 className="font-bold text-lg">Recent activities</h1>
              </div>
              <div className="flex  justify-start gap-2 flex-col">
                <p className="opacity-50">no recent activities</p>
              </div>
            </section>
          </section>
          <MapboxMap longitude={userCoords.longitude} latitude={userCoords.latitude}/>
        </section>
      </>
    );
  }
};
