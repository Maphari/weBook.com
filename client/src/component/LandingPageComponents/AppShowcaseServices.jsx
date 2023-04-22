import React, { useEffect } from "react";
import VansImage from "../../assets/vans.jpg";
import HeavyImage from "../../assets/heavy.jpg";
import OnTimeImage from "../../assets/fast delivery.jpg";


export const AppShowcaseServices = () => {
  return (
    <>
      <section className="services-container">
        <div className="services-container__top">
          <h1 className="services-container__top-header">
            Take a look at some of our services.
          </h1>
          <p className="services-container__top-para">
            Here are some of our delivery services for you to browse and
            explore. Take a moment to peruse and discover what catches your
            interest.
          </p>
        </div>
        <section className="services-container__showcase">
          <div className="flex flex-wrap items-center mt-10 gap-3">
            <div className="w-[40rem]">
              <h1 className="text-3xl font-bold">Most reliable vihacles</h1>
              <p className="my-3">
                Arrive at your destination with confidence and peace of mind by
                choosing our most reliable vehicles. Our fleet of vehicles
                offers consistent performance, dependable safety features, and
                minimal maintenance requirements, making them a smart and
                cost-effective choice for your transportation needs. Experience
                the difference of a reliable vehicle and book with us today
              </p>
              <button className="learn-more">learn more</button>
            </div>
            <div className="border-8 p-2 border-gray-900">
              <img src={VansImage} alt="vans" className="w-[20rem]" />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 mt-10">
            <div className="border-8 p-2 border-gray-900">
              <img src={HeavyImage} alt="man pushing" className="w-[20rem]" />
            </div>
            <div className="w-[40rem]">
              <h1 className="text-3xl font-bold">Heavy lifting items</h1>
              <p className="my-3">
                Let us take the heavy lifting off your shoulders! Our team of
                experts is equipped with the necessary equipment and expertise
                to safely and efficiently move your heavy lifting items. From
                large appliances to industrial equipment, we have you covered.
                Contact us today and let us handle the heavy lifting for you
              </p>
              <button className="learn-more">learn more</button>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 mt-10">
            <div className="w-[40rem]">
              <h1 className="text-3xl font-bold">Delivery on time</h1>
              <p className="my-3">
                Experience the peace of mind that comes with reliable, on-time
                delivery services. With our careful planning, efficient
                logistics, and effective communication, you can trust that your
                items will arrive at their intended destination on time, every
                time. Try our delivery services today and experience the
                difference!
              </p>
              <button className="learn-more">learn more</button>
            </div>
            <div className="border-8 p-2 border-gray-900">
              <img src={OnTimeImage} alt="man pushing" className="w-[20rem]" />
            </div>
          </div>
        </section>
      </section>
    </>
  );
};
