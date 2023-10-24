import React, { useEffect, useState, useRef } from "react";
import { GoogleMap, LoadScript, InfoWindow, Marker } from "@react-google-maps/api";
import axios from 'axios'; // 必要に応じてaxiosをインポート
import Cookies from 'js-cookie'; // 必要に応じてjs-cookieをインポート
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css'
import styled from 'styled-components'


const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-top: 30px;
`

const containerStyle = {
  height: "70vh",
  width: "100%",
};

const center = {
  lat: 35.69575,
  lng: 139.77521,
};

const positionAkiba = {
  lat: 35.655875,
  lng: 139.69824166666666,
};

const divStyle = {
  backgroundColor: 'white',
  fontSize: 7.5,
  width: "150px",
  height: "150px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const imgStyle = {
  maxWidth: "90%",
  maxHeight: "90%",
  width: "auto",
  height: "auto",
};

const Map = () => {
  const [size, setSize] = useState(undefined);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [images, setImages] = useState([]);
  const [makerImage, setmakerImage] = useState(null);

  const accessToken = Cookies.get('access_token');
  const headers = {
    'Authorization': `Bearer ${accessToken}`
  };


  useEffect(() => {
  
    axios.get('http://localhost:3000/api/v1/photos', { headers })
      .then((resp) => {
        console.log(resp.data)
        setImages(resp.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const mapRef = useRef(null);

  const handleImageMouseOver = (markerPosition) => {
    if (markerPosition.lat !== null && markerPosition.ing !== null) {
      if (mapRef.current && markerPosition) {
        // 地図の境界情報を取得
        const bounds = mapRef.current.getBounds();

        mapRef.current.panTo(markerPosition);
        setmakerImage(markerPosition.img);
      }
    }
  };

  const infoWindowOptions = {
    pixelOffset: size,
  };
  const createOffsetSize = () => {
    // return setSize(new window.google.maps.Size(0, -45));
    return setSize(new window.google.maps.Size(0, -45));
  };

  

  return (
    <>
      <LoadScript googleMapsApiKey="AIzaSyATzj_5jd8Ulpwd65M0fuXzdRi9LMd-zcs" onLoad={() => createOffsetSize()}>
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={17}
            onLoad={map => mapRef.current = map}
        >
          <Marker
            position={positionAkiba}
            onMouseOver={() => setSelectedMarker("akiba")}
          />
          {selectedMarker === "akiba" && (
            <InfoWindow
              position={positionAkiba}
              options={infoWindowOptions}
              onCloseClick={() => setSelectedMarker(null)}
            >
              <div style={divStyle}>
                <img style={imgStyle} src={makerImage} alt="" />
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
      <Splide aria-label="お気に入りの写真"
        options={{
          // type: 'loop',
          perPage: 3,
          perMove: 1,
          autoWidth: true,
          height: '15rem',
          gap: '1rem',
        }}
      >

        {images.map((image) => (
          <SplideSlide
            key={image.attributes.id}
            onMouseOver={(e) => handleImageMouseOver({
                lat: image.attributes.gps_latitude,
                lng: image.attributes.gps_longitude,
                img: image.attributes.image_url,
            })}
          >
            <Image src={image.attributes.image_url} alt={image.attributes.title} />
          </SplideSlide>
        ))}
      </Splide>
    </>
  );
};

export default Map;
