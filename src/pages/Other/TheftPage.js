import React, {useEffect, useState} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useLocation} from "react-router-dom";
import {Box} from "@mui/material";
import { TablePagination } from '@mui/material';


function TheftPage(){
    const location = useLocation();
    const id = location.state.id
    const [thefts, setThefts] = useState([]);
    const [page,setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const handleChangePage = (event,newPage)=>{
        console.log("The new page is "+ newPage)
        setPage(newPage);
    }
    const handleChangeRowsPerPage = (event)=>{
        setRowsPerPage(+event.target.value);
        setPage(0);
    }


    useEffect(()=>{
        fetch('http://localhost:3001/theft').then((data)=> data.json()).then((result)=>{
            console.log("The thefts are "+result)
            const {thefts} = result
            console.log("The "+result["thefts"])
            console.log("thefts "+thefts)
            const filterdThefts = result.filter(theft => theft.Owner === id)
            setThefts(filterdThefts)
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    return (
        <Box sx={{paddingX:24}}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>PlateNumber</TableCell>
                            <TableCell align="right">Latitutde</TableCell>
                                <TableCell align="right">Longtitude</TableCell>
                            <TableCell align="right">TheftDate</TableCell>
                            {/*<TableCell align="right">Protein&nbsp;(g)</TableCell>*/}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {thefts
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((theft) => (
                            <TableRow
                                key={theft._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {theft.PlateNumber}
                                </TableCell>
                                <TableCell align="right">{theft.TheftLocation.lat}</TableCell>
                                <TableCell align="right">{theft.TheftLocation.lng}</TableCell>
                                <TableCell align="right">{theft.TheftDate}</TableCell>
                                {/*<TableCell align="right">{row.protein}</TableCell>*/}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 7,10 ]}
                component="div"
                count={thefts.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Box>
    );
}


export default TheftPage;