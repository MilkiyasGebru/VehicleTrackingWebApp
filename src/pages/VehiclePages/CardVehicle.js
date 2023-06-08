// import React from "react";
// import Card from "@mui/material/Card";
// import CardHeader from "@mui/material/CardHeader";
// import CardMedia from "@mui/material/CardMedia";
// import CardContent from "@mui/material/CardContent";
// import CardActions from "@mui/material/CardActions";
// import Collapse from "@mui/material/Collapse";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import IconButton, { IconButtonProps } from "@mui/material/IconButton";
// import {Button, Typography,Box} from "@mui/material";
//
// function VehicleCard({ vehcile }) {
//     console.log("I am in here")
//     console.log(vehcile["name"] + " Name");
//     return (
//
//         <Box >
//             <Card sx={{width:"360px", height:"230px"}}>
//                 <CardHeader
//                     action={
//                         <IconButton aria-label="settings">
//                             <MoreVertIcon />
//                         </IconButton>
//                     }
//                     title={vehcile["name"]}
//                     subheader={vehcile["school"]}
//                 />
//
//                 <CardContent>
//                     <Typography variant="body2" color="primary">
//                         {vehcile["body"]}
//                     </Typography>
//                 </CardContent>
//                 <CardActions>
//                     <Typography width={"40px"}></Typography>
//                     <Button size={"small"} ><Typography variant={"body2"} fontWeight={"bold"}>Location</Typography></Button>
//                     <Typography width={"40px"}></Typography>
//                     <Button size={"small"} ><Typography variant={"body2"} fontWeight={"bold"} >History</Typography></Button>
//                 </CardActions>
//             </Card>
//         </Box>
//
//     );
// }
//
// export default VehicleCard;
import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import {Button, Typography,Box} from "@mui/material";
import { useHistory } from "react-router-dom";

function CardVehicle({ vehicle }) {
    let history = useHistory();
     function handleLocation() {
        history.push("/map",{Centre:vehicle["CurrentLocation"]["coordinates"],GeoFence:vehicle["GeoFence"],_id:vehicle["_id"]})
    }

    function handleHistory(){
        history.push("/history")
    }

    function reportTheft(){

        const today = new Date();

        const formattedDate = new Intl.DateTimeFormat('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        }).format(today);
        fetch('http://localhost:3001/reportTheft',{
            method : "POST",
            headers : {
                "Content-Type" : 'application/json'
            },
            body: JSON.stringify({

                TheftLocation: {lat:vehicle["CurrentLocation"]["coordinates"][0],lng:vehicle["CurrentLocation"]["coordinates"][1]},
                Owner : vehicle["Owner"],
                PlateNumber: vehicle["PlateNumber"],
                TheftDate:formattedDate


            })
        }).then((data)=>{
            history.push('/theft',{id:vehicle["Owner"]})
        })

    }


    {/*const rayCasting = (point, polygonPoints) => {*/}
    {/*    let inside = false;*/}
    //     for (let i = 0; i < polygonPoints.length; i++) {
    //         const currentPoint = polygonPoints[i];
    //         const nextPoint = polygonPoints[(i + 1) % polygonPoints.length];
    //         const isLeft = (currentPoint.lat - point[0]) * (nextPoint.lng - currentPoint.lng) < (currentPoint.lng - point[1]) * (nextPoint.lat - currentPoint.lat);
    //         if (isLeft && (point[1] - currentPoint.lng) * (nextPoint.lat - currentPoint.lat) > 0) {
    //             inside = !inside;
    //         }
    //     }
    //     console.log("The inside is "+inside)
    //     return inside;
    // };
    const rayCasting = (point, polygon) => {
        let inside = false;
        for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
            const xi = polygon[i].lat;
            const yi = polygon[i].lng;
            const xj = polygon[j].lat;
            const yj = polygon[j].lng;
            const intersect =
                yi > point[1] !== yj > point[1] &&
                point[0] <
                ((xj - xi) * (point[1] - yi)) / (yj - yi) + xi;
            if (intersect) {
                inside = !inside;
            }
        }
        return inside;
    };
    return (

        <Box >
            <Card sx={{width:"360px", height:"230px"}} color={rayCasting(vehicle["CurrentLocation"]["coordinates"],vehicle["GeoFence"])? "primary":"secondary"}>
                <CardHeader
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={vehicle["PlateNumber"]}
                    subheader={rayCasting(vehicle["CurrentLocation"]["coordinates"],vehicle["GeoFence"])?  "Inside the Fence":"Outside the fence"}
                />

                <CardContent>
                    <Typography variant="body2" color="primary">
                        {vehicle.body}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Typography width={"40px"}></Typography>
                    <Button size={"small"} onClick={handleLocation}><Typography variant={"body2"} fontWeight={"bold"}>Location</Typography></Button>
                    <Typography width={"40px"}></Typography>
                    <Button size={"small"} onClick={handleHistory} ><Typography variant={"body2"} fontWeight={"bold"} >History</Typography></Button>
                    <Typography width={"40px"}></Typography>
                    <Button size={"small"} onClick={reportTheft} ><Typography variant={"body2"} fontWeight={"bold"} >Report Theft</Typography></Button>

                </CardActions>
            </Card>
        </Box>

    );
}

export default CardVehicle;
