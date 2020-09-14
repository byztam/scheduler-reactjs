import React, { Component } from 'react';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { 
    AppBar, 
    Toolbar, 
    Typography, 
    IconButton,
    Badge,
    Menu,
    MenuItem } from '@material-ui/core';
import * as Icon from '@material-ui/icons';

import styles from './styles/headerStyle'; 

const menuId = 'primary-search-account-menu';
class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            anchorEl: null,
        }   
    }

    handleProfileMenuOpen = (event) => {
        this.setState({
            anchorEl: event.currentTarget
        });
    };

    handleMenuClose = () => {
        this.setState({
            anchorEl: null
        });
    }

    renderMenu = () => {
        const { anchorEl } = this.state;
        const isMenuOpen = Boolean(anchorEl);
        return (
            <Menu
                anchorEl={anchorEl}
                id={menuId}
                keepMounted
                open={isMenuOpen}
                onClose={this.handleMenuClose}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                }}
            >
                <MenuItem onClick={this.handleMenuClose}>{this.props.todos.FullName}</MenuItem>
                <MenuItem onClick={this.handleMenuClose}>Logout</MenuItem>
            </Menu>
        );
    }


    render(){
        const { classes } = this.props;
        return (
            <div>
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
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={this.handleProfileMenuOpen}
                            color="inherit"
                        >
                            <Icon.AccountCircle />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                {this.renderMenu()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.userInfo
    }
}

export default connect(mapStateToProps, null)(withStyles(styles)(Header));