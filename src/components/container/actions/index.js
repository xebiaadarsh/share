import {GET_CHAT_RESPONSE_SUCCESS,USER_ENTRY} from './types';
import API from '../../../apis/API';

export const getChatResponse = () =>{
    return dispatch =>{
        return API.get('/chatResponse.json')
        .then(response=>{
            dispatch(getChatResponseSuccess(response.data));
        })
    }
}



export const captureUserEntry = (data) =>{
    return dispatch => {
            dispatch({type: USER_ENTRY,payload: {data}});
    }
}

const getChatResponseSuccess = (data) =>{
    return {
        type: GET_CHAT_RESPONSE_SUCCESS,
        payload: {
            data 
        }
    }
}
