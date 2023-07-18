import React, {useEffect, useState} from "react";
import GoogleMapReact from "google-map-react";
import {useLocation} from "react-router-dom";

// const DisplayHistory = () => {
//     const center = { lat: 59.95, lng: 30.33 };
//     const zoom = 11;
//
//     const handleApiLoaded = (map, maps) => {
//         // Define the symbol for the arrow
//         const lineSymbol = {
//             path: maps.SymbolPath.FORWARD_CLOSED_ARROW,
//         };
//
//         // Define the path for the line
//         const linePath = [
//             { lat: 59.95, lng: 30.33 },
//             { lat: 59.85, lng: 30.33 },
//             { lat: 59.85, lng: 30.23 },
//         ];
//
//         // Create the Polyline
//         const line = new maps.Polyline({
//             path: linePath,
//             strokeColor: "#FF0000",
//             strokeOpacity: 1.0,
//             strokeWeight: 2,
//             icons: [
//                 {
//                     icon: lineSymbol,
//                     offset: "100%",
//                 },
//             ],
//         });
//
//         // Add the Polyline to the map
//         line.setMap(map);
//
//         linePath.forEach((point) => {
//             new maps.Marker({
//                 position: point,
//                 map,
//                 icon: {
//                     url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
//                 },
//             });
//         });
//     };
//
//     return (
//         <div style={{ height: "100vh", width: "100%" }}>
//             <GoogleMapReact
//                 bootstrapURLKeys={{ key: "AIzaSyAolMqc9bflA2GpOQ8GtT0cNrwZG3EjhO4" }}
//                 defaultCenter={center}
//                 defaultZoom={zoom}
//                 yesIWantToUseGoogleMapApiInternals
//                 onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
//             />
//         </div>
//     );
// };



const DisplayHistory = ()=>{

    const [mapInstance, setMapInstance] = useState(null);
    const [mapsInstance, setMapsInstance] = useState(null);

    const location = useLocation();
    const Center = location.state.Center;
    const center = {lat : Center[0], lng: Center[1]};
    const VehicleId = location.state.VehicleId;
    const [path,setPath] = useState([ ])
    const zoom = 11;

    useEffect(()=>{
        fetch("http://localhost:3001/history",{
            method :"POST",
            headers :{
                "Content-Type":"application/json"},
            body : JSON.stringify({
                VehicleId : VehicleId
            })
        }).then(data => data.json())
            .then( (result) => {
                console.log("I am in here");
            // console.log("Here is the result " + result)
            // console.log(JSON.stringify(result))
            // console.log("THe locations are "+ result["locations"])
            // console.log(JSON.stringify(result))
            if (result && result["locations"] != null){
                setPath(result["locations"])
            }

            // setPath([ {lat: 40.69273490217241,lng: -74.0615922861328}, {lat: 40.649313545557234, lng: -74.35170001318357}]);
            console.log("Use Effect have raned completely")
        }).catch((err)=>{
            console.log(err)
        })
    },[])
    useEffect(() => {
        if (mapInstance && mapsInstance) {
            handleApiLoaded(mapInstance, mapsInstance);
        }
    }, [path, mapInstance, mapsInstance]);

    const handleApiLoaded = (map, maps) => {


        setMapInstance(map);
        setMapsInstance(maps);
        // Define the symbol for the arrow
        const lineSymbol = {
            path: maps.SymbolPath.FORWARD_CLOSED_ARROW,
        };

        // Define the path for the line
        const linePath = path;

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


}


export default DisplayHistory;