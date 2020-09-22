import React, { Component } from 'react';import {
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@material-ui/core';
import styles from './AttendanceWork.style';

import { withStyles } from '@material-ui/core';

const Header = withStyles(styles)(class Header extends Component {
    render() {
        const { classes } = this.props;
        return (
            <TableHead>
                <TableRow>
                    <TableCell padding="none" align="center" style={{width: "130px"}} className={classes.clearStyleCell}></TableCell>
                    <TableCell padding="none" colSpan="2" align="center" className={`${classes.locked} ${classes.clearStyleCell}`}>Locked</TableCell>
                    <TableCell padding="none" colSpan="2" align="center" className={`${classes.open} ${classes.clearStyleCell}`}>Open</TableCell>
                    <TableCell padding="none" colSpan="2" align="center" className={`${classes.open} ${classes.clearStyleCell}`}>Open</TableCell>
                    <TableCell padding="none" colSpan="2" align="center" className={`${classes.open} ${classes.clearStyleCell}`}>Open</TableCell>
                    <TableCell padding="none" colSpan="2" align="center" className={`${classes.open} ${classes.clearStyleCell}`}>Open</TableCell>
                    <TableCell padding="none" colSpan="2" align="center" className={`${classes.open} ${classes.clearStyleCell}`}>Open</TableCell>
                    <TableCell padding="none" colSpan="2" align="center" className={`${classes.open} ${classes.clearStyleCell}`}>Open</TableCell>
                    <TableCell padding="none" align="center" className={classes.clearStyleCell}></TableCell>
                    <TableCell padding="none" align="center" className={classes.clearStyleCell}></TableCell>
                </TableRow>
                <TableRow className={classes.bgHeader}>
                    <TableCell padding="none" rowSpan="2" align="center">SUMMARY</TableCell>
                    <TableCell padding="none" colSpan="2" align="center" className={classes.bgHeader2}>MON</TableCell>
                    <TableCell padding="none" colSpan="2" align="center" className={classes.bgHeader2}>TUE</TableCell>
                    <TableCell padding="none" colSpan="2" align="center" className={classes.bgHeader2}>WED</TableCell>
                    <TableCell padding="none" colSpan="2" align="center" className={classes.bgHeader2}>THU</TableCell>
                    <TableCell padding="none" colSpan="2" align="center" className={classes.bgHeader2}>FRI</TableCell>
                    <TableCell padding="none" colSpan="2" align="center" className={classes.bgHeader2}>SAT</TableCell>
                    <TableCell padding="none" colSpan="2" align="center" className={classes.bgHeader2}>SUN</TableCell>
                    <TableCell padding="none" align="center" rowSpan="2" className={classes.total}>TOTAL</TableCell>
                    <TableCell padding="none" align="center" rowSpan="2" className={classes.des}>DESCRIPTION</TableCell>
                </TableRow>
                <TableRow className={classes.bgHeader}>
                    <TableCell padding="none" colSpan="2" align="center">Wroking day</TableCell>
                    <TableCell padding="none" colSpan="2" align="center">Wroking day</TableCell>
                    <TableCell padding="none" colSpan="2" align="center">Holiday</TableCell>
                    <TableCell padding="none" colSpan="2" align="center">Wroking day</TableCell>
                    <TableCell padding="none" colSpan="2" align="center">Wroking day</TableCell>
                    <TableCell padding="none" colSpan="2" align="center">Day-off</TableCell>
                    <TableCell padding="none" colSpan="2" align="center">Day-off</TableCell>
                </TableRow>
            </TableHead>
        );
    }
});

const Body = withStyles(styles)(class Body extends Component {
    render() {
        const { classes } = this.props;
        return (
            <TableBody>
                <TableRow className={classes.bgHeader}>
                    <TableCell variant="head" padding="none" align="left">Wroking hours</TableCell>
                    <TableCell padding="none" colSpan="2" align="center">8h/day</TableCell>
                    <TableCell padding="none" colSpan="2" align="center">8h/day</TableCell>
                    <TableCell padding="none" colSpan="2" align="center">8h/day</TableCell>
                    <TableCell padding="none" colSpan="2" align="center">8h/day</TableCell>
                    <TableCell padding="none" colSpan="2" align="center">8h/day</TableCell>
                    <TableCell padding="none" colSpan="2" align="center">8h/day</TableCell>
                    <TableCell padding="none" colSpan="2" align="center">8h/day</TableCell>
                    <TableCell padding="none" align="center" className={classes.total}>40:00</TableCell>
                    <TableCell padding="none" align="center"></TableCell>
                </TableRow>
                <TableRow className={classes.bgHeader1}>
                    <TableCell variant="head" padding="none" align="left">Attendance hours</TableCell>
                    <TableCell padding="none" colSpan="2" align="center">8h/day</TableCell>
                    <TableCell padding="none" colSpan="2" align="center">8h/day</TableCell>
                    <TableCell padding="none" colSpan="2" align="center">8h/day</TableCell>
                    <TableCell padding="none" colSpan="2" align="center">8h/day</TableCell>
                    <TableCell padding="none" colSpan="2" align="center">8h/day</TableCell>
                    <TableCell padding="none" colSpan="2" align="center">8h/day</TableCell>
                    <TableCell padding="none" colSpan="2" align="center">8h/day</TableCell>
                    <TableCell padding="none" align="center" className={classes.total}>30:00</TableCell>
                    <TableCell padding="none" align="left"></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell padding="none"></TableCell>
                    <TableCell padding="none" colSpan="2" align="center" className={classes.nomarl}>Nomarl</TableCell>
                    <TableCell padding="none" colSpan="2" align="center" className={classes.nomarl}>Nomarl</TableCell>
                    <TableCell padding="none" colSpan="2" align="center" className={classes.nomarl}>Nomarl</TableCell>
                    <TableCell padding="none" colSpan="2" align="center" className={classes.nomarl}>Nomarl</TableCell>
                    <TableCell padding="none" colSpan="2" align="center" className={classes.nomarl}>Nomarl</TableCell>
                    <TableCell padding="none" colSpan="2" align="center" className={classes.nomarl}>Nomarl</TableCell>
                    <TableCell padding="none" colSpan="2" align="center" className={classes.nomarl}>Nomarl</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell padding="none"></TableCell>
                    <TableCell padding="none" colSpan="2"></TableCell>
                    <TableCell padding="none" colSpan="2"></TableCell>
                    <TableCell padding="none" colSpan="2"></TableCell>
                    <TableCell padding="none" colSpan="2"></TableCell>
                    <TableCell padding="none" colSpan="2"></TableCell>
                    <TableCell padding="none" colSpan="2"></TableCell>
                    <TableCell padding="none" colSpan="2"></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell padding="none">Detail to work</TableCell>
                    <TableCell padding="none" colSpan="2" align="center">8:00</TableCell>
                    <TableCell padding="none" colSpan="2" align="center">8:00</TableCell>
                    <TableCell padding="none" colSpan="2" align="center">8:00</TableCell>
                    <TableCell padding="none" colSpan="2" align="center">8:00</TableCell>
                    <TableCell padding="none" colSpan="2" align="center">8:00</TableCell>
                    <TableCell padding="none" colSpan="2" align="center">8:00</TableCell>
                    <TableCell padding="none" colSpan="2" align="center">8:00</TableCell>
                    <TableCell padding="none" align="center" className={classes.total}>8:00</TableCell>
                    <TableCell padding="none" align="left"></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell padding="none">Detail to attendance</TableCell>
                    <TableCell padding="none" colSpan="2" align="center">8:00</TableCell>
                    <TableCell padding="none" colSpan="2" align="center">8:00</TableCell>
                    <TableCell padding="none" colSpan="2" align="center">8:00</TableCell>
                    <TableCell padding="none" colSpan="2" align="center">8:00</TableCell>
                    <TableCell padding="none" colSpan="2" align="center">8:00</TableCell>
                    <TableCell padding="none" colSpan="2" align="center">8:00</TableCell>
                    <TableCell padding="none" colSpan="2" align="center">8:00</TableCell>
                    <TableCell padding="none" align="center" className={classes.total}>8:00</TableCell>
                    <TableCell padding="none" align="left"></TableCell>
                </TableRow>
            </TableBody>
        );
    }
});

export {
    Header,
    Body
};