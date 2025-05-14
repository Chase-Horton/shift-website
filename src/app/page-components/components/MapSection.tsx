"use client"
import "../../globals.css"
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api'
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
    const businessInfo = useMemo(() => ({
        name: "Shift Auto Society",
        address: "406 S Market St, Wichita, KS 67202",
        phone:"(316) 761-5934",
        hours:"Open 24/7"
    }), [])

    return (
        <GoogleMap
            zoom={12}
            center={shiftLocation}
            mapContainerClassName="map-container"
            options={{
                fullscreenControl: false,
                mapTypeControl: false,
            }}
        >
            <Marker position={shiftLocation} />
            <div className="absolute top-4 left-4 bg-white p-3 rounded-md shadow-md z-10 max-w-[250px]">
                <h3 className="font-bold text-sm">{businessInfo.name}</h3>
                <p className="text-xs mt-1">{businessInfo.address}</p>
                <p className="text-xs mt-1">{businessInfo.phone}</p>
                <p className="text-xs mt-1">{businessInfo.hours}</p>
            </div>
        </GoogleMap>
    );
}