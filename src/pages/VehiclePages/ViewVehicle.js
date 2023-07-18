import { Grid, Paper, Container } from "@mui/material";
import { useEffect, useState } from "react";
import CardVehicle from "./CardVehicle";
import {useLocation} from "react-router-dom";
function ViewVehiclePage(){

    const location = useLocation();
    const id = location.state.id;
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        console.log("ViewViechle is ranning");
        fetch('http://localhost:3001/vehicles').then((data) =>data.json()).then((result)=>{
            const fetchedResult = result.filter(item => item.Owner === id)
            console.log("The result is "+result+" The filitered one is "+fetchedResult);
            setVehicles(fetchedResult)

        }
        ).catch((err)=>{
            console.log(err)
        })

        const source = new EventSource("http://localhost:3001/updates");
        source.addEventListener("database-change", (event) => {
            const { array } = JSON.parse(event.data);
            const filterdArray = array.filter(item => item.Owner === id)

            setVehicles(filterdArray);
        });

        return () => {
            source.close();
        };
    },[]);

    return (
        <Container>
            <Grid container spacing={3}>
                { vehicles.map((vehicle) => {
                    return (
                        <Grid item id={vehicle["PlateNumber"]} key={vehicle["_id"]}>
                            <CardVehicle vehicle={vehicle} />
                        </Grid>
                    );
                })}
            </Grid>
        </Container>


    );
}
export default ViewVehiclePage;