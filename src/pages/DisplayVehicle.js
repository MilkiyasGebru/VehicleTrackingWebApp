// // import NoteCard from "./displayingCard";
// import {Grid, Paper, Container, Typography} from "@mui/material";
// import { useEffect, useState } from "react";
// import VehicleCard from "./VehicleCard";
//
// function DisplayVehicles() {
//     const [vehicles, setVehicles] = useState([
//         { name: "Biruke", school: "4 Kilo", _id: 1 },
//     ]);
//
//     useEffect(() => {
//         console.log("This is the "+vehicles)
//         console.log("Use Effect Raned");
//         const source = new EventSource("http://localhost:3001/updates");
//         source.addEventListener("database-change", (event) => {
//             const { array } = JSON.parse(event.data);
//             console.log(array)
//             setVehicles(array);
//             console.log("I have set my notes");
//             console.log("Notes" + vehicles);
//         });
//
//         return () => {
//             source.close();
//         };
//     });
//
//     return (
//         <Container>
//             {vehicles.map((vehicle)=>{
//                 return <Typography>Vehicle 1</Typography>
//             })}
//             <Grid container spacing={3}>
//                 {!vehicles && vehicles.map((vehicle) => {
//                     return(
//                         <Grid item id={vehicle["id"]}>
//                             <VehicleCard vehcile={vehicle} />
//                         </Grid>);
//
//                 })}
//             </Grid>
//         </Container>
//
//         // <div>
//         //   {notes.map((student) => (
//         //     <div key={student._id}>
//         //       <h2>{student["name"]}</h2>
//         //       <p>{student["school"]}</p>
//         //     </div>
//         //   ))}
//         // </div>
//     );
// }
//
// export default DisplayVehicles;


import { Grid, Paper, Container } from "@mui/material";
import { useEffect, useState } from "react";
import {useLocation} from "react-router-dom";
import VehicleCard from "./VehicleCard";

function DisplayVehicles() {
    const location = useLocation();
    const id = location.state.id;

    const [vehicles, setVehicles] = useState([

    ]);




    // useEffect(() => {
    //     console.log("Use Effect Raned");
    //     fetch('http://localhost:3001/').then((data) =>data.json()).then((result)=> {
    //             console.log(result)
    //             const filteredResult = result.filter(item => item._id === id)
    //             console.log("The result is "+result)
    //             console.log("THe filterdResult is "+filteredResult)
    //
    //             setVehicles(filteredResult)
    //         }
    //     // console.log(result)
    //     // console.log("use fetch rained")
    //     )
    //
    //     const source = new EventSource("http://localhost:3001/updates");
    //     source.addEventListener("database-change", (event) => {
    //         const { array } = JSON.parse(event.data);
    //         const filiterdArray = array.filter(item => item._id === id)
    //         setVehicles(filiterdArray);
    //         console.log("I have set my notes");
    //         console.log("Notes" + vehicles);
    //     });
    //
    //     return () => {
    //         source.close();
    //     };
    // },[]);

    return (
        <Container>
            <Grid container spacing={3}>
                { vehicles.map((vehicle) => {
                    return (
                        <Grid item id={vehicle["name"]}>
                            <VehicleCard vehicle={vehicle} />
                        </Grid>
                    );
                })}
            </Grid>
        </Container>

        // <div>
        //   {notes.map((student) => (
        //     <div key={student._id}>
        //       <h2>{student["name"]}</h2>
        //       <p>{student["school"]}</p>
        //     </div>
        //   ))}
        // </div>
    );
}

export default DisplayVehicles;
