import * as ActionTypes from './../actions/actionTypes';
import userInfoModel from './../stateModels/userInfo';

var myReducer = (state = userInfoModel, action) => {
    switch(action.type){
        case ActionTypes.USER_INFO:
            state = action.data;
            break;
        default: 
            return state;
    }

    return state;
}

export default myReducer;