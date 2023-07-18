
import React, {useState} from "react";
import {Box, TextField, Stack, Button, Typography, FormControl, FormLabel, RadioGroup, Radio} from '@mui/material';
import FormControlLabel from "@mui/material/FormControlLabel";
import {useHistory, useLocation} from "react-router-dom";


 function AddVehiclePage(){
     const history = useHistory();
     const location = useLocation();
     const id = location.state.id;

     const [PlateNumber, setPlateNumber] = useState();
     const [error, setError] = useState("");
     const [engine, setEngine] = useState(false);
     const [loading, setLoading] = useState(false);

    function handleChange(event){
        setEngine(event.target.value)
    }
    function handleSubmit(event){
        setLoading(true)
        event.preventDefault();
        fetch("http://localhost:3001/addVehicle",{
            method :"POST",
            headers :{
                "Content-Type":"application/json"},
            body : JSON.stringify({
                Owner : id,
                Engine: engine,
                PlateNumber: PlateNumber
            })
        }).then(result => result.json()).then((data)=>{
            setLoading(false)
            if (data["error"] != null){
                setError(data["error"])
            }
            else{
                history.replace('/home',{id:id})
            }
        }).catch((err)=>{
            setLoading(false);
                setError("Vehicle not added")
            }

        )
    }
    return (
        <Box sx={{width:480,height:480, paddingY:15 ,paddingX:30,justifyContent:"center", alignContent:"center"}}>
            <form onSubmit={handleSubmit}>
                <Stack spacing={2}>
                    <Typography variant="h6">Add Vehicle</Typography>

                    <TextField
                        label="PlateNumber"
                        // type="password"
                        value={PlateNumber}
                        onChange={(event) => setPlateNumber(event.target.value)}
                        required
                    />
                    <Typography color={"error"} >{error}</Typography>
                    <FormControl>
                        <FormLabel id="demo-controlled-radio-buttons-group">Engine</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={engine}
                            onChange={handleChange}
                        >
                            <FormControlLabel value={"true"} control={<Radio />} label="Locked" />
                            <FormControlLabel value={"false"} control={<Radio />} label="Unlocked" />
                        </RadioGroup>
                    </FormControl>
                    <Button type="submit" variant="contained" color="primary" disabled={loading}>
                        Add Vehicle
                    </Button>
                </Stack>
            </form>
        </Box>


    );
}


export default AddVehiclePage;