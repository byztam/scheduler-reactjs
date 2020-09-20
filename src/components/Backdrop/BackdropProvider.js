import React, { Component } from 'react';
import BackdorContext from './../../contexts/BackdorContext';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    handleClose = () => {
        this.setState({
            isOpen: false
        });
    }

    handleOpen = () => {
        this.setState({
            isOpen: true
        });
    }

    render() {
        return (
            <BackdorContext.Provider value={{
                isOpen: this.state.isOpen,
                handleClose: this.handleClose,
                handleOpen: this.handleOpen
            }}>
                { this.props.children }
            </BackdorContext.Provider>
        )
    }
}