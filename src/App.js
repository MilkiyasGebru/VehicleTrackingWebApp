
import MuiAppBar from "./components/MuiAppBar";
import MuiDrawer from "./components/drawerMui";
import React from "react";
import {Box, Button, Stack, Typography} from '@mui/material';
import DisplayVehicles from "./pages/DisplayVehicle";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    useParams,
} from "react-router-dom";
import FinalMap from "./pages/DisplayLocation";
import DisplayHistory from "./pages/DisplayHistory";
import SignIn from "./pages/AuthicationPages/SignIn";
import SignUp from "./pages/AuthicationPages/signUp";
import HomePage from "./pages/Home/Home";
import AddVehiclePage from "./pages/VehiclePages/AddVehicle";
import ViewVehicle from "./pages/VehiclePages/ViewVehicle";
import ViewVehiclePage from "./pages/VehiclePages/ViewVehicle";
import TheftPage from "./pages/Other/TheftPage";
import ChangePasswordPage from "./pages/Other/ChangePassword";

function App() {
  return (

      <Router>
          <Switch>

              <Route exact path={"/"}>
                  <SignIn />
              </Route>

              <Route exact path={'/signUp'}>
                  <SignUp />
              </Route>



              <Route  exact path={"/home"}>
                  <Stack spacing={10} sx={{ backgroundColor: "#eeeeee", height: "100vh"}}>
                      <MuiAppBar></MuiAppBar>
                      <Stack direction={"row"}>
                          <MuiDrawer/>

                          <ViewVehiclePage />
                      </Stack>
                  </Stack>
              </Route>

              <Route exact path={"/theft"}>
                  <Stack  spacing={10} sx={{ backgroundColor: "#eeeeee", height: "100vh"}}>
                      <MuiAppBar />

                      <Stack direction={"row"} spacing={2}>
                          <MuiDrawer/>
                          <TheftPage  />

                      </Stack>
                  </Stack>

              </Route>

              <Route exact path={"/map"}>
                  <Stack  >
                      <MuiAppBar />

                      <Stack direction={"row"} >

                          <MuiDrawer/>
                          <FinalMap  />

                      </Stack>
                  </Stack>

              </Route>
              <Route exact path={"/map"}>
                  <Stack direction={"row"} sx={{ height: "100vh" }} >
                      <Box sx={{ width: "240px", backgroundColor: "blue" }}><MuiDrawer/></Box>
                      <Stack sx={{ width: "calc(100% - 240px)" }} spacing={2}>
                          <MuiAppBar />
                          <FinalMap  />

                      </Stack>
                  </Stack>

              </Route>
              <Route exact path={"/history"}>
                  <Stack direction={"row"} sx={{ height: "100vh" }} >
                      <Box sx={{ width: "240px", backgroundColor: "blue" }}><MuiDrawer/></Box>
                      <Stack sx={{ width: "calc(100% - 240px)" }} spacing={2}>
                          <MuiAppBar />
                          <DisplayHistory  />

                      </Stack>
                  </Stack>

              </Route>
              <Route exact path={"/add"}>
                  <Stack direction={"row"} sx={{ height: "100vh" }} >
                      <Box sx={{ width: "240px", backgroundColor: "blue" }}><MuiDrawer/></Box>
                      <Stack sx={{ width: "calc(100% - 240px)" }} spacing={2}>
                          <MuiAppBar />
                          <AddVehiclePage />

                      </Stack>
                  </Stack>

              </Route>

              <Route exact path={"/pass"}>
                  <Stack direction={"row"} sx={{ height: "100vh" }} >
                      <Box sx={{ width: "240px", backgroundColor: "blue" }}><MuiDrawer/></Box>
                      <Stack sx={{ width: "calc(100% - 240px)" }} spacing={2}>
                          <MuiAppBar />
                          <ChangePasswordPage />

                      </Stack>
                  </Stack>

              </Route>


          </Switch>

      </Router>




  );
}

export default App;



































{/*<Router>*/}
{/*    <Stack direction={"row"} sx={{ height: "100vh" }} >*/}
{/*        <Box sx={{ width: "240px", backgroundColor: "blue" }}><MuiDrawer/></Box>*/}
{/*        <Stack sx={{ width: "calc(100% - 240px)" }} spacing={2}>*/}
{/*            <MuiAppBar />*/}
{/*            <Switch>*/}
{/*                <Route exact path={'/'}>*/}
{/*                    <SignIn />*/}
{/*                </Route>*/}
//                 <Route exact path={"/home"}>
//                     <DisplayVehicles  />
//                 </Route>
//                 <Route path={"/map"}>
//                     <FinalMap />
//                 </Route>
{/*                <Route path={"/history"}>*/}
{/*                    <DisplayHistory />*/}
{/*                </Route>*/}
//             </Switch>
//         </Stack>
{/*        /!*<Box ><MuiAppBar /></Box>*!/*/}
{/*    </Stack>*/}
{/*</Router>*/}


<Stack direction={"row"} sx={{ height: "100vh" }} >
    <Box sx={{ width: "240px", backgroundColor: "blue" }}><MuiDrawer/></Box>
    <Stack sx={{ width: "calc(100% - 240px)" }} spacing={2}>
        <MuiAppBar />
        <Route exact path={"/home"}>
            <ViewVehiclePage  />
        </Route>
        <Route exact path={"/map"}>
            <FinalMap />
        </Route>

        <Route exact path={"/history"}>
            <DisplayHistory />
        </Route>

        <Route exact path={"/add"}>
            <AddVehiclePage />
        </Route>

        <Route exact path={'/theft'}>
            <TheftPage />
        </Route>





    </Stack>

</Stack>