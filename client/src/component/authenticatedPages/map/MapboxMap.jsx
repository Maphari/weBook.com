import { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import MapboxSupported from "mapbox-gl-supported";
import privateKeys from "../../../../privateKeys/privateKeys";
import axios from "axios";
import Loader from "../../animation/Loader";
import { toast } from "react-toastify";

export default function MapboxMap(props) {
  const { longitude, latitude } = props;
  const mapContainerRef = useRef(null); // create a ref to the map container
  const [returnStaffDataResults, setReturnedSatffDataResults] = useState([]);

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
    const getStaffData = async () => {
      const response = await axios.get(`/api/staff_data`);
      setReturnedSatffDataResults(response.data);
    };

    getStaffData();
  }, []);

  useEffect(() => {
    mapboxgl.accessToken = privateKeys.MAPBOX_API_KEY;
    const locations = returnStaffDataResults.map((staff) => staff.location);

    // check if the browser supports WebGL
    if (!MapboxSupported()) {
      mapContainerRef.current.innerHTML =
        "WebGL is not supported by your browser.";
      return;
    }

    if (!locations) {
      return <Loader />;
    } else {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current, // use the ref to the map container
        style: "mapbox://styles/phumudzo001/clgus2d0v006501qy9ri978xf",
        center: [longitude, latitude],
        zoom: 13,
      });
      // create a new NavigationControl and add it to the map
      const nav = new mapboxgl.NavigationControl();
      map.addControl(nav, "top-right");

      const marker = new mapboxgl.Marker()
        .setLngLat([longitude, latitude])
        .addTo(map);

      // Iterate over the locations array and make an API call for each location
      locations.forEach((location) => {
        const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
          location
        )}.json?access_token=${privateKeys.MAPBOX_API_KEY}`;
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            // Get the geolocation from the API response
            const longitude = data.features[0].center[0];
            const latitude = data.features[0].center[1];

            // Create a new marker on the map
            new mapboxgl.Marker({
              color: "green",
            })
              .setLngLat([longitude, latitude])
              .addTo(map);
          })
          .catch((error) => {
            toastNotificationError(`Error fetching geolocation:`, error);
          });
      });
    }
  }, [returnStaffDataResults]);

  return <div ref={mapContainerRef} className="w-full h-full" />;
}
