import API from '../../apis/API';


const FETCH_SEARCH_SUCCESS = 'FETCH_SEARCH_SUCCESS';
const FETCH_SEARCH_FAILURE = 'FETCH_SEARCH_FAILURE';

export const searchItemActionCreator = (params)=>{
    const param = 'name='+ params;
    const url = `/api/v1/search?${param}`;
    // const url =  '/data.json'
    return (dispatch) => {
        return API.get(url)
         .then( (response) => {
             dispatch(searchActionSuccess(response.data));
         })
         .catch(error=>{
             dispatch(searchActionFailure(error));
             throw(error);
         })
     }
}


const searchActionSuccess=(data)=>{
    return {
        type: FETCH_SEARCH_SUCCESS,
        payload: {
            data,
            error: null
        }
    }
}

const searchActionFailure = (error) =>{
    return {
        type: FETCH_SEARCH_FAILURE,
        payload: {
            data: null,
            error
        }
    }
}