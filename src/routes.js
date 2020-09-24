import React from 'react';
import Login from './pages/Login/Index';
import Scheduler from './pages/Scheduler/Index';

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