import counterReducer from './counter';
import loggedReducer from './isLogged';
import { combineReducers } from 'redux';

const reducerGod = combineReducers({
    counter: counterReducer,
    loggedIn: loggedReducer
})

export default reducerGod;