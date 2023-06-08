
import React, {useState} from "react";
import {Box, TextField, Stack, Button} from '@mui/material';


 function AddVehiclePage(){

     const [PlateNumber, setPlateNumber] = useState()
    function handleClick(){
        console.log("The Plate Number is ")
    }
    return (
        <Box>
            <Stack spacing={2} >
                <TextField label={"Owner"}   required disabled />
                <TextField label={"PlateNumber"} value={PlateNumber} onChange={function(e){
                    setPlateNumber(e.target.value)
                }} helperText={"Enter the Vehicle PlateNumber"}></TextField>
                <Button >Submit</Button>
            </Stack>
        </Box>


    );
}


export default AddVehiclePage;