/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import React from "react";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "300px",
};

const center = {
  lat: 40.610544160905846,
  lng: -111.93915978790453,
};

const MARKER_POSITION: google.maps.LatLngLiteral = {
  lat: 40.610544160905846,
  lng: -111.93915978790453,
};

export function GoogleMapContainer() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY ?? "",
  });

  // const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map: any) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    // const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);
    // setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    // setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      id="google-maps-example"
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <MarkerF position={MARKER_POSITION} />
    </GoogleMap>
  ) : (
    <></>
  );
}
