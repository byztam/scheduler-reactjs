import React, { Component } from 'react';
import {
    withStyles,
    Table,
    TableContainer,
    Grid,
} from '@material-ui/core';
import * as AttendanceWork from './AttendanceWork/AttendanceWork';
import * as Timeblock from './Timeblock/Timeblock';
import * as Work from './Work/Work';
import SchedulerLayout from '../../layouts/SchedulerLayout';
import styles from './Index.style';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            isOpenAlert: true,
            isOpenBackdrop: true
        }
    }
    handleAlert = () => {
        this.setState({
            isOpenAlert: !this.state.isOpenAlert,
        });
    }

    handleBackdrop = () => {
        this.setState({
            isOpenBackdrop: !this.state.isOpenBackdrop,
        });
    }
    render(){
        const { classes } = this.props;
        return (
            <SchedulerLayout>
                <Grid container>
                    <Grid item lg={12}>
                        <TableContainer>
                            <Table className={classes.table}  size="small" aria-label="caption table">
                                <AttendanceWork.Header/>
                                <AttendanceWork.Body/>

                                <Timeblock.Header/>
                                <Timeblock.Body/>
                                
                                <Work.Header/>
                                <Work.Body/>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </SchedulerLayout>
        );
    }
}

export default withStyles(styles)(Home);