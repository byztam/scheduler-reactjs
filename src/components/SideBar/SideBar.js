import React, { Component } from 'react';
import clsx from 'clsx';
import { 
    withStyles, 
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    IconButton,
    Divider,

} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import styles from './SideBar.style';


class SideBar extends Component {
    
    render() {
        
        const { classes } = this.props;
        
        return (
            <Drawer 
                variant="permanent"
                className={
                    clsx(classes.drawer, {
                        [classes.drawerOpen]: this.props.isOpenSidebar,
                        [classes.drawerClose]: !this.props.isOpenSidebar,
                    })
                }
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: this.props.isOpenSidebar,
                        [classes.drawerClose]: !this.props.isOpenSidebar,
                    },
                    classes.paper)
                }}
            >
                <div className={classes.toolbar}>
                <IconButton onClick={this.props.handleClick}>
                    <ChevronLeftIcon />
                </IconButton>
                </div>
                <Divider classes={{root: classes.dividerColor}}/>
                <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon color="primary" /> : <MailIcon color="primary" />}</ListItemIcon>
                    <ListItemText primary={text} classes={{primary:classes.listItemText}}/>
                    </ListItem>
                ))}
                </List>
                <Divider classes={{root: classes.dividerColor}}/>
                <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon color="primary"/> : <MailIcon color="primary"/>}</ListItemIcon>
                    <ListItemText primary={text} classes={{primary:classes.listItemText}}/>
                    </ListItem>
                ))}
                </List>
            </Drawer>
        );
    }
}

export default (withStyles(styles)(SideBar));