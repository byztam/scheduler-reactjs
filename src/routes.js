import React from 'react';
import Login from './pages/Login/Login';
import Scheduler from './pages/Scheduler/Scheduler';

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