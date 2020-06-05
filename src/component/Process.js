import React, {useEffect, useState} from 'react';
import { authPost, authGet } from '../api';
import { List } from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';


const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

function Process(props){

    const [listProcess, setListProcess] = useState([]);
    const [count,setCount] = useState(0);
    const [time, setTime] = useState(0);
    const classes = useStyles();
    const [sort, setSort] = useState("cpu");
    // useEffect (() => (


        // fetch('/time').then(
        //     res => res.json().then(
        //         data =>{


        //             console.log('data', data);
        //             setListProcess(data.item);
        //         }
        //     )
        // )

    // ),[]);

    useEffect(() => {
        //console.log("111");


        console.log("sort ", sort);

        if(sort == "cpu"){
            fetch('/cpu').then(
                res => res.json().then(
                    data =>{


                        console.log('data', data);
                        setListProcess([]);
                        setListProcess(data.item);
                    }
                )
            )
        }else if (sort == "mem"){
            fetch('/mem').then(
                res => res.json().then(
                    data =>{


                        console.log('data', data);
                        setListProcess([]);
                        setListProcess(data.item);
                    }
                )
            )
        }else{
            fetch('/pid').then(
                res => res.json().then(
                    data =>{


                        console.log('data', data);
                        setListProcess([]);
                        setListProcess(data.item);
                    }
                )
            )
        }






        const id = setInterval(() => {
          setCount(count + 1)
        }, 2000)
        return () => clearInterval(id)
    }, [count])

    const handlePidChange = () => {
        setSort("pid");
    }


    const handleCpuChange = () =>{
        setSort("cpu");
        //window.location.reload();
    }

    const handleMemChange = () =>{
        setSort("mem");
        //window.location.reload();
    }

    return (
        <div>
            <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>COMMAND</TableCell>
                    <TableCell align="center">USER</TableCell>
                    <TableCell align="center">
                        <Button onClick={handlePidChange} >
                            %PID
                        </Button>


                    </TableCell>

                    <TableCell align="center">
                        <Button onClick={handleCpuChange} >
                            %CPU
                        </Button>


                    </TableCell>

                    <TableCell align="center">
                        <Button onClick={handleMemChange} >
                            %MEM
                        </Button>


                    </TableCell>
                    <TableCell align="center">TIME</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {listProcess.map((row) => (
                    <TableRow key={row.cmd}>
                        <TableCell component="th" scope="row">
                            {row.cmd}
                        </TableCell>
                        <TableCell align="center">{row.user}</TableCell>
                        <TableCell align="center">{row.pid}</TableCell>
                        <TableCell align="center">{row.cpu}</TableCell>
                        <TableCell align="center">{row.mem}</TableCell>
                        <TableCell align="center">{row.time}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </div>
    )
}

export default Process;