import MuiAppBar from "../../components/MuiAppBar";
import MuiDrawer from "../../components/drawerMui";
import React from "react";
import {Box, Button, Stack, Typography} from '@mui/material';
import DisplayVehicles from "../DisplayVehicle";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    useParams,
} from "react-router-dom";
import FinalMap from "../DisplayLocation";
import DisplayHistory from "../DisplayHistory";


function HomePage(){

    return(
        <Stack direction={"row"} sx={{ height: "100vh" }} >
            <Box sx={{ width: "240px", backgroundColor: "blue" }}><MuiDrawer/></Box>
            <Stack sx={{ width: "calc(100% - 240px)" }} spacing={2}>
                <MuiAppBar />
                <Switch>
                    <Route exact path={"/home"}>
                        <DisplayVehicles  />
                    </Route>
                    <Route path={"/map"}>
                        <FinalMap />
                    </Route>
                    <Route path={"/history"}>
                        <DisplayHistory />
                    </Route>

                </Switch>
            </Stack>
            {/*<Box ><MuiAppBar /></Box>*/}

        </Stack>
    )
}

export default HomePage;