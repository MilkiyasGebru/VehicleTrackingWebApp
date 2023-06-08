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
import FinalMap from "./DisplayLocation";

function VehicleCard({ vehicle }) {
    let history = useHistory();
    async function handleLocation() {
        // const data = await fetch('http://localhost:3001/location')

        // const {myVehicle} = await data.json()
        // console.log("I have been clicked"+myVehicle)
        // console.log("My plate Number is "+myVehicle["PlateNumber"])
        // console.log("My geofence is "+myVehicle["GeoFence"])
        history.push("/map",{Centre:{lat:11,lng:12}})


    }
    function handleHistory(){
        history.push("/history")
    }
    console.log(vehicle["name"] + " Name");
    return (

        <Box >
            <Card sx={{width:"360px", height:"230px"}}>
                <CardHeader
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={vehicle["name"]}
                    subheader={vehicle["school"]}
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
                </CardActions>
            </Card>
        </Box>

    );
}

export default VehicleCard;
