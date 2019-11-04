import createReducers from '../helpers/createReducers';
import * as types  from '../actions/types';

export const loggedInStatus = createReducers({},{
    [types.SET_LOGGED_IN_STATE](state,action){
        return action
    }
})