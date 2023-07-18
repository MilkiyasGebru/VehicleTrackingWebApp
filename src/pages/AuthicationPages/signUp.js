import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useHistory} from "react-router-dom";
import {useState} from "react";

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    let history = useHistory();
    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
        const data = new FormData(event.currentTarget);
        const name = data.get("name")
        const password = data.get("password")
        console.log({name:name,password:password})


        console.log("I am doing fetch");
        fetch('http://localhost:3001/signUp',{
            method : "POST",
            headers : {
                "Content-Type" : 'application/json'
            },
            body: JSON.stringify({ name: name, password: password })
        }).then(response => response.json()).then((data)=>{
            setLoading(false)
            const {newUser,error} = data

            if (error == null){

                history.push('/home',{id: newUser["_id"]})
            }
            else{
                setError("User already exists withthat name")


            }
        }).catch((err)=>{
            setLoading(false);
            setError("Sign Up Failed")

        })

    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign Up
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="UserName "
                            name="name"
                            autoComplete="name"
                            autoFocus
                        />
                        <Typography color={"error"}>{error}</Typography>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container>
                            <Grid item xs>

                            </Grid>
                            <Grid item>
                                <Link href="/" variant="body2">
                                    {"Already have an account? Sign In"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}