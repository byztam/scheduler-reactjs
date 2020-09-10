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

import styles from './styles/sidebarStyle';


class Sidebar extends Component {
    
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
                    })
                }}
            >
                <div className={classes.toolbar}>
                <IconButton onClick={this.props.handleClick}>
                    <ChevronLeftIcon />
                </IconButton>
                </div>
                <Divider />
                <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                    </ListItem>
                ))}
                </List>
                <Divider />
                <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                    </ListItem>
                ))}
                </List>
            </Drawer>
        );
    }
}

export default (withStyles(styles)(Sidebar));