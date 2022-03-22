
import React, { useCallback, useRef } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

// import mapStyles from "./mapUtils/mapStyles";
// 地図のデザインを指定することができます。
// デザインは https://snazzymaps.com からインポートすることができます。

const libraries = ["places"];
const mapContainerStyle = {
  height: "40vh",
  width: "95%",
  margin: "0 auto",
  borderRadius: "10px",
};

const options = {
  // styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyAoDk1uBsUqvJdBYLad53ecggIOemf08Ww",
    libraries,
  });

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);
  //API読み込み後に再レンダーを引き起こさないため、useStateを使わず、useRefとuseCallbackを使っています。

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <GoogleMap
      id="map"
      mapContainerStyle={mapContainerStyle}
      zoom={8} 
      center={{
        lat: 53.1355,
        lng: -57.6604,
      }} 
      options={options}
      onLoad={onMapLoad}
    >      
    </GoogleMap>
  );
}

export default Map;
