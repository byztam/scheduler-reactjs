import React, { Component } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Grid,
    Paper,
    Button
} from '@material-ui/core';
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
                                    <TableCell padding="none" rowSpan="2" align="center" style={{width: "150px"}}>SUMMARY</TableCell>
                                    <TableCell padding="none" colSpan="2" align="center">MON</TableCell>
                                    <TableCell padding="none" colSpan="2" align="center">TUE</TableCell>
                                    <TableCell padding="none" colSpan="2" align="center">WED</TableCell>
                                    <TableCell padding="none" colSpan="2" align="center">THU</TableCell>
                                    <TableCell padding="none" colSpan="2" align="center">FRI</TableCell>
                                    <TableCell padding="none" colSpan="2" align="center">SAT</TableCell>
                                    <TableCell padding="none" colSpan="2" align="center">SUN</TableCell>
                                    <TableCell padding="none" align="center" rowSpan="2" className={classes.total}></TableCell>
                                    <TableCell padding="none" align="center" rowSpan="2" className={classes.des}></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell padding="none" align="left" className={classes.nomarl}>from</TableCell>
                                    <TableCell padding="none" align="left" className={classes.nomarl}>till</TableCell>
                                    <TableCell padding="none" align="left" className={classes.nomarl}>from</TableCell>
                                    <TableCell padding="none" align="left" className={classes.nomarl}>till</TableCell>
                                    <TableCell padding="none" align="left" className={classes.nomarl}>from</TableCell>
                                    <TableCell padding="none" align="left" className={classes.nomarl}>till</TableCell>
                                    <TableCell padding="none" align="left" className={classes.nomarl}>from</TableCell>
                                    <TableCell padding="none" align="left" className={classes.nomarl}>till</TableCell>
                                    <TableCell padding="none" align="left" className={classes.nomarl}>from</TableCell>
                                    <TableCell padding="none" align="left" className={classes.nomarl}>till</TableCell>
                                    <TableCell padding="none" align="left" className={classes.nomarl}>from</TableCell>
                                    <TableCell padding="none" align="left" className={classes.nomarl}>till</TableCell>
                                    <TableCell padding="none" align="left" className={classes.nomarl}>from</TableCell>
                                    <TableCell padding="none" align="left" className={classes.nomarl}>till</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell padding="none" align="left">Time block <span className={classes.timeblock}>#1</span></TableCell>
                                    <TableCell padding="none" align="left">1:00</TableCell>
                                    <TableCell padding="none" align="left">1:00</TableCell>
                                    <TableCell padding="none" align="left">1:00</TableCell>
                                    <TableCell padding="none" align="left">1:00</TableCell>
                                    <TableCell padding="none" align="left">1:00</TableCell>
                                    <TableCell padding="none" align="left">1:00</TableCell>
                                    <TableCell padding="none" align="left">1:00</TableCell>
                                    <TableCell padding="none" align="left">1:00</TableCell>
                                    <TableCell padding="none" align="left">1:00</TableCell>
                                    <TableCell padding="none" align="left">1:00</TableCell>
                                    <TableCell padding="none" align="left">1:00</TableCell>
                                    <TableCell padding="none" align="left">1:00</TableCell>
                                    <TableCell padding="none" align="left">1:00</TableCell>
                                    <TableCell padding="none" align="left">1:00</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell padding="none" align="left">Time block <span className={classes.timeblock}>#2</span></TableCell>
                                    <TableCell padding="none" align="left">1:00</TableCell>
                                    <TableCell padding="none" align="left">1:00</TableCell>
                                    <TableCell padding="none" align="left">1:00</TableCell>
                                    <TableCell padding="none" align="left">1:00</TableCell>
                                    <TableCell padding="none" align="left">1:00</TableCell>
                                    <TableCell padding="none" align="left">1:00</TableCell>
                                    <TableCell padding="none" align="left">1:00</TableCell>
                                    <TableCell padding="none" align="left">1:00</TableCell>
                                    <TableCell padding="none" align="left">1:00</TableCell>
                                    <TableCell padding="none" align="left">1:00</TableCell>
                                    <TableCell padding="none" align="left">1:00</TableCell>
                                    <TableCell padding="none" align="left">1:00</TableCell>
                                    <TableCell padding="none" align="left">1:00</TableCell>
                                    <TableCell padding="none" align="left">1:00</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell padding="none" align="left">Time block <span className={classes.timeblock}>#3</span></TableCell>
                                    <TableCell padding="none" align="left">1:00</TableCell>
                                    <TableCell padding="none" align="left">1:00</TableCell>
                                    <TableCell padding="none" align="left">1:00</TableCell>
                                    <TableCell padding="none" align="left">1:00</TableCell>
                                    <TableCell padding="none" align="left">1:00</TableCell>
                                    <TableCell padding="none" align="left">1:00</TableCell>
                                    <TableCell padding="none" align="left">1:00</TableCell>
                                    <TableCell padding="none" align="left">1:00</TableCell>
                                    <TableCell padding="none" align="left">1:00</TableCell>
                                    <TableCell padding="none" align="left">1:00</TableCell>
                                    <TableCell padding="none" align="left">1:00</TableCell>
                                    <TableCell padding="none" align="left">1:00</TableCell>
                                    <TableCell padding="none" align="left">1:00</TableCell>
                                    <TableCell padding="none" align="left">1:00</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell padding="none" align="right" colSpan="15" className={classes.tdSaveAttendance}>
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