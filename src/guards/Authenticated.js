import React, { Component } from 'react';
import { Redirect, Route } from 'react-router';
import * as localStore from './../store/localStorages';
class Authenticated extends Component {
    render() {
        const { component: Component, ...rest } = this.props;
        return (
            <Route
                {...rest}
                render={ props => {
                    if(!localStore.get('userInfo')) {
                        return <Redirect to="/"/>
                    }
                    return <Component {...props}/>
                }}
            />
        );
    }
}

export default Authenticated;