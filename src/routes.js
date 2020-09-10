import React from 'react';
import Login from './containers/login';
import Scheduler from './containers/layout/schedulerLayout';

import packageConfig from './../package.json';

const Routes = [
    {
        path: `/${packageConfig.name}`,
        exact: true,
        content: () => <Login/>
    },
    {
        path: `/${packageConfig.name}/scheduler`,
        exact: true,
        content: () => <Scheduler/>
    }
]

export default Routes;