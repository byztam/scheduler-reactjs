import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import styles from './styles/listStyle';
import { withStyles } from '@material-ui/core';

class ListHeader extends Component {
    render() {
        const {classes} = this.props;
        return (
            <Grid container>
                <Grid item lg={12}>
                    <TableContainer component={Paper}>
                        <Table className={classes.table}  size="small" aria-label="caption table">
                            <TableHead>
                                <TableRow>
                                    <TableCell rowSpan="2" align="center">SUMMARY</TableCell>
                                    <TableCell colSpan="2" align="center">MON</TableCell>
                                    <TableCell colSpan="2" align="center">TUE</TableCell>
                                    <TableCell colSpan="2" align="center">WED</TableCell>
                                    <TableCell colSpan="2" align="center">THU</TableCell>
                                    <TableCell colSpan="2" align="center">FRI</TableCell>
                                    <TableCell colSpan="2" align="center">SAT</TableCell>
                                    <TableCell colSpan="2" align="center">SUN</TableCell>
                                    <TableCell align="center" rowSpan="2" className={classes.total}></TableCell>
                                    <TableCell align="center" rowSpan="2" className={classes.des}></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left">from</TableCell>
                                    <TableCell align="left">till</TableCell>
                                    <TableCell align="left">from</TableCell>
                                    <TableCell align="left">till</TableCell>
                                    <TableCell align="left">from</TableCell>
                                    <TableCell align="left">till</TableCell>
                                    <TableCell align="left">from</TableCell>
                                    <TableCell align="left">till</TableCell>
                                    <TableCell align="left">from</TableCell>
                                    <TableCell align="left">till</TableCell>
                                    <TableCell align="left">from</TableCell>
                                    <TableCell align="left">till</TableCell>
                                    <TableCell align="left">from</TableCell>
                                    <TableCell align="left">till</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell align="left">Time block #1</TableCell>
                                    <TableCell align="left">1:00</TableCell>
                                    <TableCell align="left">1:00</TableCell>
                                    <TableCell align="left">1:00</TableCell>
                                    <TableCell align="left">1:00</TableCell>
                                    <TableCell align="left">1:00</TableCell>
                                    <TableCell align="left">1:00</TableCell>
                                    <TableCell align="left">1:00</TableCell>
                                    <TableCell align="left">1:00</TableCell>
                                    <TableCell align="left">1:00</TableCell>
                                    <TableCell align="left">1:00</TableCell>
                                    <TableCell align="left">1:00</TableCell>
                                    <TableCell align="left">1:00</TableCell>
                                    <TableCell align="left">1:00</TableCell>
                                    <TableCell align="left">1:00</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left">Time block #2</TableCell>
                                    <TableCell align="left">1:00</TableCell>
                                    <TableCell align="left">1:00</TableCell>
                                    <TableCell align="left">1:00</TableCell>
                                    <TableCell align="left">1:00</TableCell>
                                    <TableCell align="left">1:00</TableCell>
                                    <TableCell align="left">1:00</TableCell>
                                    <TableCell align="left">1:00</TableCell>
                                    <TableCell align="left">1:00</TableCell>
                                    <TableCell align="left">1:00</TableCell>
                                    <TableCell align="left">1:00</TableCell>
                                    <TableCell align="left">1:00</TableCell>
                                    <TableCell align="left">1:00</TableCell>
                                    <TableCell align="left">1:00</TableCell>
                                    <TableCell align="left">1:00</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left">Time block #3</TableCell>
                                    <TableCell align="left">1:00</TableCell>
                                    <TableCell align="left">1:00</TableCell>
                                    <TableCell align="left">1:00</TableCell>
                                    <TableCell align="left">1:00</TableCell>
                                    <TableCell align="left">1:00</TableCell>
                                    <TableCell align="left">1:00</TableCell>
                                    <TableCell align="left">1:00</TableCell>
                                    <TableCell align="left">1:00</TableCell>
                                    <TableCell align="left">1:00</TableCell>
                                    <TableCell align="left">1:00</TableCell>
                                    <TableCell align="left">1:00</TableCell>
                                    <TableCell align="left">1:00</TableCell>
                                    <TableCell align="left">1:00</TableCell>
                                    <TableCell align="left">1:00</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="right" colSpan="15">
                                        <Button variant="contained" color="primary">Save Attendance</Button>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(ListHeader);