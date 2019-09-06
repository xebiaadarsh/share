export default function searchReducer(state = [], action){
    switch (action.type) {
        case 'FETCH_SEARCH_SUCCESS':
            return action.payload.data;
        default:
            return state;
    }
}