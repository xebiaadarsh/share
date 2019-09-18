import { combineReducers } from 'redux';
import  { chatReducer }  from '../components/container/reducers';

export default combineReducers({
    chats: chatReducer
});