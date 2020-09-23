import React, { Component } from 'react';
import {
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Button,
    Input
} from '@material-ui/core';
import styles from './Timeblock.style';
import { withStyles } from '@material-ui/core';
import CommonContext from '../../../contexts/CommonContext';

const Header = withStyles(styles)(class Header extends Component {
    render() {
        const { classes } = this.props;
        return (
            <TableHead className={classes.theader}>
                <TableRow style={{height: 50}}></TableRow>
                <TableRow className={classes.bgHeader}>
                    <TableCell padding="none" rowSpan="2" align="center" style={{width: "130px"}}>ATTENDANCE</TableCell>
                    <TableCell padding="none" colSpan="2" align="center" className={classes.bgHeader2}>MON</TableCell>
                    <TableCell padding="none" colSpan="2" align="center" className={classes.bgHeader2}>TUE</TableCell>
                    <TableCell padding="none" colSpan="2" align="center" className={classes.bgHeader2}>WED</TableCell>
                    <TableCell padding="none" colSpan="2" align="center" className={classes.bgHeader2}>THU</TableCell>
                    <TableCell padding="none" colSpan="2" align="center" className={classes.bgHeader2}>FRI</TableCell>
                    <TableCell padding="none" colSpan="2" align="center" className={classes.bgHeader2}>SAT</TableCell>
                    <TableCell padding="none" colSpan="2" align="center" className={classes.bgHeader2}>SUN</TableCell>
                    <TableCell padding="none" className={classes.clearStyleCell}></TableCell>
                    <TableCell padding="none" className={classes.clearStyleCell}></TableCell>
                </TableRow>
                <TableRow className={classes.bgHeader}>
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
        );
    }
});

const Body = withStyles(styles)(class Body extends Component {
    constructor(props){
        super(props);
        this.state = {
            timeBlockData: [
                {
                    name: 'Time block',
                    cellData: ['01:00','01:00','01:00','01:00','01:00','01:00','01:00', '01:00','01:00','01:00','01:00','01:00','01:00','01:00']
                },
                {
                    name: 'Time block',
                    cellData: ['01:00','01:00','01:00','01:00','01:00','01:00','01:00', '01:00','01:00','01:00','01:00','01:00','01:00','01:00']
                },
                {
                    name: 'Time block',
                    cellData: ['01:00','01:00','01:00','01:00','01:00','01:00','01:00', '01:00','01:00','01:00','01:00','01:00','01:00','01:00']
                },
                {
                    name: 'Time block',
                    cellData: ['01:00','01:00','01:00','01:00','01:00','01:00','01:00', '01:00','01:00','01:00','01:00','01:00','01:00','01:00']
                }
            ]
        }
    }

    handleSaveWork = (Backdrop, Snackbar) => {
        Backdrop('show');
        setTimeout(() => {
            Backdrop('hide');
            Snackbar('Save successfully.', 'success', 1000);
        }, 2000);
    }

    render() {
        const { classes } = this.props;
        return (
            <TableBody>
                {
                    this.state.timeBlockData.map((rowData, index) => {
                        return (
                            <TableRow key={index} padding="none" align="left">
                                <TableCell>
                                    {rowData.name}
                                    <span className={classes.timeblock}> #{(index+1)}</span>
                                </TableCell>
                                { 
                                    rowData.cellData.map((data, key) => (
                                        <TableCell key={key} padding="none" align="left">
                                            <Input 
                                                className={classes.cellInput}
                                                fullWidth
                                                defaultValue={data}
                                                disableUnderline={true}
                                            />
                                        </TableCell>
                                    )) 
                                }
                            </TableRow>
                        )
                    })
                }
                <TableRow>
                    <TableCell padding="none" align="right" colSpan="15" className={classes.tdSaveAttendance}>
                        <CommonContext.Consumer>
                            {({ Backdrop, Snackbar }) => 
                                <div>
                                    <Button 
                                        variant="contained" 
                                        color="primary"
                                        onClick={() => {this.handleSaveWork(Backdrop, Snackbar)}}>Save Attendance</Button>
                                </div>
                            }
                        </CommonContext.Consumer>
                    </TableCell>
                </TableRow>
            </TableBody>
        );
    }
});

export {
    Header,
    Body
};