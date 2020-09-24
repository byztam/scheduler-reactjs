import React, { Component } from 'react';
import { 
    withStyles,
    Backdrop,
    CircularProgress,
} from '@material-ui/core';
import styles from './Backdrop.style.js';

class BackdropCM extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Backdrop className={classes.backdrop} open={this.props.isOpen}>
                <CircularProgress color="inherit" />
            </Backdrop>
        );
    }
}

export default withStyles(styles)(BackdropCM);