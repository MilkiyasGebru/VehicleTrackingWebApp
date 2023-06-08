import React from "react";
import {Box} from "@mui/material"


function MuiLayout(){
    return (
        <Box sx={{

            backgroundColor:"primary.main",
            color:"white",
            height:"100px",
            width:"100px",
            padding:"16px",
            marginLeft:"16px",
            "&:hover":{
                backgroundColor:"primary.light"
            }

        }}>
            My first Box
        </Box>
    );
}

export default MuiLayout;