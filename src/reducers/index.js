import counterReducer from './counter';
import loggedReducer from './isLogged';
import { combineReducers } from 'redux';

const reducerGod = combineReducers({
    //state inside counter.js
    counter: counterReducer,
    //state inside isLogged.js
    loggedIn: loggedReducer
})

export default reducerGod;