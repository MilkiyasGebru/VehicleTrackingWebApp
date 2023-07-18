// import React from "react";
// import {useState, useEffect} from "react";
// import {Box, Stack, TextField} from "@mui/material";
//
// const ChangePasswordPage = function (){
//
//     return (
//
//
//         <Box sx={{width:240, height:240 }}>
//             <Stack spacing={2}>
//                 <TextField type={"password"} label={"password"}/>
//                 <TextField type={"password"} label={"new password"} />
//                 <TextField type={"password"} label={"confirm password"} />
//             </Stack>
//         </Box>
//     );
// }
//
// export default ChangePasswordPage;

import React, { useState } from 'react';
import { Button, TextField, Typography, Stack,Box } from "@mui/material";
import {useHistory, useLocation} from "react-router-dom";

const ChangePasswordPage = () => {
    const history = useHistory();
    const location = useLocation();
    const id = location.state.id;
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [mismatch, setMismatch] = useState("");
    const [incorrect, setIncorrect] = useState("");
    const [loading,setLoading] = useState(false);

    const handleSubmit = (event) => {

        setMismatch("");
        setIncorrect("");
        event.preventDefault();
        // handle form submission here
        if (newPassword !== confirmNewPassword){
            console.log("I am here");
            setMismatch("New password and confirm password must match")
            console.log(mismatch)
        }
        else{
            setLoading(true);

                fetch("http://localhost:3001/changePassword",{
                    method:"POST",
                    headers:{"Content-Type":"application/json"},
                    body: JSON.stringify({
                        id:id,
                        oldPassword:currentPassword,
                        newPassword:newPassword
                    })}).then(result => result.json() ).then(data=>{

                    setLoading(false);
                    if (data["error"] != null){
                        setIncorrect(data["error"]);
                    }
                    else{
                        history.replace('/home',{id:id})
                    }
                }).catch((err)=>{
                    setLoading(false);
                    console.log(err)
                });
        }
        }


    return (
        <Box sx={{width:480,height:480, paddingY:15 ,paddingX:30,justifyContent:"center", alignContent:"center"}}>
        <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
            <Typography variant="h6">Change Password</Typography>
            <TextField
                label="Current Password"
                type="password"
                value={currentPassword}
                onChange={(event) => setCurrentPassword(event.target.value)}
                required
            />
                <Typography variant={"h1"}>{incorrect}</Typography>
            <TextField
                label="New Password"
                type="password"
                value={newPassword}
                onChange={(event) => setNewPassword(event.target.value)}
                required
            />
            <TextField
                label="Confirm New Password"
                type="password"
                value={confirmNewPassword}
                onChange={(event) => setConfirmNewPassword(event.target.value)}
                required
            />
                <Typography color={"error"} >{mismatch}</Typography>
            <Button type="submit" variant="contained" color="primary" disabled={loading} >
                Change Password
            </Button>
            </Stack>
        </form>
        </Box>
    );
};

export default ChangePasswordPage;
