import React from 'react';
import GoogleMapReact from 'google-map-react';
import {useLocation} from "react-router-dom";

const FinalMap = () => {
    const location = useLocation();
    const Centre = location.state.Centre
    const GeoFence = location.state.GeoFence
    const _id = location.state._id
    const center = { lat: Centre[0], lng: Centre[1] };
    const zoom = 11;

    const handleApiLoaded = (map, maps) => {
        // use map and maps objects
        // let  geoFence=[]
        const marker = new maps.Marker({
            position: center,
            map,
            icon: {
                url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
            },
        });
        const polygon = new maps.Polygon({
            paths: GeoFence,
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.35,
            editable: true,
        });
        polygon.setMap(map);
        const updateGeoFence = () => {
            let geoFence = polygon.getPath().getArray().map((latLng) => ({
                lat: latLng.lat(),
                lng: latLng.lng(),
            }));
            console.log('geoFence:', geoFence);
            fetch("http://localhost:3001/updateLocation",{
                method : "POST",
                headers : {
                    "Content-Type" : 'application/json'
                },
                body: JSON.stringify({ GeoFence: geoFence,_id:_id})
            })
        };

        maps.event.addListener(polygon.getPath(), 'set_at', updateGeoFence);

        // maps.event.addListener(polygon.getPath(), 'insert_at',updateGeoFence);
        maps.event.addListener(polygon.getPath(), 'insert_at', (index) => {
            // if (polygon.getPath().getLength() > 3) {
            //     polygon.getPath().removeAt(index);
            // }
            updateGeoFence();
        });
    };

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyAolMqc9bflA2GpOQ8GtT0cNrwZG3EjhO4' }}
                defaultCenter={center}
                defaultZoom={zoom}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
            />
        </div>
    );
};

export default FinalMap;
