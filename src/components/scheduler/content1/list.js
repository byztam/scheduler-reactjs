import React, { Component } from 'react';import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Grid,
    Paper
} from '@material-ui/core';
import styles from './styles/listStyle';

import { withStyles } from '@material-ui/core';

class ListHeader extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Grid container>
                <Grid item lg={12}>
                    <TableContainer component={Paper}>
                        <Table className={classes.table}  size="small" aria-label="caption table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center"></TableCell>
                                    <TableCell align="center">Locked</TableCell>
                                    <TableCell align="center">Open</TableCell>
                                    <TableCell align="center">Open</TableCell>
                                    <TableCell align="center">Open</TableCell>
                                    <TableCell align="center">Open</TableCell>
                                    <TableCell align="center">Open</TableCell>
                                    <TableCell align="center">Open</TableCell>
                                    <TableCell align="center"></TableCell>
                                    <TableCell align="center"></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell rowSpan="2" align="center">SUMMARY</TableCell>
                                    <TableCell align="center">MON</TableCell>
                                    <TableCell align="center">TUE</TableCell>
                                    <TableCell align="center">WED</TableCell>
                                    <TableCell align="center">THU</TableCell>
                                    <TableCell align="center">FRI</TableCell>
                                    <TableCell align="center">SAT</TableCell>
                                    <TableCell align="center">SUN</TableCell>
                                    <TableCell align="center" rowSpan="2" className={classes.total}>TOTAL</TableCell>
                                    <TableCell align="center" rowSpan="2" className={classes.des}>DESCRIPTION</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center">Wroking day</TableCell>
                                    <TableCell align="center">Wroking day</TableCell>
                                    <TableCell align="center">Holiday</TableCell>
                                    <TableCell align="center">Wroking day</TableCell>
                                    <TableCell align="center">Wroking day</TableCell>
                                    <TableCell align="center">Day-off</TableCell>
                                    <TableCell align="center">Day-off</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell align="left">Wroking hours</TableCell>
                                    <TableCell align="center">8h/day</TableCell>
                                    <TableCell align="center">8h/day</TableCell>
                                    <TableCell align="center">8h/day</TableCell>
                                    <TableCell align="center">8h/day</TableCell>
                                    <TableCell align="center">8h/day</TableCell>
                                    <TableCell align="center">8h/day</TableCell>
                                    <TableCell align="center">8h/day</TableCell>
                                    <TableCell align="center" className={classes.total}>40:00</TableCell>
                                    <TableCell align="center"></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left">Attendance hours</TableCell>
                                    <TableCell align="center">8h/day</TableCell>
                                    <TableCell align="center">8h/day</TableCell>
                                    <TableCell align="center">8h/day</TableCell>
                                    <TableCell align="center">8h/day</TableCell>
                                    <TableCell align="center">8h/day</TableCell>
                                    <TableCell align="center">8h/day</TableCell>
                                    <TableCell align="center">8h/day</TableCell>
                                    <TableCell align="center" className={classes.total}>30:00</TableCell>
                                    <TableCell align="left"></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell align="center">Nomarl</TableCell>
                                    <TableCell align="center">Nomarl</TableCell>
                                    <TableCell align="center">Nomarl</TableCell>
                                    <TableCell align="center">Nomarl</TableCell>
                                    <TableCell align="center">Nomarl</TableCell>
                                    <TableCell align="center">Nomarl</TableCell>
                                    <TableCell align="center">Nomarl</TableCell>
                                    <TableCell rowSpan="2" className={classes.total}></TableCell>
                                    <TableCell rowSpan="2"></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Delta to work</TableCell>
                                    <TableCell align="center">8:00</TableCell>
                                    <TableCell align="center">8:00</TableCell>
                                    <TableCell align="center">8:00</TableCell>
                                    <TableCell align="center">8:00</TableCell>
                                    <TableCell align="center">8:00</TableCell>
                                    <TableCell align="center">8:00</TableCell>
                                    <TableCell align="center">8:00</TableCell>
                                    <TableCell align="center" className={classes.total}>8:00</TableCell>
                                    <TableCell align="left"></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Delta to attendance</TableCell>
                                    <TableCell align="center">8:00</TableCell>
                                    <TableCell align="center">8:00</TableCell>
                                    <TableCell align="center">8:00</TableCell>
                                    <TableCell align="center">8:00</TableCell>
                                    <TableCell align="center">8:00</TableCell>
                                    <TableCell align="center">8:00</TableCell>
                                    <TableCell align="center">8:00</TableCell>
                                    <TableCell align="center" className={classes.total}>8:00</TableCell>
                                    <TableCell align="left"></TableCell>
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