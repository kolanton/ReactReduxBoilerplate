import * as types from '../actions/actionTypes';  
import initialState from './initialState';

export default function homeReducer(state = initialState.home, action) {  
  switch(action.type) {
    case types.LOAD_HOME:
      return Object.assign({},action.home);
    default: 
      return state;
  }
}