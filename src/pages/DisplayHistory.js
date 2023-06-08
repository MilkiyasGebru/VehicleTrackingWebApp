import React from "react";
import GoogleMapReact from "google-map-react";

const DisplayHistory = () => {
    const center = { lat: 59.95, lng: 30.33 };
    const zoom = 11;

    const handleApiLoaded = (map, maps) => {
        // Define the symbol for the arrow
        const lineSymbol = {
            path: maps.SymbolPath.FORWARD_CLOSED_ARROW,
        };

        // Define the path for the line
        const linePath = [
            { lat: 59.95, lng: 30.33 },
            { lat: 59.85, lng: 30.33 },
            { lat: 59.85, lng: 30.23 },
        ];

        // Create the Polyline
        const line = new maps.Polyline({
            path: linePath,
            strokeColor: "#FF0000",
            strokeOpacity: 1.0,
            strokeWeight: 2,
            icons: [
                {
                    icon: lineSymbol,
                    offset: "100%",
                },
            ],
        });

        // Add the Polyline to the map
        line.setMap(map);

        linePath.forEach((point) => {
            new maps.Marker({
                position: point,
                map,
                icon: {
                    url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
                },
            });
        });
    };

    return (
        <div style={{ height: "100vh", width: "100%" }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyAolMqc9bflA2GpOQ8GtT0cNrwZG3EjhO4" }}
                defaultCenter={center}
                defaultZoom={zoom}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
            />
        </div>
    );
};

export default DisplayHistory;
