import React, {useEffect} from "react";
import {Box, Toolbar, AppBar, Stack, Typography,IconButton,Button} from "@mui/material"
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import {useHistory} from "react-router-dom";

function MuiAppBar(){
    const history = useHistory();

    return (
        <Box>
        <AppBar position={"fixed"} >
            <Toolbar >

                <IconButton>
                    <LocationSearchingIcon/>
                </IconButton>
                <Typography  component={"div"}>
                    Miki and Eyuel Smart Engine Locking System
                </Typography>


                <Typography sx={{flexGrow:1}} >

                </Typography>

                <Stack direction={"row"} spacing={2}>
                    {/*<Button color={"inherit"}>Profile</Button>*/}
                    {/*<Button color={"inherit"}>About</Button>*/}
                    <Button color={"inherit"} onClick={
                        function(){
                            history.replace('/');
                        }
                    }>LogOut</Button>
                    <Typography sx={{width:24}}></Typography>
                </Stack>
            </Toolbar>

        </AppBar>
        </Box>

    );

}

export default MuiAppBar;