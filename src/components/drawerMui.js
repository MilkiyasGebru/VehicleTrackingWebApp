import React, {useEffect} from "react";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import AddIcon from '@mui/icons-material/Add';
import PolicyIcon from '@mui/icons-material/Policy';
import PersonIcon from '@mui/icons-material/Person';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import {useHistory} from "react-router-dom";

import {useLocation} from "react-router-dom";
function MuiDrawer(){
    const drawer_items = [{"text" : "View Vehicles", "icon":<DirectionsCarFilledIcon/>,"path":"/home"},
        {"text":"Add Vehicles","icon":<AddIcon/>,"path":"/add"},
        {"text": "Theft Report","icon":<PolicyIcon/>, "path":"/theft"},
        // {"text":"Profile","icon":<PersonIcon/>,"path":"/profile"},
        {"text":"Change Password","icon":<VpnKeyIcon />, "path":"/pass" }
    ]
    let history = useHistory();
    useEffect(()=>{
        console.log("Hi")
    })
    const location = useLocation();
    const id = location.state.id;
    return (

        <Drawer
            sx={{
                position:"relative",
                width: 240,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    top: 64,
                    width: 240,
                    boxSizing: 'border-box',

                    // backgroundColor:"blue"
                },
            }}
            variant="permanent"
            anchor="left"
        >
            {/*<Toolbar />*/}
            <Divider />
            <List >
                {drawer_items.map((item) => (
                    <ListItem key={item["text"]} disablePadding  >
                        <ListItemButton onClick={function(){
                            history.push(item["path"],{ id: id})
                        }} >
                            <ListItemIcon>
                                {/*{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}*/}
                                {item["icon"]}
                            </ListItemIcon>
                            <ListItemText primary={item["text"]}  />
                        </ListItemButton>
                        <Divider />
                    </ListItem>

                ))}
            </List>

        </Drawer>





    );
}

export default MuiDrawer;