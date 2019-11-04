import {combineReducers} from 'redux';
import * as loggedOut from './loggeOut';

export default combineReducers(Object.assign({
    loggedOut,
}
));