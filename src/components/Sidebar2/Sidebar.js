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
import * as Icon from '@material-ui/icons';
import styles from './Sidebar.style';

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
                    })
                }}
            >
                <div className={classes.toolbar}>
                <IconButton onClick={this.props.handleClick}>
                    {this.props.isOpenSidebar ? <Icon.ChevronLeft /> : <Icon.ChevronRight />}
                </IconButton>
                </div>
                <Divider />
                <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <Icon.MoveToInbox /> : <Icon.Mail />}</ListItemIcon>
                    <ListItemText primary={text} />
                    </ListItem>
                ))}
                </List>
                <Divider />
                <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <Icon.MoveToInbox /> : <Icon.Mail />}</ListItemIcon>
                    <ListItemText primary={text} />
                    </ListItem>
                ))}
                </List>
            </Drawer>
        );
    }
}

export default (withStyles(styles)(SideBar));