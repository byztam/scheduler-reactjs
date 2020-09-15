import React from 'react';
import Login from './containers/login';
import Scheduler from './containers/layout/scheduler';

const Routes = [
    {
        path: '/',
        exact: true,
        content: () => <Login/>
    },
    {
        path: '/scheduler',
        exact: true,
        content: () => <Scheduler/>
    }
]

export default Routes;