import React, {useState} from "react";
import {Stack,TextField, InputAdornment,IconButton} from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function MuiText(){
    const [hidden,setHidden]=useState(false)
    function handleClick(){
        setHidden(!hidden)
    }
    return(

        <Stack spacing={4}>


            <Stack></Stack>

            <Stack spacing={4}>
                <TextField label={"UserName"} helperText={"Enter your username or email"}></TextField>
                <TextField label={"Password"} type={hidden? "password":"text"} InputProps={
                    {
                        endAdornment: <InputAdornment position={"end"} >
                            <IconButton onClick={handleClick}>
                                {hidden? <VisibilityOffIcon/> : <VisibilityIcon/>}
                            </IconButton>
                        </InputAdornment>
                    }
                }/>
                <VisibilityIcon />

            </Stack>

            <Stack direction={"row"} spacing={2}>

                <TextField label={"name"} />
                <TextField variant={"filled"} label={"name"} />
                <TextField varinat={"standard"} label={"name"} />

            </Stack>
            <Stack direction={"row"} spacing={2}>

                <TextField label={"small secondary"} size={"small"} color={"secondary"} />


            </Stack>
            <Stack direction={"row"} spacing={2}>

                <TextField label={"small secondary"} size={"small"}  required />


            </Stack>
            <Stack direction={"row"} spacing={2}>

                <TextField label={"Amount"}   required />
                <TextField label={"small secondary"}   required disabled />


            </Stack>
        </Stack>

    );
}

export default MuiText;