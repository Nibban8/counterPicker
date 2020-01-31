import {combineReducers} from 'redux';
import charsReducer from './charsReducer';
import votesReducer from './votesReducer';
import authReducer from './authReducer';


export default combineReducers({
    chars : charsReducer,
    char : charsReducer,
    votes : votesReducer,
    auth : authReducer

});