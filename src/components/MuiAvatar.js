import {Stack, Avatar} from "@mui/material";
import React from "react";

function MuiAvatar(){

    return(

        <Stack spacing={4}>
            <Stack direction={"row"} spacing={1}>

                <Avatar>AW</Avatar>
                <Avatar>CK</Avatar>

            </Stack>
        </Stack>
    );
}

export default MuiAvatar;