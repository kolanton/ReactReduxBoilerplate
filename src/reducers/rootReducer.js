import {combineReducers} from 'redux';  
import home from './homeReducer';

const rootReducer = combineReducers({  
  // short hand property names
  home
});

export default rootReducer; 