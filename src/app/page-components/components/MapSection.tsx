"use client"
import "../../globals.css"
import { GoogleMap, Marker, useJsApiLoader, useLoadScript } from '@react-google-maps/api'
import { useMemo } from 'react';
export const MapSection = () => {
    const { isLoaded } = useLoadScript({
   googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
 });
    if (!isLoaded) return <div>Loading...</div>;
 return <Map />;
}
function Map() {
 const shiftLocation = useMemo(() => ({ lat: 37.682115, lng: -97.336491 }), []);
 return (
   <GoogleMap zoom={12} center={shiftLocation} mapContainerClassName="map-container">
     <Marker position={shiftLocation} />
   </GoogleMap>
 );
}