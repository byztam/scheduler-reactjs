import * as ActionTypes from './actionTypes';
export const userInfo = (data) => {
    return {
        type: ActionTypes.USER_INFO,
        data: data
    }
};