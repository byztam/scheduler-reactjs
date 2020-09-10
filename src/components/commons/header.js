import React, { Component } from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { 
    AppBar, 
    Toolbar, 
    Typography, 
    IconButton,
    Badge } from '@material-ui/core';
import * as Icon from '@material-ui/icons';

import styles from './styles/headerStyle'; 

class Header extends Component {
    render(){
        
        const { classes } = this.props;

        return (
            <AppBar
                position="fixed"
                className={
                    clsx(classes.appBar, {
                        [classes.appBarShift]: this.props.isOpenSidebar,
                    })
                }
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={this.props.handleClick}
                        edge="start"
                        className={
                            clsx(classes.menuButton, {
                                [classes.hide]: this.props.isOpenSidebar,
                            })
                        }
                    >
                        <Icon.Menu />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Scheduler
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}></div>
                    <IconButton aria-label="show 17 new notifications" color="inherit">
                        <Badge badgeContent={17} color="secondary">
                            <Icon.Notifications />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
        );
    }
}

export default withStyles(styles)(Header);