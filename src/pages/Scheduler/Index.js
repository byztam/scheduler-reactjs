import React, { Component } from 'react';
import {
    withStyles,
    Table,
    TableContainer,
    Grid,
    Snackbar
} from '@material-ui/core';
import Alert  from '@material-ui/lab/Alert'
import * as AttendanceWork from './AttendanceWork/AttendanceWork';
import * as Timeblock from './Timeblock/Timeblock';
import * as Work from './Work/Work';
import SchedulerLayout from '../../layouts/SchedulerLayout';
import styles from './Index.style';
import BackdropProvider from './../../components/Backdrop/BackdropProvider';

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
                <BackdropProvider>
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
                </BackdropProvider>
                <Snackbar
                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                    open={this.state.isOpenAlert} 
                    autoHideDuration={6000} 
                    onClose={this.handleAlert}
                >
                    <Alert  onClose={this.handleAlert} variant="filled" severity="success">
                        This is a success message!
                    </Alert>
                </Snackbar>
            </SchedulerLayout>
        );
    }
}

export default withStyles(styles)(Home);