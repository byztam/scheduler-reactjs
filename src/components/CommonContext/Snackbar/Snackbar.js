import React, { Component } from 'react';
import { Snackbar } from '@material-ui/core';
import Alert  from '@material-ui/lab/Alert'

class SnackbarCM extends Component {
    render () {
        const { property } = this.props;
        return (
            <Snackbar
                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                    open={property.visible} 
                    autoHideDuration={property.duration} 
                    onClose={this.props.handleCloseAlert}
                >
                    <Alert onClose={this.props.handleCloseAlert} variant="filled" severity={property.severity}>
                        {property.message}
                    </Alert>
                </Snackbar>
        );
    }
}

export default SnackbarCM;