import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';
import data from './data_reducer';

const rootReducer = combineReducers({form, data});

export default rootReducer;