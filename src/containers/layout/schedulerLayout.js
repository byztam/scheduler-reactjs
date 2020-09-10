import React, { Component } from 'react';
import Header from './../../components/commons/header';
import Sidebar from './../../components/commons/sidebar';
import { withStyles } from '@material-ui/core';

import styles from './styles/schedulerLayoutStyle';

import Index from './../scheduler';

class SchedulerLayout extends Component {
    constructor(props){
        super(props);
        this.state = {
            isOpenSidebar: false
        }
    }
    toggleSidebar = () => {
        this.setState({ isOpenSidebar: !this.state.isOpenSidebar });
    };

    render(){
        const { classes } = this.props;
        
        return (
            <div className={classes.root}>
                <Header handleClick={this.toggleSidebar} isOpenSidebar={this.state.isOpenSidebar} />
                <Sidebar handleClick={this.toggleSidebar} isOpenSidebar={this.state.isOpenSidebar}/>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <Index/>
                </main>
            </div>
        );
    }
}

export default withStyles(styles)(SchedulerLayout);