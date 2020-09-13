import { combineReducers } from 'redux';

import userInfo from './userInfo';

const appReducer = combineReducers({
    userInfo
});

export default appReducer;