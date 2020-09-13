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
                                    <TableCell padding="none" align="center" style={{width: "150px"}}></TableCell>
                                    <TableCell padding="none" align="center" className={classes.locked}>Locked</TableCell>
                                    <TableCell padding="none" align="center" className={classes.open}>Open</TableCell>
                                    <TableCell padding="none" align="center" className={classes.open}>Open</TableCell>
                                    <TableCell padding="none" align="center" className={classes.open}>Open</TableCell>
                                    <TableCell padding="none" align="center" className={classes.open}>Open</TableCell>
                                    <TableCell padding="none" align="center" className={classes.open}>Open</TableCell>
                                    <TableCell padding="none" align="center" className={classes.open}>Open</TableCell>
                                    <TableCell padding="none" align="center"></TableCell>
                                    <TableCell padding="none" align="center"></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell padding="none" rowSpan="2" align="center">SUMMARY</TableCell>
                                    <TableCell padding="none" align="center">MON</TableCell>
                                    <TableCell padding="none" align="center">TUE</TableCell>
                                    <TableCell padding="none" align="center">WED</TableCell>
                                    <TableCell padding="none" align="center">THU</TableCell>
                                    <TableCell padding="none" align="center">FRI</TableCell>
                                    <TableCell padding="none" align="center">SAT</TableCell>
                                    <TableCell padding="none" align="center">SUN</TableCell>
                                    <TableCell padding="none" align="center" rowSpan="2" className={classes.total}>TOTAL</TableCell>
                                    <TableCell padding="none" align="center" rowSpan="2" className={classes.des}>DESCRIPTION</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell padding="none" align="center">Wroking day</TableCell>
                                    <TableCell padding="none" align="center">Wroking day</TableCell>
                                    <TableCell padding="none" align="center">Holiday</TableCell>
                                    <TableCell padding="none" align="center">Wroking day</TableCell>
                                    <TableCell padding="none" align="center">Wroking day</TableCell>
                                    <TableCell padding="none" align="center">Day-off</TableCell>
                                    <TableCell padding="none" align="center">Day-off</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell variant="head" padding="none" align="left">Wroking hours</TableCell>
                                    <TableCell padding="none" align="center">8h/day</TableCell>
                                    <TableCell padding="none" align="center">8h/day</TableCell>
                                    <TableCell padding="none" align="center">8h/day</TableCell>
                                    <TableCell padding="none" align="center">8h/day</TableCell>
                                    <TableCell padding="none" align="center">8h/day</TableCell>
                                    <TableCell padding="none" align="center">8h/day</TableCell>
                                    <TableCell padding="none" align="center">8h/day</TableCell>
                                    <TableCell padding="none" align="center" className={classes.total}>40:00</TableCell>
                                    <TableCell padding="none" align="center"></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell variant="head" padding="none" align="left">Attendance hours</TableCell>
                                    <TableCell padding="none" align="center">8h/day</TableCell>
                                    <TableCell padding="none" align="center">8h/day</TableCell>
                                    <TableCell padding="none" align="center">8h/day</TableCell>
                                    <TableCell padding="none" align="center">8h/day</TableCell>
                                    <TableCell padding="none" align="center">8h/day</TableCell>
                                    <TableCell padding="none" align="center">8h/day</TableCell>
                                    <TableCell padding="none" align="center">8h/day</TableCell>
                                    <TableCell padding="none" align="center" className={classes.total}>30:00</TableCell>
                                    <TableCell padding="none" align="left"></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell padding="none"></TableCell>
                                    <TableCell padding="none" align="center" className={classes.nomarl}>Nomarl</TableCell>
                                    <TableCell padding="none" align="center" className={classes.nomarl}>Nomarl</TableCell>
                                    <TableCell padding="none" align="center" className={classes.nomarl}>Nomarl</TableCell>
                                    <TableCell padding="none" align="center" className={classes.nomarl}>Nomarl</TableCell>
                                    <TableCell padding="none" align="center" className={classes.nomarl}>Nomarl</TableCell>
                                    <TableCell padding="none" align="center" className={classes.nomarl}>Nomarl</TableCell>
                                    <TableCell padding="none" align="center" className={classes.nomarl}>Nomarl</TableCell>
                                    <TableCell padding="none" rowSpan="2" className={classes.total}></TableCell>
                                    <TableCell padding="none" rowSpan="2"></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell padding="none"></TableCell>
                                    <TableCell padding="none"></TableCell>
                                    <TableCell padding="none"></TableCell>
                                    <TableCell padding="none"></TableCell>
                                    <TableCell padding="none"></TableCell>
                                    <TableCell padding="none"></TableCell>
                                    <TableCell padding="none"></TableCell>
                                    <TableCell padding="none"></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell padding="none">Delta to work</TableCell>
                                    <TableCell padding="none" align="center">8:00</TableCell>
                                    <TableCell padding="none" align="center">8:00</TableCell>
                                    <TableCell padding="none" align="center">8:00</TableCell>
                                    <TableCell padding="none" align="center">8:00</TableCell>
                                    <TableCell padding="none" align="center">8:00</TableCell>
                                    <TableCell padding="none" align="center">8:00</TableCell>
                                    <TableCell padding="none" align="center">8:00</TableCell>
                                    <TableCell padding="none" align="center" className={classes.total}>8:00</TableCell>
                                    <TableCell padding="none" align="left"></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell padding="none">Delta to attendance</TableCell>
                                    <TableCell padding="none" align="center">8:00</TableCell>
                                    <TableCell padding="none" align="center">8:00</TableCell>
                                    <TableCell padding="none" align="center">8:00</TableCell>
                                    <TableCell padding="none" align="center">8:00</TableCell>
                                    <TableCell padding="none" align="center">8:00</TableCell>
                                    <TableCell padding="none" align="center">8:00</TableCell>
                                    <TableCell padding="none" align="center">8:00</TableCell>
                                    <TableCell padding="none" align="center" className={classes.total}>8:00</TableCell>
                                    <TableCell padding="none" align="left"></TableCell>
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