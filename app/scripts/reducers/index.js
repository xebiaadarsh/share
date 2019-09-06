import { combineReducers } from 'redux';
import searchReducer from '../container/reducer'

export default combineReducers({
   item:  searchReducer
});