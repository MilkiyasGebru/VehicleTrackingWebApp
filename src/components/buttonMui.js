import {Stack,Button, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton} from "@mui/material";
import {FormatBold} from '@mui/icons-material'
import {FormatItalic} from "@mui/icons-material";
import {FormatUnderlined} from "@mui/icons-material";
import SendIcon from '@mui/icons-material/Send';
import {useState} from "react";

function MuiButton(){
    const [formats, setFormats] = useState([])
    function handleFormatChange(_event,updated_formats){
        if (!updated_formats){
        console.log(updated_formats)
        setFormats(updated_formats[0])}
        // console.log(formats)
    }

    return (
        <Stack spacing={4} >

            <Stack spacing={2} direction="row">
                <Button>Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Stack>

            <Stack spacing={2} direction="row" display="block">
                <Button color="primary">Text</Button>
                <Button variant="contained" color="secondary">Contained</Button>
                <Button variant="outlined" color="error">Outlined</Button>

            </Stack>

            <Stack display="block" spacing={2} direction="row">

                <Button variant="contained" size="small">Click Me</Button>
                <Button variant="contained" size="medium">Click Me</Button>
                <Button variant="contained" size="large">Click Me</Button>

            </Stack>

            <Stack spacing="row" direction="row">

                <Button variant="contained" startIcon={<SendIcon />}>Send</Button>
                <IconButton color="primary">
                    <SendIcon />
                </IconButton>
            </Stack>

            <Stack direction="row">
               <ButtonGroup variant={"contained"} orientation={"vertical"}>
                   <Button>Left</Button>
                   <Button>Middle</Button>
                   <Button>Right</Button>
               </ButtonGroup>

            </Stack>

            <Stack >
                <ToggleButtonGroup value={formats} onChange={handleFormatChange} >

                <ToggleButton value={"bold"}><FormatBold/></ToggleButton>
                <ToggleButton value={"italic"}><FormatItalic/></ToggleButton>
                <ToggleButton value={"underlined"}><FormatUnderlined/></ToggleButton>

                </ToggleButtonGroup>
            </Stack>

        </Stack>);
}

export  default MuiButton;