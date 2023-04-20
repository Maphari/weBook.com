import React, { useEffect } from "react";
// COMPONENTS IMPORTS

import axios from "axios";

export const AppShowcaseServices = () => {
  return (
    <>
      <section className="services-container">
        <div className="services-container__top">
          <h1 className="services-container__top-header">
            Take a look at some of our services.
          </h1>
          <p className="services-container__top-para">
            Here are some of our hotels/car rental services for you to check
            out. Take a look and see what interests you.
          </p>
        </div>
        <section className="services-container__showcase">
          <div className="services-container__showcase-one">
            <img
              src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="hotel showcase"
              className="services-container__showcase-one__image rounded"
            />
            <div className="flex items-start justify-start flex-col">
              <h1 className="services-container__showcase-one__header">
                The sun view
              </h1>
              <p className="services-container__showcase-one__para flex items-start justify-start flex-col my-1">
                The hotel with a pool sun view offers a breathtaking panorama of
                the surrounding landscape, perfect for those looking to unwind
                and bask in the sun. With its luxurious amenities and top-notch
                service, guests can enjoy a refreshing swim while soaking up the
                warm rays of the sun. Whether you're lounging by the pool or
                enjoying a meal on the terrace, the hotel's picturesque views
                create an unforgettable vacation experience.
              </p>
              <div>
                <button className="services-container__showcase-one__book">
                  Explore more
                </button>
              </div>
            </div>
          </div>
          <div className="services-container__showcase-one">
            <img
              src="https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="hotel showcase"
              className="services-container__showcase-one__image rounded"
            />
            <div className="flex items-start justify-start flex-col">
              <h1 className="services-container__showcase-one__header">
                The pool view
              </h1>
              <p className="services-container__showcase-one__para flex items-start justify-start flex-col my-1">
                The pool view is simply stunning, with crystal-clear water and
                luxurious loungers to relax in and soak up the sunshine. From
                the comfort of your own room or balcony, you can take in the
                serene and picturesque beauty of the pool and its surroundings.
                With its inviting waters and picturesque setting, the pool view
                is the perfect spot to unwind and forget about the stresses of
                daily life.
              </p>
              <div>
                <button className="services-container__showcase-one__book">
                  Explore more
                </button>
              </div>
            </div>
          </div>
          <div className="services-container__showcase-one">
            <div className="flex items-start justify-start flex-col">
              <h1 className="services-container__showcase-one__header">
                car rental safety check
              </h1>
              <p className="services-container__showcase-one__para flex items-start justify-start flex-col my-1">
                Before renting a car, it's important to perform a safety check
                to ensure that the vehicle is in good condition and safe to
                drive. Start by inspecting the tires for any signs of wear or
                damage, checking the brakes and headlights, and testing the turn
                signals and windshield wipers. Make sure to also check the car's
                fluids, including the oil, coolant, and brake fluid, and check
                the fuel level before driving off the lot.
              </p>
              <div>
                <button className="services-container__showcase-one__book">
                  Explore more
                </button>
              </div>
            </div>
            <img
              src="https://images.pexels.com/photos/804128/pexels-photo-804128.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="hotel showcase"
              className="services-container__showcase-one__image rounded"
            />
          </div>
          <div className="services-container__showcase-one">
            <div className="flex items-start justify-start flex-col">
              <h1 className="services-container__showcase-one__header">
                Car rental
              </h1>
              <p className="services-container__showcase-one__para flex items-start justify-start flex-col my-1">
                Car rental services provide convenient access to a variety of
                vehicles to suit your travel needs, from economy cars to luxury
                SUVs. Whether you're on vacation or a business trip, renting a
                car can provide the freedom and flexibility to explore your
                destination at your own pace. Many car rental companies offer
                competitive rates, easy online booking, and convenient pickup
                and drop-off locations to make the rental process seamless and
                hassle-free.
              </p>
              <div>
                <button className="services-container__showcase-one__book">
                  Explore more
                </button>
              </div>
            </div>
            <img
              src="https://images.pexels.com/photos/228094/pexels-photo-228094.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="hotel showcase"
              className="services-container__showcase-one__image rounded"
            />
          </div>
        </section>
      </section>
    </>
  );
};
