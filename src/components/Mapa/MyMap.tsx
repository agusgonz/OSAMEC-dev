import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';

interface MyMapProps {
  size: {
    width: string
    height: string
  }
}
const center = {
  lat: -32.8726915,
  lng: -68.8235023
};

const onLoad = (marker: any) => {
  console.log('marker: ', marker)
}

function MyMap({size}: MyMapProps) {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDFBXjuZbFK7hw6oJuSUKuq0uQI6UCy7_o"
    >
      <GoogleMap
        mapContainerStyle={size}
        center={center}
        zoom={18}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <>
          <Marker
            position={center}
            onLoad={onLoad}
          />
        </>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyMap)