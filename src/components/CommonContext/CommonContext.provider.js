import React, { Component } from 'react';
import BackdorContext from '../../contexts/CommonContext';
import Backdrop from './Backdrop/Backdrop';
import Snackbar from './Snackbar/Snackbar';


export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backdropVisible: false,
            snackbar: {
                visible: false,
                message: '',
                severity: 'success',
                duration: 1000
            }
        }
    }

    Backdrop = (visible) => {
        this.setState({
            backdropVisible: (visible === 'show')
        });
    }

    Snackbar = (message, severity, duration) => {
        this.setState({
            snackbar: {
                visible: true,
                message: message,
                severity: severity,
                duration: duration
            }
        });
    }

    CloseAlert = () => {
        this.setState({
            snackbar: {
                visible: false
            }
        });
    }

    render() {
        return (
            <BackdorContext.Provider value={{
                Backdrop: this.Backdrop,
                Snackbar: this.Snackbar
            }}>
                { this.props.children }
                <Backdrop isOpen={this.state.backdropVisible} />
                <Snackbar property={this.state.snackbar} handleCloseAlert={this.CloseAlert} />
            </BackdorContext.Provider>
        )
    }
}