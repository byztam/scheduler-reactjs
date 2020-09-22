import React, { Component } from 'react';
import Header from './../components/Header/Header';
import Sidebar from './../components/SideBar/SideBar';
import { withStyles } from '@material-ui/core';

import styles from './SchedulerLayout.style';

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
        const { children } = this.props;
        
        return (
            <div className={classes.root}>
                <Sidebar handleClick={this.toggleSidebar} isOpenSidebar={this.state.isOpenSidebar}/>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    {children}
                </main>
            </div>
        );
    }
}

export default withStyles(styles)(SchedulerLayout);