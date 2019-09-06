
import axios from 'axios';
import { GET_SEARCH_SUCCESS } from './types';

export const searchAction = (param)=>{
    const url = `http://localhost:3035/search?name=${param}`;
    return (dispatch) => {
        return axios.get(url)
         .then( (response) => {
             dispatch(actionSearch(response.data));
         })
     }
}


const actionSearch = (data) => {
    return {
        type: GET_SEARCH_SUCCESS,
        payload: data
    }
}
