// import React, {useEffect, useState} from 'react';
// import GoogleMapReact from 'google-map-react';
//
// const FinalMap = () => {
//
//     const [fence, setFence] = useState([{ lat: 59.95, lng: 30.33 },
//         { lat: 59.85, lng: 30.33 },
//         { lat: 59.85, lng: 30.23 }]);
//     const [center,SetCenter] = useState({ lat: 59.95, lng: 30.33 });
//     const [polygon, setPolygon] = useState(null);
//     const [marker, setMarker] = useState(null);
//
//     useEffect(()=>{
//         console.log("Fence has changed!!")
//         fetch('http://localhost:3001/location').then((result)=>result.json()).then((data)=>{
//             const {myVehicle} = data;
//             setFence(myVehicle["GeoFence"])
//             SetCenter({lat:myVehicle["CurrentLocation"]["coordinates"][0],lng:myVehicle["CurrentLocation"]["coordinates"][1]})
//         })
//     },[])
//
//     useEffect(()=>{
//         if (polygon){
//             polygon.setPaths(fence)
//         }
//     },[fence,polygon])
//
//     useEffect(()=>{
//         if (marker) {
//             marker.setPosition(center);
//         }
//     },[center,marker])
//
//     const zoom = 11;
//     const handleApiLoaded = (map, maps) => {
//
//         const newMarker = new maps.Marker({
//             position: center,
//             map,
//             icon: {
//                 url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
//             },
//         });
//         setMarker(newMarker);
//         const newPolygon = new maps.Polygon({
//             paths:fence,
//             strokeColor: '#FF0000',
//             strokeOpacity: 0.8,
//             strokeWeight: 2,
//             fillColor: '#FF0000',
//             fillOpacity: 0.35,
//             editable: true,
//         });
//         newPolygon.setMap(map);
//         console.log("THe polygon is "+newPolygon)
//         setPolygon(newPolygon)
//         maps.event.addListener(newPolygon.getPath(), 'set_at', () => {
//             const coordinates = newPolygon
//                 .getPath()
//                 .getArray()
//                 .map((latLng) => ({
//                     lat: latLng.lat(),
//                     lng: latLng.lng(),
//                 }));
//             console.log('Coordinates:', coordinates);
//         });
//
//     //     const updateGeoFence = () => {
//     //         console.log("I am in the UpdateGeoFence Function")
//     //         const geoFence = newPolygon.getPath().getArray().map((latLng) => ({
//     //             lat: latLng.lat(),
//     //             lng: latLng.lng(),
//     //         }));
//     //         console.log('geoFence:', geoFence);
//     //         setFence(geoFence)
//     //     };
//     //
//     // //     // maps.event.addListener(newPolygon.getPath(), 'set_at', updateGeoFence);
//     //     maps.event.addListener(newPolygon.getPath(), 'set_at', () => {
//     //         console.log("Hello");
//     //         updateGeoFence();
//     //     });
//     //
//     //     maps.event.addListener(newPolygon.getPath(), 'insert_at',updateGeoFence);
//     //     maps.event.addListener(newPolygon.getPath(), 'insert_at', (index) => {
//     //         console.log("Hello")
//     //         if (newPolygon.getPath().getLength() > 3) {
//     //             newPolygon.getPath().removeAt(index);
//     //         }
//     //         console.log("Fence is updated");
//     //         updateGeoFence();
//     //     });
//
//     };
//
//     return (
//         <div style={{ height: '100vh', width: '100%' }}>
//             <GoogleMapReact
//                 bootstrapURLKeys={{ key: 'AIzaSyAolMqc9bflA2GpOQ8GtT0cNrwZG3EjhO4' }}
//                 // defaultCenter={center}
//                 center={center}
//                 defaultZoom={zoom}
//                 yesIWantToUseGoogleMapApiInternals
//                 onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
//             />
//         </div>
//     );
// };
//
// export default FinalMap;
// import React, {useEffect, useState} from 'react';
// import GoogleMapReact from 'google-map-react';
//
// const FinalMap = () => {
//     const [center,SetCenter] = useState({ lat: 59.95, lng: 30.33 });
//     const zoom = 11;
//     const [fence,setFence] = useState([{ lat: 59.95, lng: 30.33 }, { lat: 59.85, lng: 30.33 }, { lat: 59.85, lng: 30.23 }]);
//
//     useEffect(()=>{
//
//         fetch('http://localhost:3001/location').then((result)=>result.json()).then((data)=>{
//             const {myVehicle} = data;
//             setFence(myVehicle["GeoFence"])
//             SetCenter({lat:myVehicle["CurrentLocation"]["coordinates"][0],lng:myVehicle["CurrentLocation"]["coordinates"][1]})
//         })
//
//     })
//
//
//     const handleApiLoaded = (map, maps) => {
//         // use map and maps objects
//
//         const marker = new maps.Marker({
//             position: center,
//             map,
//             icon: {
//                 url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
//             },
//         });
//         const polygon = new maps.Polygon({
//             paths:fence,
//             strokeColor: '#FF0000',
//             strokeOpacity: 0.8,
//             strokeWeight: 2,
//             fillColor: '#FF0000',
//             fillOpacity: 0.35,
//             editable: true,
//         });
//         polygon.setMap(map);
//         const updateGeoFence = () => {
//             const geoFence = polygon.getPath().getArray().map((latLng) => ({
//                 lat: latLng.lat(),
//                 lng: latLng.lng(),
//             }));
//             console.log('geoFence:', geoFence);
//             setFence(geoFence)
//         };
//
//         maps.event.addListener(polygon.getPath(), 'set_at', updateGeoFence);
//
//         // maps.event.addListener(polygon.getPath(), 'insert_at',updateGeoFence);
//         maps.event.addListener(polygon.getPath(), 'insert_at', (index) => {
//             if (polygon.getPath().getLength() > 3) {
//                 polygon.getPath().removeAt(index);
//             }
//             updateGeoFence();
//         });
//     };
//
//     return (
//         <div style={{ height: '100vh', width: '100%' }}>
//             <GoogleMapReact
//                 bootstrapURLKeys={{ key: 'AIzaSyAolMqc9bflA2GpOQ8GtT0cNrwZG3EjhO4' }}
//                 center={center}
//                 defaultZoom={zoom}
//                 yesIWantToUseGoogleMapApiInternals
//                 onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
//             />
//         </div>
//     );
// };
//
// export default FinalMap;
// import React, {useEffect, useState} from 'react';
// import GoogleMapReact from 'google-map-react';
// const FinalMap = () => {
//     const [center, SetCenter] = useState({ lat: 59.95, lng: 30.33 });
//     const zoom = 11;
//     const [fence, setFence] = useState([
//         { lat: 59.95, lng: 30.33 },
//         { lat: 59.85, lng: 30.33 },
//         { lat: 59.85, lng: 30.23 },
//     ]);
//     const [polygon, setPolygon] = useState(null);
//
//     useEffect(() => {
//         fetch('http://localhost:3001/location')
//             .then((result) => result.json())
//             .then((data) => {
//                 const { myVehicle } = data;
//                 setFence(myVehicle['GeoFence']);
//                 SetCenter({
//                     lat: myVehicle['CurrentLocation']['coordinates'][0],
//                     lng: myVehicle['CurrentLocation']['coordinates'][1],
//                 });
//             });
//     }, []);
//
//     useEffect(() => {
//         if (polygon) {
//             polygon.setPaths(fence);
//         }
//     }, [fence, polygon]);
//
//     const handleApiLoaded = (map, maps) => {
//         // use map and maps objects
//         const marker = new maps.Marker({
//             position: center,
//             map,
//             icon: {
//                 url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
//             },
//         });
//         const newPolygon = new maps.Polygon({
//             paths: fence,
//             strokeColor: '#FF0000',
//             strokeOpacity: 0.8,
//             strokeWeight: 2,
//             fillColor: '#FF0000',
//             fillOpacity: 0.35,
//             editable: true,
//         });
//         const updateGeoFence = () => {
//             const geoFence = newPolygon
//                 .getPath()
//                 .getArray()
//                 .map((latLng) => ({
//                     lat: latLng.lat(),
//                     lng: latLng.lng(),
//                 }));
//             console.log('geoFence:', geoFence);
//             setFence(geoFence);
//         };
//         newPolygon.setMap(map);
//         setPolygon(newPolygon);
//
//
//         maps.event.addListener(newPolygon.getPath(), 'set_at', updateGeoFence);
//
//         // maps.event.addListener(polygon.getPath(), 'insert_at',updateGeoFence);
//         maps.event.addListener(newPolygon.getPath(), 'insert_at', (index) => {
//             if (newPolygon.getPath().getLength() > 3) {
//                 newPolygon.getPath().removeAt(index);
//             }
//             updateGeoFence();
//         });
//     };
//
//     return (
//         <div style={{ height: '100vh', width: '100%' }}>
//             <GoogleMapReact
//                 bootstrapURLKeys={{ key: 'YOUR_API_KEY' }}
//                 center={center}
//                 defaultZoom={zoom}
//                 yesIWantToUseGoogleMapApiInternals
//                 onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
//             />
//         </div>
//     );
// };
//
// export default FinalMap;
// import React, { useEffect, useState } from 'react';
// import GoogleMapReact from 'google-map-react';
//
// const FinalMap = () => {
//     const [center, SetCenter] = useState({ lat: 59.95, lng: 30.33 });
//     const zoom = 11;
//     const [fence, setFence] = useState([
//         { lat: 59.95, lng: 30.33 },
//         { lat: 59.85, lng: 30.33 },
//         { lat: 59.85, lng: 30.23 },
//     ]);
//     const [polygon, setPolygon] = useState(null);
//
//     useEffect(() => {
//         fetch('http://localhost:3001/location')
//             .then((result) => result.json())
//             .then((data) => {
//                 const { myVehicle } = data;
//                 setFence(myVehicle['GeoFence']);
//                 SetCenter({
//                     lat: myVehicle['CurrentLocation']['coordinates'][0],
//                     lng: myVehicle['CurrentLocation']['coordinates'][1],
//                 });
//             });
//     }, []);
//
//     const handleApiLoaded = (map, maps) => {
//         const marker = new maps.Marker({
//             position: center,
//             map,
//             icon: {
//                 url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
//             },
//         });
//         const newPolygon = new maps.Polygon({
//             paths: fence,
//             strokeColor: '#FF0000',
//             strokeOpacity: 0.8,
//             strokeWeight: 2,
//             fillColor: '#FF0000',
//             fillOpacity: 0.35,
//             editable: true,
//         });
//         const updateGeoFence = () => {
//             const geoFence = newPolygon
//                 .getPath()
//                 .getArray()
//                 .map((latLng) => ({
//                     lat: latLng.lat(),
//                     lng: latLng.lng(),
//                 }));
//             console.log('geoFence:', geoFence);
//             setFence(geoFence);
//         };
//         newPolygon.setMap(map);
//         setPolygon(newPolygon);
//         maps.event.addListener(newPolygon.getPath(), 'set_at', updateGeoFence);
//         maps.event.addListener(newPolygon.getPath(), 'insert_at', (index) => {
//             if (newPolygon.getPath().getLength() > 3) {
//                 newPolygon.getPath().removeAt(index);
//             }
//             updateGeoFence();
//         });
//     };
//
//     useEffect(() => {
//         if (polygon) {
//             polygon.setPaths(fence);
//         }
//     }, [fence, polygon]);
//
//     return (
//         <div style={{ height: '100vh', width: '100%' }}>
//             <GoogleMapReact
//                 bootstrapURLKeys={{ key: 'AIzaSyAolMqc9bflA2GpOQ8GtT0cNrwZG3EjhO4' }}
//                 center={center}
//                 defaultZoom={zoom}
//                 yesIWantToUseGoogleMapApiInternals
//                 onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
//             />
//         </div>
//     );
// };
//
// export default FinalMap;
// import React, { useEffect, useState } from 'react';
// import GoogleMapReact from 'google-map-react';
//
// const FinalMap = () => {
//     const [center, SetCenter] = useState({ lat: 59.95, lng: 30.33 });
//     const zoom = 11;
//     const [fence, setFence] = useState([
//         { lat: 59.95, lng: 30.33 },
//         { lat: 59.85, lng: 30.33 },
//         { lat: 59.85, lng: 30.23 },
//     ]);
//     const [polygon, setPolygon] = useState(null);
//
//     useEffect(() => {
//         fetch('http://localhost:3001/location')
//             .then((result) => result.json())
//             .then((data) => {
//                 const { myVehicle } = data;
//                 setFence(myVehicle['GeoFence']);
//                 SetCenter({
//                     lat: myVehicle['CurrentLocation']['coordinates'][0],
//                     lng: myVehicle['CurrentLocation']['coordinates'][1],
//                 });
//             });
//     }, []);
//
//     const handleApiLoaded = (map, maps) => {
//         const marker = new maps.Marker({
//             position: center,
//             map,
//             icon: {
//                 url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
//             },
//         });
//         const newPolygon = new maps.Polygon({
//             paths: fence,
//             strokeColor: '#FF0000',
//             strokeOpacity: 0.8,
//             strokeWeight: 2,
//             fillColor: '#FF0000',
//             fillOpacity: 0.35,
//             editable: true,
//         });
//         const updateGeoFence = () => {
//             const geoFence = newPolygon
//                 .getPath()
//                 .getArray()
//                 .map((latLng) => ({
//                     lat: latLng.lat(),
//                     lng: latLng.lng(),
//                 }));
//             console.log('geoFence:', geoFence);
//             setFence(geoFence);
//         };
//         newPolygon.setMap(map);
//         setPolygon(newPolygon);
//         console.log('newPolygon:', newPolygon);
//         console.log('newPolygon.getPath():', newPolygon.getPath());
//         const path = newPolygon.getPath();
//         maps.event.addListener(path, 'set_at', () => {
//             console.log('set_at event triggered');
//             updateGeoFence();
//         });
//         maps.event.addListener(newPolygon, 'dragend', () => {
//             console.log('dragend event triggered');
//             updateGeoFence();
//         });
//         // maps.event.addListener(newPolygon.getPath(), 'set_at', () => {
//         //     console.log('set_at event triggered');
//         //     updateGeoFence();
//         // });
//         // maps.event.addListener(newPolygon.getPath(), 'insert_at', (index) => {
//         //     console.log('insert_at event triggered');
//         //     if (newPolygon.getPath().getLength() > 3) {
//         //         newPolygon.getPath().removeAt(index);
//         //     }
//         //     updateGeoFence();
//         // });
//     };
//
//     useEffect(() => {
//         if (polygon) {
//             polygon.setPaths(fence);
//         }
//     }, [fence, polygon]);
//
//     return (
//         <div style={{ height: '100vh', width: '100%' }}>
//             <GoogleMapReact
//                 bootstrapURLKeys={{ key: 'AIzaSyAolMqc9bflA2GpOQ8GtT0cNrwZG3EjhO4' }}
//                 center={center}
//                 defaultZoom={zoom}
//                 yesIWantToUseGoogleMapApiInternals
//                 onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
//             />
//         </div>
//     );
// };
//
// export default FinalMap;
// import React from 'react';
// import GoogleMapReact from 'google-map-react';
// import { useLocation  } from 'react-router-dom';
// const FinalMap = () => {
//
//     // const location = useLocation();
//     // const Center = location.state?.Center;
//     // const GeoFence = location.state?.GeoFence;
//     // console.log("THe center is "+Center)
//     // console.log("The geofence is "+GeoFence)
//     // const center = { lat: Center[0], lng :Center[1] };
//     const center = { lat: 59.85, lng: 30.33 }
//     const zoom = 11;
//     console.log("I am now in the Map")
//
//
//
//     const handleApiLoaded = (map, maps) => {
//
//         const marker = new maps.Marker({
//             position: center,
//             map,
//             icon: {
//                 url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
//             },
//         });
//         const polygon = new maps.Polygon({
//             paths: [{ lat: 59.95, lng: 30.33 },
//         { lat: 59.85, lng: 30.33 },
//         { lat: 59.85, lng: 30.23 }],
//             strokeColor: '#FF0000',
//             strokeOpacity: 0.8,
//             strokeWeight: 2,
//             fillColor: '#FF0000',
//             fillOpacity: 0.35,
//             editable: true,
//         });
//         polygon.setMap(map);
//         const updateGeoFence = () => {
//             const geoFence = polygon.getPath().getArray().map((latLng) => ({
//                 lat: latLng.lat(),
//                 lng: latLng.lng(),
//             }));
//             fetch('http://localhost:3001/updateLocation',{
//                 method : "POST",
//                 headers : {
//                     "Content-Type" : 'application/json'
//                 },
//                 body: JSON.stringify({ GeoFence: geoFence })
//             })
//             console.log('geoFence:', geoFence);
//         };
//
//         maps.event.addListener(polygon.getPath(), 'set_at', updateGeoFence);
//
//         // maps.event.addListener(polygon.getPath(), 'insert_at',updateGeoFence);
//         maps.event.addListener(polygon.getPath(), 'insert_at', (index) => {
//             if (polygon.getPath().getLength() > 3) {
//                 polygon.getPath().removeAt(index);
//             }
//             updateGeoFence();
//         });
//     };
//
//     return (
//         <div style={{ height: '100vh', width: '100%' }}>
//             <GoogleMapReact
//                 bootstrapURLKeys={{ key: 'AIzaSyAolMqc9bflA2GpOQ8GtT0cNrwZG3EjhO4' }}
//                 defaultCenter={center}
//                 defaultZoom={zoom}
//                 yesIWantToUseGoogleMapApiInternals
//                 onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
//             />
//         </div>
//     );
// };
//
// export default FinalMap;

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
